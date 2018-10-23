import React from "react";

class Question extends React.Component{
    render(){ return(<div>{ this.props.question.description }</div>) }
};

export default Question;