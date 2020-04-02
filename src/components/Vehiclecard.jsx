import React from 'react';

const Vehiclecard = props => {
    const {vehicleId, vehicleName, vehicleUrl, vehiclePrice} = props;
    return (
        <div className="vehicle__container articles__list--container" id={vehicleId} data-url={vehicleUrl}>
            <p className="vehicle__name articles__list--name">{vehicleName}</p>
            <p className="vehicle__price articles__list--price">Price: {vehiclePrice}</p>
        </div>
    )

}

export default Vehiclecard;