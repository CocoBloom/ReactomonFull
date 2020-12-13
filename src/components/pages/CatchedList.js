import React, { useContext } from 'react';
import { Pokemon } from './Pokemon';
import { CatchContext } from './CatchContext';

export const CatchedList = () => {

    const [catched] = useContext(CatchContext);

    let content = `<p>Loading Catched Pokemons</p>`;

    if(catched) {
        content = (catched.map((pokemon) => ( 
            <Pokemon pokemon={pokemon}
            key={pokemon.url}
            />
        )))
    } else {
        content = `<p>Pokemons are loading :(</p>`
    }
    return content;
}