import React from 'react';

const Spaceshipcard = props => {
    const {shipId, shipName, shipUrl, shipPrice} = props;
    return (
        <div className="ship__container articles__list--container" id={shipId}>
            <p className="ship__name articles__list--name">{shipName}</p>
            <p className="ship__price articles__list--price">Price: {shipPrice}</p>
        </div>
    )

}

export default Spaceshipcard;