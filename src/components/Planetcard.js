import React from 'react';

const Planetcard = props => {
    const {planetId, planetName, planetUrl, planetDiameter} = props;
    return (
        <div className="planet__container" id={planetId} data-url={planetUrl}>
            <p className="planet__name">{planetName}</p>
            <p className="planet__price">Diameter: {planetDiameter}</p>
        </div>
    )

}

export default Planetcard;