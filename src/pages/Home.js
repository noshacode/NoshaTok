import React, { useEffect, useState } from "react";
import Video from "../components/Video";
import { db } from "../firebase/config";

function Home() {
	const [videos, setVideos] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
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
			unsubscribe();
		};
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="container-home">
			<div className="videos">
				{videos.map((video) => (
					<div key={video.id}>
						<Video
							key={video.id}
							video={video}
							srcProp={video.url}
							width={300}
						/>
						<div className="videos">
							Posted {window.moment(video.createdAt.seconds * 1000).fromNow()}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;
