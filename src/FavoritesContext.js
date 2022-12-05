import React, { useState, createContext } from "react";

export const FavoritesContext = createContext();

function FavoriteProvider(props) {
	const [favVideos, setFavVideos] = useState([]);

	return (
		<FavoritesContext.Provider value={[favVideos, setFavVideos]}>
			{props.children}
		</FavoritesContext.Provider>
	);
}

export default FavoriteProvider;
