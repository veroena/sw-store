import React, {useEffect, useContext}  from 'react';
import api, { Model } from '../common/api';
import Vehiclecard from './Vehiclecard';
import {GlobalContext} from '../common/contexts';
import { Link } from 'react-router-dom';


const Vehicles = props => {
  const {state: {vehicles, loading}, dispatch} = useContext(GlobalContext);


  useEffect(() => {
    if (!vehicles.length) {
      dispatch({type: 'SET_LOADING'});
      api(Model.vehicle, payload => dispatch({type: 'SET_VEHICLES', payload}));
    }
  }, [vehicles])

  let content = <p>Loading vehicles...</p>;

  if (!loading && vehicles && vehicles.length > 0) {
    content = (
        <ul className="vehicles__list articles__list">
            {vehicles.map((vehicle, index) =>
                <li className="vehicles__list--item articles__list--item" id={vehicle.id} key={index}>
                  <Link to={`/vehicles/${vehicle.id}`}>
                    <Vehiclecard  vehicleId={vehicle.id} vehicleName ={vehicle.name} vehicleUrl={vehicle.url} vehiclePrice={vehicle.price} />
                  </Link>
                </li>
            )}
        </ul>
    );
  } else if (
    !loading &&
    (!vehicles || vehicles.length === 0)
  ) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

export default Vehicles;