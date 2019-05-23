import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    const { pokemon } = action;
    switch(action.type){
        case RECEIVE_ALL_POKEMON:
            return Object.assign({}, oldState, pokemon);
        case RECEIVE_POKEMON:
            debugger
            return Object.assign({}, oldState, { [pokemon.id]: pokemon });
        default:
            return state;
    }
};

export default pokemonReducer;