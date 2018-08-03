import React from 'react';

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first: 10,
            second: 20,
            result: '',
            message: ''
        }

        this.onAdd = () => {
            this.setState({
                result: Number.parseInt(this.state.first) + Number.parseInt(this.state.second),
                message: "SUM: "
            });
        }

        this.onMultiply = () => {
            this.setState({
                result: Number.parseInt(this.state.first) * Number.parseInt(this.state.second),
                message: "PRODUCT: "
            });
        }

        this.onFirstNumberChange = (event) => {
            this.setState({
                first : event.target.value
            });
        }

        this.onSecondNumberChange = (event) => {
            this.setState({
                second : event.target.value
            });
        }
    
    }
    render() {
        return (
            <div>
                <table style={{ border: 'solid black 1px', backgroundColor: 'white' }}>
                    <tbody>
                        <tr>
                            <th colSpan='2' align='center'>Calculator</th>
                        </tr>
                        <tr>
                            <td>First Number: </td>
                            <td><input defaultValue={this.state.first} onChange={this.onFirstNumberChange} /></td>
                        </tr>
                        <tr>
                            <td>Second Number: </td>
                            <td><input defaultValue={this.state.second} onChange={this.onSecondNumberChange} /></td>
                        </tr>
                        <tr>
                            <td colSpan='2' style={{ backgroundColor: 'black', color: 'white' }}>
                                <button onClick={this.onAdd}>Add</button>
                                <button onClick={this.onMultiply}>Multiply</button>
                                {this.state.message}{this.state.result}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Calculator;