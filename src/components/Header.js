import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
	return (
		<>
			<Navbar bg="dark" variant="dark" className="header">
				<Container className="flex">
					<div>
						<Link to="/">
							<h1>NoshaTok</h1>
						</Link>
					</div>
					<div className="flex">
						<div className="end-link">
							<Link to="/upload">
								<h5>+ Upload</h5>
							</Link>
						</div>
						<div className="end-link">
							<Link to="/like">
								<h5>Favorites</h5>
							</Link>
						</div>
					</div>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
