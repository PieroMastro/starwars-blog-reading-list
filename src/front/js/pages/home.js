import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Characters } from "../component/Characters";
import "../../styles/home.css";
import { ItemCard } from "../component/ItemCard";

export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters()
		actions.getPlanets()
		// actions.getVehicles()
	}, [])

	return (
		<React.Fragment>
			<div className="">
				<div className="text-center mt-5">
					<h1>Characters</h1>
					{
						store.characters.map((characterCard) => {
							return <ItemCard item={characterCard} key={characterCard.uid} endpoint="characters" />
						})
					}
				</div>
				<div className="text-center mt-5">
					<h1>Planets</h1>
					{
						store.planets.map((planet) => {
							return <ItemCard item={planet} key={planet.uid} endpoint="planets" />
						})
					}
				</div>
				{/* <div className="text-center mt-5">
				<h1>Vehicles</h1>
				{
					store.planets.map((planet) => {
						return <ItemCard item={planet} key={planet.uid} endpoint="planets" />
					})
				}
			</div> */}
			</div>
		</React.Fragment>
	);
};
