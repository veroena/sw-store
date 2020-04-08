import React, {useEffect, useContext}  from 'react';
import api, { Model } from '../common/api';
import Planetcard from './Planetcard';
import {GlobalContext} from '../common/contexts';
import { Link } from 'react-router-dom';


const Planets = props => {
  const {state: {planets, loading}, dispatch} = useContext(GlobalContext);


  useEffect(() => {
    if (!planets.length) {
      dispatch({type: 'SET_LOADING'});
      api(Model.planet, payload => dispatch({type: 'SET_PLANETS', payload}));
    }
  }, [planets])


  let content = <p>Loading planets...</p>;

  if (!loading && planets && planets.length > 0) {
    content = (
        <ul className="planets__list articles__list">
            {planets.map((planet, index) =>
                <li className="planets__list--item articles__list--item" id={planet.id} key={index}>
                    <Link to={`/planets/${planet.id}`}>
                      <Planetcard planetName={planet.name} planetId={planet.id} planetUrl={planet.url} planetDiameter={planet.diameter} />
                    </Link>
                </li>
            )}
        </ul>
    );
  } else if (
    !loading &&
    (!planets || planets.length === 0)
  ) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

export default Planets;