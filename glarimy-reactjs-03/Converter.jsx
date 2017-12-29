import React from 'react';

class Converter extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         rupees: 0,
         dollers: 0
      };

      this.updateRupees = this.updateRupees.bind(this);
      this.compute = this.convert.bind(this);
   }

   updateRupees(e){
      this.setState({
         rupees: e.target.value
      });
   }

   convert(e){
      let dollers = this.state.rupees/60;
      this.setState({
         dollers: dollers
      });
      this.props.onResult(dollers);
   }

   render() {
      return (
      <div>
         <input defaultValue={this.state.rupees} onChange={this.updateRupees} />
         <button onClick={this.compute}>Convert</button><br/>
         <label>{this.props.ip} {this.state.rupees} = {this.props.op} {this.state.dollers}</label>
      </div>
      );
   }
}

export default Converter;