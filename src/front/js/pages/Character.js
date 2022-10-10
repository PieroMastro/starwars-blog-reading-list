import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

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
            <h1>
                Character's Details:
                {character && character.properties.name}
            </h1>
            {/* <p>
                Birth Year:
                {character && character.properties.birth_year}
            </p>
            <p>
                Gender:
                {character && character.properties.gender}
            </p>
            <p>
                Height:
                {character && character.properties.height}cm
            </p>
            <p>
                Skin Color:
                {character && character.properties.skin_color}
            </p>
            <p>
                Hair Color:
                {character && character.properties.hair_color}
            </p>
            <p>
                Eye Color:
                {character && character.properties.eye_color}
            </p> */}
        </React.Fragment>
    )
};