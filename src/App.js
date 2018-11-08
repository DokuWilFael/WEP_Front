import React, { Component } from 'react';
import './App.css';

import {Provider} from "react-redux";
import configureStore from "./reducers/configureStore.js";

import {ApiConfig} from "./config.js";

import ConnectPage from "./components/ConnectPage.js";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>

      <div className="App">
        <header className="App-header">
          <h1>Week-end Planifier</h1>
        </header>
        <div>
        <ConnectPage />
        </div>
      </div>

      </Provider>
    );
  }
}

export default App;
