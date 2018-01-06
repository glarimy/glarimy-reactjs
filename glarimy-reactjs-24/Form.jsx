import React from 'react';
import TextInput from './TextInput.jsx'
import NumberInput from './NumberInput.jsx'

class Form extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         name: '',
         phoneNumber: ''
      }

      this.updateName = (value) => {
         this.setState({
            name: value
         });
      }

      this.updatePhoneNumber = (value) => {   
         console.log("phone number " + value);
         this.setState({
            phoneNumber: value
         });
      }

      this.openAccount = (e) => {
         this.props.onSubmit({
            name: this.state.name,
            phoneNumber: this.state.phoneNumber
         });
      }
   }
   
   render() {
      return (
         <div>
            <h3>Open Account</h3>
            <table>
               <tbody>
                  <tr>
                     <td className="required">Customer Name * </td>
                     <td>
                        <TextInput 
                           name='Customer Name' 
                           required={true} 
                           name='Customer Name' 
                           value='' 
                           cb={this.updateName}/>
                        </td>
                  </tr>
                  <tr>
                     <td className="required">Phone Number * </td>
                     <td>
                        <NumberInput 
                           name='Phone Number' 
                           value='' 
                           required={true} 
                           minLength={10}
                           maxLength={10}
                           cb={this.updatePhoneNumber}/>
                        </td>
                  </tr>
                  <tr>
                     <td colSpan='2'>
                        <button onClick={this.openAccount}>Open Account</button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
}

export default Form;