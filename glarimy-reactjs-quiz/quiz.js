import React from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createStore } from "redux";

const store = createStore(reducer);
const { getState, dispatch } = store;

function fetchQuestionsFromServer() {
    return fetch('quiz.json').then(function(response){
            return response.json();
        }).then(function(questions){
            dispatch({
                type: 'loaded',
                questions: questions.questions
            });
        });
};

function reducer(state = { 
        questions: [], 
        count: 0,
        current: 0, 
        score: 0, 
        previous: false,
        next: false, 
        submit: false 
    }, action) {
        let current = state.current;
        switch (action.type) {
        case 'loaded': 
        let newstate =  {
            questions: action.questions,
            count: action.questions.length,
            current: 0,
            score: 0,
            previous: false,
            next: true,
            submit: true
        };
        return newstate;
        case 'selected':
            state.questions[state.current].option = action.option;
            return {
                questions: state.questions,
                count: state.count,
                current: state.current,
                score: state.score,
                previous: state.previous,
                next: state.next,
                submit: state.submit
            }
        case 'next':
            let next = state.next;
            if(current < state.count-1){
                current++;
            }
            if(current == state.count-1){
                next = false;
            }
            return {
                questions: state.questions,
                count: state.count,
                current: current,
                score: state.score,
                previous: true,
                next: next,
                submit: state.submit
            }
        case 'previous':
            let previous = state.next;
            if(current > 0 ){
                current--;
            }
            if(current == 0){
                previous = false;
            }
            return {
                questions: state.questions,
                count: state.count,
                current: current,
                score: state.score,
                previous: previous,
                next: state.next,
                submit: state.submit
            }
        case 'submit':
            return {
                questions: state.questions,
                count: state.count,
                current: current,
                score: 3,
                previous: false,
                next: false,
                submit: false
            }
        default:
            return state;
    }
};

class Question extends React.Component {
    constructor(props){
        super(props);

        store.subscribe( () => this.forceUpdate() );        
        fetchQuestionsFromServer();
        
        this.onChange = (e)=>{
            store.dispatch({
                type: 'selected',
                option: e.target.value
            });
        }
        this.onPrevious = ()=>{
            store.dispatch({
                type: 'previous'
            });
        }
        this.onSubmit = ()=>{
            store.dispatch({
                type: 'submit'
            });
        }
        this.onNext = ()=>{
            store.dispatch({
                type: 'next'
            });
        }
    }

    render() {
        let item = getState().questions[getState().current];
        if(item == undefined){
            return (<div>Wait</div>);
        }
        console.log(getState());
        return (
            <div>
                <div>{item.question}</div>
                <div><input type='radio'  name='option' value="a" onChange={this.onChange}/>{item.a}</div>
                <div><input type='radio'  name='option' value="b" onChange={this.onChange}/>{item.b}</div>
                <div><input type='radio'  name='option' value="c" onChange={this.onChange}/>{item.c}</div>
                <div><input type='radio'  name='option' value="d" onChange={this.onChange}/>{item.d}</div>
                <div>
                    <button disabled={!getState().previous} onClick={this.onPrevious}>&lt;</button>
                    <button onClick={this.onSubmit}>submit</button>
                    <button disabled={!getState().next} onClick={this.onNext}>&gt;</button>
                </div>
            </div>
            
        );
    }
};

ReactDOM.render(<Question />, document.getElementById('question'));
