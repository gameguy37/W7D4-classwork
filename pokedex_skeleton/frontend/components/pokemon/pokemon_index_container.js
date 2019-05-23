import { connect } from 'react-redux';
import selectAllPokemon from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';
import { requestAllPokemon}  from '../../actions/pokemon_actions';

const mapStateToProps = (state) => ({
    pokemon: selectAllPokemon(state)
});

// const msp = state => {
//     return {
//         pokemon: selectAllPokemon(state)
//     }
// }

const mapDispatchToProps = (dispatch) => ({
    requestAllPokemon: () => dispatch(requestAllPokemon())
    // requestAllPokemon is the thunk action creator
    // requestAllPokemon() is the (dispatch) => return APIUtil.fetchAllPokemon()
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);