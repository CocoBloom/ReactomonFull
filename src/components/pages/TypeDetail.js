import React from 'react';
import { useHttp } from '../hooks/http';
import { useParams } from "react-router-dom";


//TODO should use props for example send name or id
export const TypeDetail = () => {
    
    let {id} = useParams();

    const [typeDetails] = useHttp(`https://pokeapi.co/api/v2/type/${id}`, []);
    
    const getArrayFromFetchedData = () => {
        let arrayOfResult = [];
        for ( let key in typeDetails) {
            if (!(typeDetails[key] instanceof Object)) {
                arrayOfResult[key] = typeDetails[key]
            } 
        }
        return arrayOfResult;
    }  

    let { content } = `<p>Data is loading...</p>`

    if (typeDetails !== undefined) {
        const result = getArrayFromFetchedData();
        content = (
            
            <div>
                <h1>Type Details </h1>
                { Object.entries(result).map(([key,value],index) => {
                    return <p key={index}>{key} : {value}</p>                    
                    }
                )}
            </div>   
        )
    } 
    
    return content;
    
}





