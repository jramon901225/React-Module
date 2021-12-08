import React  from 'react';

/*
 INPUT    
valor a
valor b
operador

ejemplo
1
2
suma

OUTPUT
3
*/

// Version Manuel (Si el operador es suma que pueda recibir n operandos y que los sume)

function Calculadora ({valorA, valorB, operador}) {
    if(isNaN(valorA) === true ) {
        return (
            <div>
                <spa>Los valores ingresados de A no son correctos</spa>
            </div>
        )
    }

    if(isNaN(valorB) === true) {
        return (
            <div>
                <spa>Los valores ingresados de B no son correctos</spa>
            </div>
        )
    }

    let result = 0

    if (operador === 'suma') {
        result = valorA + valorB
    }else if (operador === 'resta') {
        result = valorA - valorB
    }else if (operador === 'multiplicacion') {
        result = valorA * valorB
    }else{
        return (
            <div>
                <spa> El operador no es correcto</spa>
            </div>
        )
    }

    return(
        <div>
            <spa>El resultado de {operador} es {result}</spa>
        </div>
    )


}

// Version David
// function Calculadora ({firstValue, secondValue, operator}) {
//      if (!Number.isInteger(firstValue)) {
//         return (
//             <div>
//                 <spa> El valor de A no es un numero</spa>
//             </div>
//         );
//     }

//     if (!Number.isInteger(secondValue)) {
//         return (
//             <div>
//                 <spa> El valor de B no es un numero</spa>
//             </div>
//         );
//     }

//     let result = 0

//     switch(operator) {
//         case "suma":
//             result = firstValue + secondValue
//             break;
//         case "resta":
//             result = firstValue - secondValue
//             break;
//         case "multiplicacion":
//             result = firstValue * secondValue
//              break; 
//         default:
//             return(
//                 <div>
//                     <spa> El operador no es valido</spa>
//                 </div>
//             )
//     }

//     return (
//         <div>
//             <spa>
//                 El resultado de la {operator} es {result}
//             </spa>
//         </div>
//     )
// }

export default Calculadora;
