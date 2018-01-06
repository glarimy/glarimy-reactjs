import React from 'react';
import Title from './Title.jsx';
import Form from './Form.jsx';
import Result from './Result.jsx';

class Bank extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         customer: {
            name: undefined,
            phoneNumber: undefined
         },
         accountNumber: 0,
         form: 'visible',
         result: 'invisible',
         success: undefined
      }

      this.openAccount = (customer) => {
         this.setState({
            customer: customer
         });
         fetch('/bank/account', {
               method: 'post',
               body: JSON.stringify(customer)
            })
         .then((response) => response.json())
         .then(account => {
            this.setState({
               accountNumber: account.accountNumber,
               display: "visible"
            });            
         })
         .catch(e=>{
            this.setState({
               form: 'invisible',
               result: 'visible',
               success: false
            });
         })
      }
   }
   
   render() {
      return (
         <div>
            <Title title="Glarimy Online Bank"/>
            <div className={this.state.form}><Form onSubmit={this.openAccount}/></div>
            <div className={this.state.result}>
               <Result 
                  success={this.state.success}
                  name={this.state.customer.name} 
                  accountNumber={this.state.accountNumber}/>
               </div>
         </div>
      );
   }
}

export default Bank;