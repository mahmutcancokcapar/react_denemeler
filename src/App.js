import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";

const App = () => {
	const [counter, setCounter] = useState(0);
	const [inputValue, setInputValue] = useState(0);

	const handleInputChange = (event) => {
		setInputValue(Number(event.target.value));
	};

	const increment = () => {
		setCounter(counter + inputValue);
	};

	const decrement = () => {
		setCounter(counter - inputValue);
	};

	const reset = () => {
		setCounter(0);
	};

	return (
		<div className="App">
			<h1>Counter App</h1>
			<Counter
				counter={counter}
				increment={increment}
				decrement={decrement}
				reset={reset}
			/>
			<input type="number" value={inputValue} onChange={handleInputChange} />
		</div>
	);
};

export default App;
