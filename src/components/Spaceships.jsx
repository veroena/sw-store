import React, {useEffect, useContext}  from 'react';
// import { useFetch } from '../hooks/fetch';
import Spaceshipcard from './Spaceshipcard';
import {GlobalContext} from '../common/contexts';

import './Itemslist.scss';

const Spaceships = props => {
  const {state: {spaceships, loading}, dispatch} = useContext(GlobalContext);
  const {addToCart} = props;
  // const [isLoading, fetchedData] = useFetch('https://swapi.co/api/starships/', []);

  useEffect(() => {
    dispatch({type: 'SET_LOADING'});

    fetch('https://swapi.co/api/starships')
    .then(results => results.json())
    .then(data => {
      const spaceshipsToSave = data
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

        dispatch({type: 'SET_SPACESHIPS', payload: spaceshipsToSave})
    })

  }, [dispatch])


  let content = <p>Loading spaceships...</p>;

  if (!loading && spaceships && spaceships.length > 0) {
    content = (
        <ul className="spaceships__list articles__list">
            {spaceships.map((ship, index) =>
                <li className="spaceships__list--item articles__list--item" id={ship.id} key={index}>
                    <Spaceshipcard  shipId={ship.id} shipName ={ship.name} shipPrice={ship.price} addToCart={addToCart} />
                </li>
            )}
        </ul>
    );
  } else if (!loading && (!spaceships || spaceships.length === 0)) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

export default Spaceships;