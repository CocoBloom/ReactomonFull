import React from 'react';
import { Link } from 'react-router-dom';

export const Type = (props) => {

  const { name,url } = props.type;
  let index =  url.slice(0,-1).lastIndexOf('/');
  const typeURL = "/type/" + url.slice(index+1,-1);
  
  let content = ( 
    <div className="card">
        <Link to={typeURL} id={url.slice(index+1,-1)}>{ name }</Link>
    </div>
  )

  return content;
}

