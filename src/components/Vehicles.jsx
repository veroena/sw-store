import React from 'react';
import { useFetch } from '../hooks/fetch';
import Vehiclecard from './Vehiclecard';


const Vehicles = props => {
  // const { setItem } = props;
  const [isLoading, fetchedData] = useFetch('https://swapi.co/api/vehicles', []);

  const vehicles = fetchedData
    ? fetchedData.results.map((item, index) => ({
        name: item.name,
        id: index + 1,
        url: item.url,
        price: item.cost_in_credits
      }))
    : [];

  let content = <p>Loading vehicles...</p>;

  if (!isLoading && vehicles && vehicles.length > 0) {
    content = (
        <ul className="vehicles__list articles__list">
            {vehicles.map((vehicle, index) =>
                <li className="vehicles__list--item articles__list--item" key={index}>
                  <Vehiclecard  vehicleId={vehicle.id} vehicleName ={vehicle.name} vehicleUrl={vehicle.url} vehiclePrice={vehicle.price} />
                </li>
            )}
        </ul>
    );
  } else if (
    !isLoading &&
    (!vehicles || vehicles.length === 0)
  ) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

export default Vehicles;