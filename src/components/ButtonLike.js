import heartSolid from "../assets/heart-solid.svg";
import heartRegular from "../assets/heart-regular.svg";
import { FavoritesContext } from "../FavoritesContext";
import { useContext } from "react";

function ButtonLike({ video }) {
	const [favVideos, setFavVideos] = useContext(FavoritesContext);
	// const [isFavLoading, setIsFavLoading] = useContext(FavoritesContext);

	function addLike() {
		console.log("should add", favVideos, video);
		const newVideos = [...favVideos, video];
		setFavVideos(newVideos);
	}
	function removeLike() {
		const filterFavById = favVideos.filter((vid) => vid.id !== video.id);
		setFavVideos(filterFavById);
	}
	return (
		<>
			{favVideos.includes(video) ? (
				<button className="heartButton" onClick={removeLike}>
					<img className="heart" src={heartSolid} alt="heartsolid" />
				</button>
			) : (
				<button className="heartButton" onClick={addLike}>
					<img className="heart" src={heartRegular} alt="heartregular" />
				</button>
			)}
		</>
	);
}
export default ButtonLike;
