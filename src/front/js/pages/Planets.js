// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// export const Planet = () => {

//     const [planet, setPlanet] = useState()

//     const { store, actions } = useContext(Context);
//     const { _id } = useParams()

//     useEffect(() => {
//         actions.getPlanets()
//         setPlanet(store.planets.find((planet) => {
//             return planet._id == _id
//         }))
//     }, [])

//     return (

//         <React.Fragment>
//             <h1>
//                 Planet's Details:
//                 {planet && planet.properties.name}
//             </h1>
//             {/* <p>
//                 Birth Year:
//                 {planet && planet.properties.birth_year}
//             </p>
//             <p>
//                 Gender:
//                 {planet && planet.properties.gender}
//             </p>
//             <p>
//                 Height:
//                 {planet && planet.properties.height}cm
//             </p>
//             <p>
//                 Skin Color:
//                 {planet && planet.properties.skin_color}
//             </p>
//             <p>
//                 Hair Color:
//                 {planet && planet.properties.hair_color}
//             </p>
//             <p>
//                 Eye Color:
//                 {planet && planet.properties.eye_color}
//             </p> */}
//         </React.Fragment>
//     );

// };