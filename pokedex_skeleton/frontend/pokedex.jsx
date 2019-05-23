import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon, RECEIVE_ALL_POKEMON } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const rootEl = document.getElementById('root');
    ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});

window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.RECEIVE_ALL_POKEMON = RECEIVE_ALL_POKEMON;
const store = configureStore();
window.getState = store.getState;
window.dispatch = store.dispatch;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;