import React from 'react';
import Calculator from './Calculator';

class Multiplier extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         first: 0,
         second: 0,
         product: 0
      };

      this.multiply = this.multiply.bind(this);
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

   multiply(){
      let product = Calculator.multiply(Number.parseFloat(this.state.first), Number.parseFloat(this.state.second));
      this.setState({
         product : product
      });
   }
   render() {
      return (
         <div>
            <div></div>
            <input defaultValue={this.state.first} onChange={this.updateFirst}/>
             + 
            <input defaultValue={this.state.second} onChange={this.updateSecond}/> 
            <button onClick={this.multiply}>=</button>
            <label>{this.state.product}</label>
         </div>
      );
   }
}

export default Multiplier;