import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsLogo from "../../img/starwarslogo.png";

export const Character = () => {

    const [character, setCharacter] = useState()

    const { store, actions } = useContext(Context);
    const { uid } = useParams()

    useEffect(() => {
        actions.getCharacters()
        setCharacter(store.characters.find((character) => {
            return character.uid == uid
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
                        <h1 className="display-4 fw-bold">{character && character.properties.name}</h1>
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
                        <p>{character && character.properties.name}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Birth Year</p>
                        <p>2000</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Gender</p>
                        <p>Male</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Height</p>
                        <p>178cm</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Skin Color</p>
                        <p>Light</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Eye Color</p>
                        <p>Blue</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
