import React, { useContext } from 'react';
import { useHttp } from '../hooks/http';
import { useParams } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import Div from '../elements/Div';
import { CatchContext } from './CatchContext';

const theme = {
    primary: 'purple',
    secondary: ' blue'
}

//TODO should use props for example send name or id
export const PokemonDetail = () => {
    
    let {id} = useParams();

    const [pokemons] = useHttp('https://pokeapi.co/api/v2/pokemon', []); 
    const [pokemonDetails] = useHttp(`https://pokeapi.co/api/v2/pokemon/${id}`, []);
    const [catched, setCatched] = useContext(CatchContext);

    const getArrayFromFetchedData = () => {
        let arrayOfResult = [];
        for ( let key in pokemonDetails) {
            if (!(pokemonDetails[key] instanceof Object)) {
                arrayOfResult[key] = pokemonDetails[key]
            } 
        }
        return arrayOfResult;
    }  

    const getPokemonByURL = () => {
        if (pokemons.results !== undefined) {
            const pokemon = pokemons.results.filter(p => p.url === `https://pokeapi.co/api/v2/pokemon/${id}/`);
            return {name: pokemon[0].name, url: pokemon[0].url}
        } else {
            return {name: ''}
        }
    }

    const pokemon = getPokemonByURL();

    const catchPokemon = e => {     
        let bools = catched.map(res => (Object.values(res).includes(e.target.name)));
        if ((!(bools.includes(true)))) {
          e.preventDefault();
          setCatched(prevCatched => [...prevCatched, {name: pokemon.name, url: pokemon.url}])
        } 
      }
      

    let { content } = `<Div><p>Data is loading...</p></Div>`
    if ((pokemonDetails !== undefined) && (pokemons !== undefined)) {
        const result = getArrayFromFetchedData();
        content = (
            <ThemeProvider theme={theme} >
                <div><br />
                    <button onClick={catchPokemon} >Catch!</button>
                    <h3>Pokemon Details </h3>
                    <h1>{ pokemon.name }</h1>
                </div>
                <Div primary>
                    { Object.entries(result).map(([key,value],index) => {
                        return <p key={index}>{key} : {value}</p>                    
                        }
                    )}
                </Div>  
            </ThemeProvider> 
        )
    } else {
        content = (
            <ThemeProvider theme={theme}>
                <div>
                    <h1>This pokemon does not exist</h1>
                </div>
            </ThemeProvider>
        )
    }
return content;

}





