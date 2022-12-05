import React from "react";
import { Link } from "react-router-dom";
function Header() {
	return (
		<div className="header">
			<Link to="/" className="under-line">
				<h1>NoshaTok</h1>
			</Link>

			<Link to="/upload" className="upload">
				+ Upload
			</Link>

			<div>
				<Link to="/like" className="upload">
					Favorites
				</Link>
			</div>
		</div>
	);
}

export default Header;
