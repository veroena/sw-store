import React, {useEffect, useContext}  from 'react';
// import { useFetch } from '../hooks/fetch';
import Planetcard from './Planetcard';
import {GlobalContext} from '../common/contexts';
import { Link } from 'react-router-dom';


const Planets = props => {
  const {state: {planets, loading}, dispatch} = useContext(GlobalContext);

  useEffect(() => {
    dispatch({type: 'SET_LOADING'});

    fetch('https://swapi.co/api/planets')
    .then(results => results.json())
    .then(data => {
      const planetsToSave = data
        ? data.results.map((item, index) => ({
            name: item.name,
            id: index + 1,
            diameter: item.diameter,
            rotation: item.rotation_period,
            orbital: item.orbital_period,
            climate: item.climate,
            gravity: item.gravity,
            terrain: item.terrain,
            surface_water: item.surface_water,
            population: item.population
          }))
        : [];
      // const [isLoading, fetchedData] = useFetch('https://swapi.co/api/planets', []);

        dispatch({type: 'SET_PLANETS', payload: planetsToSave})
    })

  }, [dispatch])


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