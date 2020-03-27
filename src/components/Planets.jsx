import React from 'react';
import { useFetch } from '../hooks/fetch';
import Planetcard from './Planetcard';


const Planets = props => {
  // const { setItem } = props;
  const [isLoading, fetchedData] = useFetch('https://swapi.co/api/planets', []);

  const planets = fetchedData
    ? fetchedData.results.map((item, index) => ({
        name: item.name,
        id: index + 1,
        url: item.url,
        diameter: item.diameter
      }))
    : [];

  let content = <p>Loading planets...</p>;

  if (!isLoading && planets && planets.length > 0) {
    content = (
        <ul className="planets__list articles__list">
            {planets.map((planet, index) =>
                <li className="planets__list--item articles__list--item" key={index}>
                    <Planetcard planetName={planet.name} planetId={planet.id} planetUrl={planet.url} planetDiameter={planet.diameter}  />
                </li>
            )}
        </ul>
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