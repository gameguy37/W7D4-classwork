import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    const { items } = action;
    switch (action.type) {
        case RECEIVE_POKEMON:
            const itemList = Object.new
            items.forEach
            return Object.assign({}, oldState, {[item.id]: pokemon.items  } )
        default:
            return state;
    }
};

export default itemsReducer;