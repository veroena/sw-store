import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppGlobalProvider } from '../src/common/contexts'
import './App.scss';
import Spaceships from './components/Spaceships';
import Vehicles from './components/Vehicles';
import Planets from './components/Planets';
import Header from './components/Header';
import Detailplanet from './components/Detailplanet';
import Detailvehicle from './components/Detailvehicle';
import Detailspaceship from './components/Detailspaceship';
import Auction from './components/Auction';
import Cart from './components/Cart';
import Home from './components/Home';

const App = props => {
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem('id')));
  // })


  const addToCart = (event) => {
    const itemId = event.currentTarget.id;
    setCart([...cart, parseInt(itemId)]);
    localStorage.setItem('id', JSON.stringify([...itemId]));
  }

  return (
      <BrowserRouter>
        <AppGlobalProvider>
          <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/spaceships/:id" render={ props => (
              <Detailspaceship match={props.match}/>)}
            />
            <Route path="/spaceships" render={() => (
              <Spaceships addToCart={addToCart} />)}
            />
            <Route path="/vehicles/:id" render={ props => (
              <Detailvehicle match={props.match} />)}
            />
            <Route path="/vehicles" render={() => (
              <Vehicles />)}
            />
            <Route path="/planets/:id" render={ props => (
              <Detailplanet match={props.match} />)}
            />
            <Route path="/planets" render={() => (
              <Planets />)}
            />
            <Route path="/auction" render={() => (
              <Auction />)}
            />
            <Route path="/cart" render={() => (
              <Cart />)}
            />
          </Switch>
        </div>
      </AppGlobalProvider>
    </BrowserRouter>
  )
}

export default App;
