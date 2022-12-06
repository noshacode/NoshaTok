import heartSolid from "../assets/heart-solid.svg";
import heartRegular from "../assets/heart-regular.svg";
import { FavoritesContext } from "../FavoritesContext";
import { useContext } from "react";

function ButtonLike({ video }) {
	const [favVideos, setFavVideos] = useContext(FavoritesContext);

	function addLike() {
		const newVideos = [...favVideos, video];
		setFavVideos(newVideos);
	}
	function removeLike() {
		const filterFavById = favVideos.filter((vid) => vid.id !== video.id);
		setFavVideos(filterFavById);
	}
	return (
		<div className="button-container">
			{favVideos.some((item) => item.id === video.id) ? (
				<button className="heartButton" onClick={removeLike}>
					<img className="heart" src={heartSolid} alt="heartsolid" />
				</button>
			) : (
				<button className="heartButton" onClick={addLike}>
					<img className="heart" src={heartRegular} alt="heartregular" />
				</button>
			)}
		</div>
	);
}
export default ButtonLike;
