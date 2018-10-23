import React from "react";
import Question from "./Question.jsx";
import store from "./store"

class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options: [],
            score: 0,
            displayScore: 'none'
        };

        this.submit = () => {
            let score = 0;
            store.getState().questions.map(q=>{
                let entry = this.state.options.find((o)=>{
                    return q.id == o.id
                });
                if(entry.option == q.answer)
                    score++;
            });  
            this.setState({
                score: score,
                displayScore: 'inline'
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
        let visible = 'none';
        if(store.getState().questions.length > 0){
            visible = 'block';
        }
        return( 
            <div>
                {
                    store.getState().questions.map(q => (
                        <Question key={q.id} question={q} cb={this.update}/>)
                    )
                }
                <hr/>
                <button onClick={this.submit} style={{display:visible}}>Submit</button>
                <span style={{display:this.state.displayScore}}>Score: {this.state.score}</span>
            </div>
        )
    };
}

export default Quiz;