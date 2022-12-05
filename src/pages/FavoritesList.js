import { FavoritesContext } from "../FavoritesContext";
import { useContext } from "react";
import React from "react";
import ButtonLike from "../components/ButtonLike";

function FavoritesList() {
	const [favVideos] = useContext(FavoritesContext);

	if (favVideos.length === 0) {
		return <div>You have no favorites</div>;
	}

	return (
		<div>
			<h1>FavoritesList</h1>
			<>
				{favVideos.map((favVideo) => (
					<div key={favVideo.id}>
						<video src={favVideo.url} width={300} autoPlay controls></video>
						<ButtonLike video={favVideo} />
					</div>
				))}
			</>
		</div>
	);
}

export default FavoritesList;
