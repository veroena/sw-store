import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppGlobalProvider } from '../src/common/contexts'
import './App.scss';
import Spaceships from './components/Spaceships';
import Vehicles from './components/Vehicles';
import Planets from './components/Planets';
// import Infoitem from './components/Infoitem';
import Header from './components/Header';
import Detailplanet from './components/Detailplanet';
import Detailvehicle from './components/Detailvehicle';
import Detailspaceship from './components/Detailspaceship';
import Home from './components/Home';

const App = props => {

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
              <Spaceships />)}
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
          </Switch>
        </div>
      </AppGlobalProvider>
    </BrowserRouter>
  )
}

export default App;
