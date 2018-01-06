import React from 'react';

class Bank extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         name: "",
         phoneNumber: 0,
         accountNumber: 0,
         display: "invisible"
      }

      this.updateName = (e) => {
         this.setState({
            name: e.target.value
         });
      }

      this.updatePhoneNumber = (e) => {
         this.setState({
            phoneNumber: e.target.value
         });
      }

      this.openAccount = (e) => {
         fetch('/server.json', {
               method: 'get'
            })
         .then((response) => response.json())
         .then(account => {
            this.setState({
               accountNumber: account.accountNumber,
               display: "visible"
            });            
         })
      }
   }
   
   render() {
      return (
         <div>
            <h1>Bank</h1>
            <hr/>
            <h3>Open Account</h3>
            <table>
            	<tbody>
            		<tr>
            			<td>Name</td>
            			<td><input id='name' defaultValue={this.state.name} onChange={this.updateName}/></td>
            		</tr>
            		<tr>
            			<td>Phone Number</td>
            			<td><input id='number' defaultValue={this.state.phoneNumber} onChange={this.updatePhoneNumber}/></td>
            		</tr>
            		<tr>
            			<td colSpan='2' align="right">
                        <button onClick={this.openAccount}>Open Account</button>
                     </td>
            		</tr>
            	</tbody>
            </table>
            <br/><br/><hr/>
            <div className={this.state.display}>
               A new account is successfully opened!<br/>
               Name: <label>{this.state.name}</label><br/>
               Number: <label>{this.state.accountNumber}</label><br/><br/>
            </div>
         </div>
      );
   }
}

export default Bank;