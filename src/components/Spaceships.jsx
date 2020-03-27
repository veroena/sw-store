import React from 'react';
import { useFetch } from '../hooks/fetch';
import Spaceshipcard from './Spaceshipcard';
import './Itemslist.scss';
import { Link } from 'react-router-dom';

const Spaceships = props => {
  // const { setItem } = props;
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
        <ul className="spaceships__list articles__list">
            {spaceships.map((ship, index) =>
                <li className="spaceships__list--item articles__list--item" id={ship.id}  data-url={ship.url} key={index}>
                <Link to={`/spaceships/${ship.id}`}>
                    <Spaceshipcard  shipId={ship.id} shipName ={ship.name} shipPrice={ship.price} />
                </Link>
                </li>
            )}
        </ul>
    );
  } else if (!isLoading && (!spaceships || spaceships.length === 0)) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

export default Spaceships;