import React from "react";

const Counter = ({ counter, increment, decrement, reset }) => {
	return (
		<div className="counter-container">
			<div id="sonuc">{counter}</div>
			<div className="first-container">
				<button onClick={increment}>+</button>
				<button onClick={decrement}>-</button>
				<button onClick={reset}>0</button>
			</div>
		</div>
	);
};

export default Counter;
