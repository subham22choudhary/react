import React, {useState} from 'react';

const Greeting = ({ name, onGreet }) => {
    return (
        <>
            <h1>Hello, {name}!</h1>
            <button onClick={()=> onGreet(name)}>Greet</button>
        </>
    );
};


export default Greeting;