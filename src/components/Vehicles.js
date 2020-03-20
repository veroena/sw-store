import React from 'react';

import { useFetch } from '../hooks/fetch';


const Vehicles = props => {
  const [isLoading, fetchedData] = useFetch('https://swapi.co/api/vehicles', []);

  const vehicles = fetchedData
    ? fetchedData.results.map((item, index) => ({
        name: item.name,
        id: index + 1
      }))
    : [];

  let content = <p>Loading vehicles...</p>;

  if (!isLoading && vehicles && vehicles.length > 0) {
    content = (
        <ol className="vehicles__list">
            {vehicles.map((ship, index) =>
                <li className="vehicles__list--item" key={index}>
                    <p className="vehicles__list--text">{ship.name}</p>
                </li>
            )}
        </ol>
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