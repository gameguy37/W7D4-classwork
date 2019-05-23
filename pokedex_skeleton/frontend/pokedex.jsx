import React from 'react';
import ReactDOM from 'react-dom';
// import { receiveAllPokemon, requestAllPokemon, RECEIVE_ALL_POKEMON } from './actions/pokemon_actions';
// import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';
// import selectAllPokemon from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, rootEl);
    window.dispatch = store.dispatch;
});

// window.receiveAllPokemon = receiveAllPokemon;
// window.fetchAllPokemon = fetchAllPokemon;
// window.RECEIVE_ALL_POKEMON = RECEIVE_ALL_POKEMON;
// const store = configureStore();
// window.getState = store.getState;
// window.requestAllPokemon = requestAllPokemon;
// window.selectAllPokemon = selectAllPokemon;