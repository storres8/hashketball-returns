import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import gamesData from './gamesData'


import {createStore, compose}  from 'redux'
import {Provider} from 'react-redux'

const defaultState = {
  teams: gamesData.teams,
  selectedPlayer: null
}


const hashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SELECT_PLAYER":
      return {...state, selectedPlayer: action.player}
    default:
      return state
  }
}

function configureStore() {
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 return createStore(
   hashReducer,
   composeEnhancers()
 )
 }

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
