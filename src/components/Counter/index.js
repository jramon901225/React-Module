//Contador

import React, { useEffect, useState } from "react";

//Styles
import './index.css'

export default  function Counter() {
	const [counter, setCounter] = useState(0);
	const [otherCounter, setOtherCounter] = useState(0);

	useEffect(() => {
		console.warn("Me ejecuto  cada que cambie el estado other counter");
	}, [otherCounter]);

	useEffect(() => {
		console.log("Me ejecuto solo la primera vez");
	}, []);

	useEffect(() => {
		console.log("Me ejecuto cada que cambie el estado counter");
		if (counter % 3 === 0 && counter > 0) {
			setOtherCounter(otherCounter + 1);
		}
	}, [counter]);

	return (
	<div> 	
			<p>Counter: {counter}</p>
			<button className = "btn" onClick={() => setCounter(counter + 1)}>Add</button>
			<button className = "btn" onClick={() => setCounter(counter - 1)}>less</button>
		</div>
	);
}

// export default function Counter() {
// 	const [counter, setCounter] = useState(0);

// 	let colorCounter = counter % 2 === 0 ? "text-even" : "text-odd";

// 	return (
// 		<div>
// 			<p className={colorCounter}>Counter: {counter}</p>
// 			<div className="container">
// 				<button className="btn" onClick={() => setCounter(counter + 1)}>
// 					Add
// 				</button>
// 				<button className="btn" onClick={() => setCounter(counter - 1)}>
// 					Substract
// 				</button>
// 			</div>
// 		</div>
// 	);
// }