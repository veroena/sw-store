import React from 'react';

import { useFetch } from '../hooks/fetch';


const Spaceships = props => {
  const [isLoading, fetchedData] = useFetch('https://swapi.co/api/starships/', []);

  const spaceships = fetchedData
    ? fetchedData.results.map((item, index) => ({
        name: item.name,
        id: index + 1
      }))
    : [];

  let content = <p>Loading spaceships...</p>;

  if (!isLoading && spaceships && spaceships.length > 0) {
    content = (
        <ol className="spaceships__list">
            {spaceships.map((ship, index) =>
                <li className="spaceships__list--item" key={index}>
                    <p className="spaceships__list--text">{ship.name}</p>
                </li>
            )}
        </ol>
    );
  } else if (
    !isLoading &&
    (!spaceships || spaceships.length === 0)
  ) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

export default Spaceships;