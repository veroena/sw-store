import React from 'react';

const Planetcard = props => {
    const {planetId, planetName, planetUrl, planetDiameter} = props;
    return (
        <div className="planet__container articles__list--container" id={planetId} data-url={planetUrl}>
            <p className="planet__name articles__list--name">{planetName}</p>
            <p className="planet__price articles__list--diameter">Diameter: {planetDiameter}</p>
        </div>
    )

}

export default Planetcard;