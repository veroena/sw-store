import React, { useEffect, useContext }  from 'react';
import api, { Model } from '../common/api';
import Spaceshipcard from './Spaceshipcard';
import { GlobalContext } from '../common/contexts';
import { Link } from 'react-router-dom';

import './Itemslist.scss';


const Spaceships = props => {
  const {state: {spaceships, loading}, dispatch} = useContext(GlobalContext);

  useEffect(() => {
    if (!spaceships.length) {
      dispatch({type: 'SET_LOADING'});
      api(Model.starship, payload => dispatch({type: 'SET_SPACESHIPS', payload}));
    }
  }, [spaceships])

  let content = <p>Loading spaceships...</p>;

  if (!loading && spaceships && spaceships.length > 0) {
    content = (
        <ul className="spaceships__list articles__list">
            {spaceships.map((ship, index) =>
                <li className="spaceships__list--item articles__list--item" id={ship.id} key={index}>
                <Link to={`/spaceships/${ship.id}`}>
                    <Spaceshipcard  shipId={ship.id} shipName ={ship.name} shipPrice={ship.price} />
                </Link>
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