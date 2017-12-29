import React from 'react';
import Calculator from './Calculator';

class Adder extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         first: 0,
         second: 0,
         sum: 0
      };

      this.add = this.add.bind(this);
      this.updateFirst = this.updateFirst.bind(this);
      this.updateSecond = this.updateSecond.bind(this);
   }

   updateFirst(e){
      this.setState({
         first: e.target.value
      });
   }

   updateSecond(e){
      this.setState({
         second: e.target.value
      });
   }

   add(){
      let total = Calculator.add(
         Number.parseFloat(this.state.first), 
         Number.parseFloat(this.state.second)
      );
      this.setState({
         sum: total
      });
   }
   render() {
      return (
      <div>
         <div></div>
         <input defaultValue={this.state.first} onChange={this.updateFirst}/>
         + 
         <input defaultValue={this.state.second} onChange={this.updateSecond}/>
         <button onClick={this.add}>=</button> 
         <label>{this.state.sum}</label>
      </div>
      );
   }
}

export default Adder;