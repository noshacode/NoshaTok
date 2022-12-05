import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Header from "./components/Header";
import "./App.css";
import FavoritesList from "./pages/FavoritesList";
import FavoriteProvider from "./FavoritesContext";
function App() {
	return (
		<>
			<FavoriteProvider>
				<Header />
				<Routes>
					<Route path="/like" element={<FavoritesList />} />
					<Route path="/upload" element={<Upload />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</FavoriteProvider>
		</>
	);
}

export default App;
