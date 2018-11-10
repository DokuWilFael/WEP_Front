import React, { Component } from 'react';
import './App.css';

import {Provider} from 'react-redux';
import configureStore from './reducers/configureStore.js';

import ConnexionManager from './components/ConnexionManager.js';
import BodyManager from './components/BodyManager.js';
import UserMenu from './components/UserMenu.js';
import CityFetch from './components/CityFetch.js';

const store = configureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      
      <div className="App">
        <CityFetch />
        <header className="App-header">
          <div className="LeftHeader">
            <UserMenu />
          </div>
          <h1 className="Title">Week-end Planifier</h1>
          <div className="ConnexionManager">
            <ConnexionManager />
          </div>
        </header>
        
        <div className="BigBody">
          <BodyManager />
        </div>
      </div>

      </Provider>
    );
  }
}

export default App;
