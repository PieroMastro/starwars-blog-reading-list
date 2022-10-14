import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starwarslogo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light sticky-top">
			<div className="container">
				<Link to="/">
					<img style={{ width: "100px" }} src={starWarsLogo}></img>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites ({store.favorites.length})
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((favorite, index) => {
								return <li className="dropdown-item"
									key={index}>
									{favorite.name}
									<i className="far fa-trash-alt"
										onClick={() => {
											actions.delFavorite(index)
										}
										}></i>
								</li>
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
