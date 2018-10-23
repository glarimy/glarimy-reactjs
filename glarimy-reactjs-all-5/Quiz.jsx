import React from "react";
import Question from "./Question.jsx";
import store from "./store"

class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options: []
        };

        this.submit = () => {            
            store.dispatch({
                type: "quiz_submitted",
                options: this.state.options
            });  
        };

        this.update = (id, option) =>{
            let options = this.state.options;
            let entry = options.find((o)=>{
                return o.id == id;
            });
            if(entry == undefined)
                options.push({
                    id: id,
                    option: option
                });
            else 
                entry.option = option;
            this.setState({
                options: options
            });
        }
    }
    render(){
        return( 
            <div>
                <div style={store.getState().visuals.quizDisplay}>
                <h2>Select correct option against each question</h2>
                {
                        store.getState().quiz.questions.map(q => (
                            <Question key={q.id} question={q} cb={this.update}/>)
                        )
                    }
                    <hr/>
                    <button onClick={this.submit}>Submit</button>
                </div>
            </div>
        )
    };
}

export default Quiz;