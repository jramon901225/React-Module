import React, { useState } from 'react';

// const capitalizeWord = ( word ) => {
//     if (word )  
// } 
function Greetings({name, lastName}) {
    const [fakeName, setFakeName] = useState("Manuel Ramon");
    return (
        <div>
            <h1> Hola {name} </h1>
        </div>
    ) 
}

export default Greetings;
