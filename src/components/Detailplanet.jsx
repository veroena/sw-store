import React, {useContext}  from 'react';
import {GlobalContext} from '../common/contexts';
import { Link } from 'react-router-dom';

const Detailplanet = props => {
  const {state: {planets}} = useContext(GlobalContext);
  const id = parseInt(props.match.params.id);
  const planet = planets.find(item => item.id === id);
  

  return (
    <div className="detail__container">
      <Link to="/planets">Back</Link>
      {planets.length > 0 ?
        <ul className="item__specs">
            <li className="item__detail">{planet.name}</li>
            <li className="item__detail">Diameter: {planet.diameter}</li>
            <li className="item__detail">Rotation period: {planet.rotation}</li>
            <li className="item__detail">Orbital period: {planet.orbital}</li>
            <li className="item__detail">Climate: {planet.climate}</li>
            <li className="item__detail">Terrain: {planet.terrain}</li>
            <li className="item__detail">Surface water: {planet.surface_water}</li>
            <li className="item__detail">Population: {planet.population}</li>
        </ul>
        :
        <p>Could not fetch any data.</p>
      }
      <Link to="/auction">Buy</Link>
    </div>
  )
}

export default Detailplanet;