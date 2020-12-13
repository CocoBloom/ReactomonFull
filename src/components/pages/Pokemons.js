import React from 'react'; 
import { Pokemon } from './Pokemon';
import { useHttp } from '../hooks/http';

export const Pokemons = () => {

  const [pokemons] = useHttp('https://pokeapi.co/api/v2/pokemon', []);

  let content = `<p>Loading Pokemons</p>`;

  if(pokemons.results) {
      let results = pokemons.results;
      content = (results.map((pokemon) => ( 
        <Pokemon pokemon={pokemon}
          key={pokemon.url}
        />
      )))
  } else {
      content = `<p>Pokemons are loading :(</p>`
  }

  return content;
}
