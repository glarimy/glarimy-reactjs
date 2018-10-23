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
            console.log(this.state);
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
            </div>
        )
    };
}

export default Quiz;