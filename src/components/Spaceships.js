import React from 'react';
import { useFetch } from '../hooks/fetch';
import Spaceshipcard from './Spaceshipcard';

const Spaceships = props => {
  const { setItem } = props;
  const [isLoading, fetchedData] = useFetch('https://swapi.co/api/starships/', []);

  const spaceships = fetchedData
    ? fetchedData.results.map((item, index) => ({
        name: item.name,
        id: index + 1,
        url: item.url,
        price: item.cost_in_credits
      }))
    : [];


  let content = <p>Loading spaceships...</p>;

  if (!isLoading && spaceships && spaceships.length > 0) {
    content = (
        <ol className="spaceships__list">
            {spaceships.map((ship, index) =>
                <li className="spaceships__list--item" key={index} onClick={setItem}>
                    <Spaceshipcard  shipId={ship.id} shipName ={ship.name} shipUrl={ship.url} shipPrice={ship.price} />
                </li>
            )}
        </ol>
    );
  } else if (!isLoading && (!spaceships || spaceships.length === 0)) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

export default Spaceships;