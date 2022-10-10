import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ItemCard } from "../component/ItemCard";

export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters()
		actions.getPlanets()
		actions.getVehicles()
	}, [])

	return (
		<React.Fragment>
			<div className="container">
				<div className="container overflow-auto text-center my-5">
					<h1>Characters</h1>
					{
						store.characters.map((character) => {
							return <ItemCard
								item={character}
								key={character._id}
								endpoint="characters" />
						})
					}
				</div>
				<div className="container text-center my-5">
					<h1>Planets</h1>
					{
						store.planets.map((planet) => {
							return <ItemCard
								item={planet}
								key={planet._id}
								endpoint="planets" />
						})
					}
				</div>
				<div className="container text-center my-5">
					<h1>Vehicles</h1>
					{
						store.vehicles.map((vehicle) => {
							return <ItemCard
								item={vehicle}
								key={vehicle._id}
								endpoint="vehicles" />
						})
					}
				</div>
			</div>
		</React.Fragment>
	);
};
