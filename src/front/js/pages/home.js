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
				<h2 className="text-danger text-start my-4 display-4">Characters</h2>
				<div className=" carousel mb-5">
					<div className="itemcard gap-5">
						{
							store.characters.map((character) => {
								return <ItemCard
									item={character}
									key={character._id}
									endpoint="characters" />
							})
						}
					</div>
				</div>
				<h2 className="text-danger text-start my-4 display-4">Planets</h2>
				<div className=" carousel mb-5">
					<div className="itemcard gap-5">
						{
							store.planets.map((planet) => {
								return <ItemCard
									item={planet}
									key={planet._id}
									endpoint="planets" />
							})
						}
					</div>
				</div>
				<h2 className="text-danger text-start my-4 display-4">Vehicles</h2>
				<div className=" carousel mb-5">
					<div className="itemcard gap-5">
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
			</div>
		</React.Fragment>
	);
};
