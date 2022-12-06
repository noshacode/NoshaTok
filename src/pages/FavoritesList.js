import { FavoritesContext } from "../FavoritesContext";
import { useContext } from "react";
import React from "react";
import Video from "../components/Video";

function FavoritesList() {
	const [favVideos] = useContext(FavoritesContext);

	if (favVideos.length === 0) {
		return <div className="No-favorites">You have no favorites 😬 </div>;
	}

	return (
		<div className="container-home">
			<h1 className="videos">Favorites</h1>

			<div className="videos">
				{favVideos.map((favVideo) => (
					<div key={favVideo.id}>
						<Video srcProp={favVideo.url} width={300} video={favVideo} />
					</div>
				))}
			</div>
		</div>
	);
}

export default FavoritesList;
