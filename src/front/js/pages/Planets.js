import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsLogo from "../../img/starwarslogo.png";

export const Planet = () => {

    const [planet, setPlanet] = useState()

    const { store, actions } = useContext(Context);
    const { uid } = useParams()

    useEffect(() => {
        actions.getPlanets()
        setPlanet(store.planets.find((planet) => {
            return planet.uid == uid
        }))
    }, [])

    return (

        <React.Fragment>
            <div className="container">
                <div className="row d-flex justify-content-evenly">
                    <img
                        src={starWarsLogo}
                        className="img-description col-6"
                        alt="..."
                    />
                    <div className="description col-6 text-center">
                        <h1 className="display-4 fw-bold">{planet && planet.properties.name}</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Proin semper diam et augue faucibus, eu elementum leo
                            euismod. Aenean id ipsum velit. Integer quis hendrerit
                            purus. Aliquam sagittis diam et lorem posuere, sit amet
                            ultricies velit efficitur. Nunc molestie elit risus, ut
                            commodo ligula facilisis et. Suspendisse viverra lobortis
                            ipsum.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center text-danger border-top border-danger mt-4 pt-4 text-center">
                    <div className="col-2">
                        <p className="fw-bolder">Name</p>
                        <p>{planet && planet.properties.name}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Population</p>
                        <p>2000000</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Terrain</p>
                        <p>grasslands, mountains</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Diameter</p>
                        <p>12500km</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Orbital Period</p>
                        <p>264</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Climate</p>
                        <p>Temperature</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
