import React, { useState, createContext } from 'react';


export const CatchContext = createContext();

export const CatchProvider = (props) => {

    const [catched, setCatched] = useState([
        { 
            name: 'Belzebub',
            url: 'http://krikszkraksz.hu'
        }
    ]);

    return (
        <CatchContext.Provider value={[catched, setCatched]}>
            {props.children}
        </CatchContext.Provider>
    )

}





