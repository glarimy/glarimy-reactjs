import React from 'react';
import ReactDOM from 'react-dom';
import Adder from './Adder.jsx';
import Multiplier from './Multiplier.jsx';

ReactDOM.render(<Adder />, document.getElementById('adder'));
ReactDOM.render(<Multiplier />, document.getElementById('multiplier'));
