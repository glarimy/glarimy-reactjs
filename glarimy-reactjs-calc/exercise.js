import "./glarimy.css";
import React from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createStore } from "redux";

const store = createStore(reducer);
const { getState, dispatch } = store;

function reducer(state = { first: 0, second: 0 }, action) {
    switch (action.type) {
        case 'first_changed':
            return {
                first: action.number,
                second: state.second
            }
        case 'second_changed':
            return {
                first: state.first,
                second: action.number
            }
        default:
            return state;
    }
};

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first: 0,
            second: 0
        }
        this.onFirstChange = this.onFirstChange.bind(this);
        this.onSecondChange = this.onSecondChange.bind(this);
    }

    onFirstChange(e){
        this.setState({
            first: e.target.value
        });
        store.dispatch({
            type: 'first_changed',
            number: e.target.value
        });
    }

    onSecondChange(e) {
        this.setState({
            second: e.target.value
        });
        store.dispatch({
            type: 'second_changed',
            number: e.target.value
        });
    }

    render() {
        return (
            <div>
                First Number <input defaultValue={this.state.first} onChange={this.onFirstChange}/>
                Second Number <input defaultValue={this.state.second} onChange={this.onSecondChange}/>
            </div>
        );
    }
};

class Adder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: 0,
            second: 0,
            sum: 0
        }
        store.subscribe(() => {
            this.forceUpdate();
        });
    }

    render() {
        let first = Number.parseFloat(store.getState().first);
        let second = Number.parseFloat(store.getState().second);
        let sum = first + second;

        return (
            <div>
                SUM: {sum}
            </div>
        );
    }
};

class Multiplier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: 0,
            second: 0,
            sum: 0
        }
        store.subscribe(() => {
            this.forceUpdate();
        });
    }

    render() {
        let first = Number.parseFloat(store.getState().first);
        let second = Number.parseFloat(store.getState().second);
        let product = first * second;

        return (
            <div>
                Product: {product}
            </div>
        );
    }
};


ReactDOM.render(<Form />, document.getElementById('form'));
ReactDOM.render(<Adder />, document.getElementById('adder'));
ReactDOM.render(<Multiplier />, document.getElementById('multiplier'));