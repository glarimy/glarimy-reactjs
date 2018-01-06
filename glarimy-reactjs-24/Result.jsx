import React from 'react';

class Result extends React.Component {
   constructor(props){
      super(props);
   }
   
   render() {
      const message = this.props.sucess ? 'Account is successfully opened!' : 'Failed to open account';
      const number = this.props.success ? this.props.accountNumber : 'Not Applicable';
      return (
            <div>
               {message}<br/>
               Name: <label>{this.props.name}</label><br/>
               Number: <label>{number}</label><br/><br/>
            </div>
      );
   }
}

export default Result;