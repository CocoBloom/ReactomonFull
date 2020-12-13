import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CatchContext } from './CatchContext';


export const Pokemon = props => {
    
    const [catched, setCatched] = useContext(CatchContext);
    const { name,url } = props.pokemon;
    let index =  url.slice(0,-1).lastIndexOf('/');
    const pokemonURL = "/pokemon/" + url.slice(index+1,-1);

    const catchPokemon = e => {     
      let bools = catched.map(res => (Object.values(res).includes(e.target.name)));
      if ((!(bools.includes(true)))) {
        e.preventDefault();
        setCatched(prevCatched => [...prevCatched, {name: name, url: url}])
      } 
    }
    
    let content = ( 
      <div className="card" >
          <Link to={pokemonURL} id={url.slice(index+1,-1)}>{ name }</Link><br />
          <button onClick={catchPokemon} name={name}>Catch!</button>
      </div>
    )

    return content;
  }


