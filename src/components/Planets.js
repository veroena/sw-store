import React from 'react';

import { useFetch } from '../hooks/fetch';


const Planets = props => {
  const [isLoading, fetchedData] = useFetch('https://swapi.co/api/planets', []);

  const planets = fetchedData
    ? fetchedData.results.map((item, index) => ({
        name: item.name,
        id: index + 1
      }))
    : [];

  let content = <p>Loading planets...</p>;

  if (!isLoading && planets && planets.length > 0) {
    content = (
        <ol className="planets__list">
            {planets.map((ship, index) =>
                <li className="planets__list--item" key={index}>
                    <p className="planets__list--text">{ship.name}</p>
                </li>
            )}
        </ol>
    );
  } else if (
    !isLoading &&
    (!planets || planets.length === 0)
  ) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

export default Planets;