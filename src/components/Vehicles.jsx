import React, {useEffect, useContext}  from 'react';
// import { useFetch } from '../hooks/fetch';
import Vehiclecard from './Vehiclecard';
import { Link } from 'react-router-dom';
import {GlobalContext} from '../common/contexts';


const Vehicles = props => {
  const {state: {vehicles, loading}, dispatch} = useContext(GlobalContext);
  // const [isLoading, fetchedData] = useFetch('https://swapi.co/api/vehicles', []);


  useEffect(() => {
    dispatch({type: 'SET_LOADING'});

    fetch('https://swapi.co/api/vehicles')
    .then(results => results.json())
    .then(data => {
      const vehiclesToSave = data
        ? data.results.map((item, index) => ({
            name: item.name,
            id: index + 1,
            url: item.url,
            model: item.model,
            manufacturer: item.manufacturer,
            price: item.cost_in_credits,
            max_speed: item.max_atmosphering_speed,
            crew: item.crew,
            passengers: item.passengers,
            cargo: item.cargo_capacity
          }))
        : [];

        dispatch({type: 'SET_VEHICLES', payload: vehiclesToSave})
    })

  }, [dispatch])

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