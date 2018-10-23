import React from "react";
import Question from "./Question.jsx";
import store from "./store"

class Quiz extends React.Component{
    render(){return( <div>{store.getState().questions.map(q => (<Question key={q.id} question={q}/>))}</div>)};
}

export default Quiz;