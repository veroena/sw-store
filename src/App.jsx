import React from 'react';
import {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Spaceships from './components/Spaceships';
import Vehicles from './components/Vehicles';
import Planets from './components/Planets';
import Infoitem from './components/Infoitem';
import Header from './components/Header';
import Home from './components/Home';

const App = props => {
  // const [category, setCategory] = useState('');
  // const [detailOpen, setDetailOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const setItem = event => {
    const itemUrl = event.target.getAttribute('data-url');
    console.log(itemUrl);
    if(itemUrl !== selectedItem) {
      setSelectedItem(itemUrl);
    }
  };

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/spaceships" render={() => (
              <Spaceships setItem={setItem}/>)}
          />
        </Switch>
      </BrowserRouter>
      <nav className="menu">
        <button className="category__button category__spaceships">Spaceships</button>
        <button className="category__button category__vehicles">Vehicles</button>
        <button className="category__button category__planets">Planets</button>
      </nav>
      {/* {(category === 'spaceships') && <Spaceships setItem={setItem} />}
      {(category === 'vehicles') && <Vehicles setItem={setItem} />}
      {(category === 'planets') && <Planets setItem={setItem} />} */}
      {selectedItem !== '' && <Infoitem selectedItem={selectedItem} />}
    </div>
  )
}

export default App;
