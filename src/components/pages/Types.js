import { React } from 'react';
import { Type } from './Type';
import { useHttp } from '../hooks/http';

export const Types = () => {
  
  const [types] = useHttp('https://pokeapi.co/api/v2/type', []);

  let content = `<p>Loading Types of Types</p>`;

  if(types.results) {
    let results = types.results;
    content = (results.map((type) => ( 
        <Type type={type}
            key={type.url}
        />
        )))
    } else  {
    content = `<p>There isn't Types :(</p>`
    }
 
  return content;

} 