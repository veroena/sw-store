import React from 'react';
import { Link } from 'react-router-dom';

const Spaceshipcard = props => {
    const {shipId, shipName, shipUrl, shipPrice, addToCart} = props;
    return (
        <div className="ship__container" id={shipId} data-url={shipUrl}>
            <Link to={`/spaceships/${shipId}`}>
                <p className="ship__name">{shipName}</p>
            </Link>
            <p className="ship__price">Price: {shipPrice}</p>
            <button id={shipId} onClick={(e) => addToCart(e)}>Buy</button>
        </div>
    )

}

export default Spaceshipcard;