import React from "react";
import PropTypes from "prop-types"

export const ItemCard = ({ item, endpoint }) => {

    return (
        <>
            <div className="row">
                <div className="card" style={{ width: "18rem" }}>
                    {/* The src use an endpoint to set the correct URL for people, planets or vehicles */}
                    <img src={`https://starwars-visualguide.com/assets/img/${endpoint}/${item.uid}.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">{item.properties.name}</h3>
                        {/* Characters properties (characteristics) */}
                        {item.properties.gender && <p className="card-text"><strong>Gender:</strong> {item.properties.gender}</p>}
                        {item.properties.hair_color && <p className="card-text"><strong>Hair Color:</strong> {item.properties.hair_color}</p>}
                        {item.properties.eye_color && <p className="card-text"><strong>Eye Color:</strong> {item.properties.eye_color}</p>}
                        {/* Planets properties (characteristics) */}
                        {item.properties.population && <p className="card-text"><strong>Population:</strong> {item.properties.population}</p>}
                        {item.properties.terrain && <p className="card-text"><strong>Terrain:</strong> {item.properties.terrain}</p>}
                        {item.properties.diameter && <p className="card-text"><strong>Diameter</strong> {item.properties.diameter}</p>}
                        <a href="#" className="btn btn-primary">Learn more!</a>
                    </div>
                </div>
            </div>
        </>
    );
}

ItemCard.propTypes = {
    item: PropTypes.object,
    endpoint: PropTypes.string
}