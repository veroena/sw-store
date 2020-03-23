import React from 'react';

const Vehiclecard = props => {
    const {vehicleId, vehicleName, vehicleUrl, vehiclePrice} = props;
    return (
        <div className="vehicle__container" id={vehicleId} data-url={vehicleUrl}>
            <p className="vehicle__name">{vehicleName}</p>
            <p className="vehicle__price">Price: {vehiclePrice}</p>
        </div>
    )

}

export default Vehiclecard;