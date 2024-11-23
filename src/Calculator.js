import { useState } from "react";

function Calculator() {
	const [display, setDisplay] = useState('0'); 
  
	const handleButtonClick = (value) => {
	  if (value === "=") {
		try {
		  setDisplay(eval(display)); 
		} catch {
		  setDisplay("Error"); 
		}
	  } else if (value === "C") {
		setDisplay('0'); 
	  } else {
		setDisplay(display === '0' ? value : display + value); 
	  }
	};
  
	
	const buttons = [
	  "1", "2", "3", 
	  "4", "5", "6", 
	  "7", "8", "9", 
	  "0", "+", "-", 
	  "*", "/", "=", 
	  "C"
	];
  
	return (
	  <div className="calculator">
		<h2>Calculator</h2>
		<div className="display">{display || 0}</div>
		<div className="buttons">
		  {buttons.map((button) => (
			<button key={button} onClick={() => handleButtonClick(button)}>
			  {button}
			</button>
		  ))}
		</div>
	  </div>
	);
}

  export default Calculator;
