import React, { useState } from 'react';

// const capitalizeWord = ( word ) => {
//     if (word )  
// } 
function Greetings({name, lastName}) {
    console.log('Paso 1: Montaje')
    const [fakeName, setFakeName] = useState("Manuel Ramon");
    return (
        <div>
            <h1> Hola {name} </h1>
        </div>
    ) 
}

export default Greetings;
