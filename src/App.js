import React from 'react';
import {useState} from 'react';
import './App.css';
import Spaceships from './components/Spaceships';
import Vehicles from './components/Vehicles';
import Planets from './components/Planets';

const App = props => {

  const [category, setCategory] = useState('');

  return (
    <div>
      <nav className="menu">
        <button className="category__button category__spaceships" onClick={() => setCategory('spaceships')}>Spaceships</button>
        <button className="category__button category__vehicles" onClick={() => setCategory('vehicles')}>Vehicles</button>
        <button className="category__button category__planets" onClick={() => setCategory('planets')}>Planets</button>
      </nav>
      {category === 'spaceships' ? <Spaceships /> : null}
      {category === 'vehicles' ? <Vehicles /> : null}
      {category === 'planets' ? <Planets /> : null}
    </div>
  )
}

export default App;
