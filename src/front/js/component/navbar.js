import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starwarslogo.png";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light sticky-top">
			<div className="container">
				<Link to="/">
					<img style={{ width: "100px" }} src={starWarsLogo}></img>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Favorites</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
