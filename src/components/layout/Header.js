import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  font-size: 20px;
  color: green;
  &:hover{
      background-color: pink
  };
`

export default function Header() {
    return (
        <header>
            <Div>
                <h3>Welcome in the beautiful World of Pokemons!</h3>
                <br/>
                <Link to="/">Home</Link>
                <span> | </span>
                <Link to="/pokemons">Pokemons</Link>
                <span> | </span>
                <Link to="/types">Types</Link>
                <span> | </span>
                <Link to="/catchedpokemons">Catched Pokemons</Link>
            </Div>
        </header>
    )
}
