import React from 'react';

const Spaceshipcard = props => {
    const {shipId, shipName, shipUrl, shipPrice} = props;
    return (
        <div className="ship__container" id={shipId} data-url={shipUrl}>
            <p className="ship__name">{shipName}</p>
            <p className="ship__price">Price: {shipPrice}</p>
        </div>
    )

}

export default Spaceshipcard;