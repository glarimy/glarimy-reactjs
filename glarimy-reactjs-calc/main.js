import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator.jsx'

ReactDOM.render(<Calculator configuration={{
        table: {
            bcolor: 'white',
            color: 'black'
        },
        bar: {
            bcolor: '#0BB',
            color: 'white'
        }
    }} color="white" />, 
document.getElementById('calc'));