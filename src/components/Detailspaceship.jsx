import React, {useContext}  from 'react';
import {GlobalContext} from '../common/contexts';
import { Link } from 'react-router-dom';

const Detailspaceship = props => {
  const {state: {spaceships}} = useContext(GlobalContext);
  const id = parseInt(props.match.params.id);
  const spaceship = spaceships.find(item => item.id === id);
  
  return (
    <div className="detail__container">
      <Link to="/spaceships">Back</Link>
      {spaceships.length > 0 ?
          <ul className="item__specs">
              <li className="item__detail">{spaceship.name}</li>
              <li className="item__detail">Model: {spaceship.model}</li>
              <li className="item__detail">Manufacturer: {spaceship.manufacturer}</li>
              <li className="item__detail">Max. speed: {spaceship.max_speed}</li>
              <li className="item__detail">Crew: {spaceship.crew}</li>
              <li className="item__detail">Passengers: {spaceship.passengers}</li>
              <li className="item__detail">Cargo capacity: {spaceship.cargo}</li>
              <li className="item__detail">Price: {spaceship.price}</li>
          </ul>
        :
        <p>Could not fetch any data.</p>    
    }
    </div>
  )
}

export default Detailspaceship;