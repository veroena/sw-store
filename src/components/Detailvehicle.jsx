import React, {useContext}  from 'react';
import {GlobalContext} from '../common/contexts'

const Detailplanet = props => {
  const {state: {vehicles, loading}, dispatch} = useContext(GlobalContext);
  const id = parseInt(props.match.params.id);
  const vehicle = vehicles.find(item => item.id === id);
  
  return (
    <div>
      {vehicles.length > 0 ?
        <ul className="item__specs">
            <li className="item__detail">{vehicle.name}</li>
            <li className="item__detail">Model: {vehicle.model}</li>
            <li className="item__detail">Manufacturer: {vehicle.manufacturer}</li>
            <li className="item__detail">Max. speed: {vehicle.max_speed}</li>
            <li className="item__detail">Crew: {vehicle.crew}</li>
            <li className="item__detail">Passengers: {vehicle.passengers}</li>
            <li className="item__detail">Cargo capacity: {vehicle.cargo}</li>
            <li className="item__detail">Price: {vehicle.price}</li>
        </ul>
        :
        <p>Could not fetch any data.</p>
      }
    </div>
  )
}

export default Detailplanet;