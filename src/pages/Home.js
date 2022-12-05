import React, { useEffect, useState } from "react";
import Video from "../components/Video";
import ButtonLike from "../components/ButtonLike";
import { db } from "../firebase/config";

function Home() {
	const [videos, setVideos] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		console.log("hi, im entering");
		const unsubscribe = db
			.collection("videos")
			.orderBy("createdAt", "desc")
			.onSnapshot((querySnapshot) => {
				const data = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setVideos(data);
			});
		setLoading(false);
		return () => {
			console.log("bye, im leaving");
			unsubscribe();
		};
	}, []);
	console.log("videos", videos);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	console.log(videos);
	return (
		<div className="container">
			<div className="videos">
				{videos.map((video) => (
					<div key={video.id}>
						<Video
							key={video.id}
							srcProp={video.url}
							width={300}
							autoPlay
							controls
						/>
						<div>
							posted at :
							{new Date(video.createdAt.seconds * 1000).toLocaleString()}
						</div>
						<ButtonLike video={video} />
					</div>
				))}
			</div>
		</div>
	);
}
console.log("videos");

export default Home;
