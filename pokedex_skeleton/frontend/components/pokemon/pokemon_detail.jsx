import React from 'react';

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // this.props.requestAllPokemon();
    }

    render() {
        // const pokemonItems = this.props.pokemon.map((poke) => {
        //     return <PokemonIndexItem key={poke.id} pokemon={poke} />;
        // });

        return (
            <section className="pokedex">
                <ul>
                    {pokemonItems}
                </ul>
            </section>
        )
    }

}

export default PokemonDetail;