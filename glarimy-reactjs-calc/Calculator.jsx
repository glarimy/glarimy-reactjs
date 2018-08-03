import React from 'react';

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first: undefined,
            second: undefined,
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
                first : event.target.value,
                result: '',
                message: ''
            });
        }

        this.onSecondNumberChange = (event) => {
            this.setState({
                second : event.target.value,
                result: '',
                message: ''
            });
        }
    
    }
    render() {
        const barStyle = { 
            backgroundColor: this.props.configuration.bar.bcolor, 
            color: this.props.configuration.bar.color,
            padding: '5px'
        }

        const tableStyle = { 
            border: 'solid black 1px', 
            padding: '5px',
            backgroundColor: this.props.configuration.table.bcolor, 
            color: this.props.configuration.table.color 
        }

        let disabled = !(this.state.first && this.state.second);
        
        return (
            <div>
                <table style={tableStyle}>
                    <tbody>
                        <tr>
                            <th colSpan='2' align='center'>Calculator</th>
                        </tr>
                        <tr>
                            <td>First Number: </td>
                            <td>
                                <input 
                                    placeholder="Enter an integer value"
                                    defaultValue={this.state.first} 
                                    onChange={this.onFirstNumberChange} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Second Number: </td>
                            <td>
                                <input 
                                    placeholder="Enter an integer value"        
                                    defaultValue={this.state.second} 
                                    onChange={this.onSecondNumberChange} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2' 
                                style={barStyle}
                                align='center'>
                                <button disabled={disabled} onClick={this.onAdd}>Add</button>
                                <button disabled={disabled} onClick={this.onMultiply}>Multiply</button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2' align='center'>
                                <span>{this.state.message}{this.state.result}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Calculator;