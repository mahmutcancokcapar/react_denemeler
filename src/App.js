import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [counter, setCounter] = useState(0);
	const [inputValue, setInputValue] = useState(0);

	const handleInputChange = (event) => {
		setInputValue(Number(event.target.value));
	};

	const arttir = () => {
		setCounter(counter + inputValue);
	};

	const azalt = () => {
		setCounter(counter - inputValue);
	};

	const sifirla = () => {
		setCounter(0);
	};

	return (
		<div className="App">
			<h1>Counter App</h1>
			<div id="sonuc">{counter}</div>
			<div className="first-container">
				<button onClick={arttir}>+</button>
				<button onClick={azalt}>-</button>
				<button onClick={sifirla}>0</button>
			</div>
			<input
				type="number"
				value={inputValue}
				onChange={handleInputChange}
				style={{ fontSize: 20, width: 50, textAlign: "center", marginTop: 20 }}
			/>
		</div>
	);
};

export default App;
