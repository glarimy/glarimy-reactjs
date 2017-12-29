import React from 'react';
import ReactDOM from 'react-dom';
import Converter from './Converter.jsx';

function display(data){
	alert(data);
}

ReactDOM.render(<Converter ip="INR." op="USD" onResult={display} />,
 document.getElementById('converter'));