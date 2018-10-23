import React from 'react';

class Table extends React.Component {
    render() {
        return(
            <table>
            <tbody>
            <tr>
            {
                this.props.data.cols.map(header=>(
                    <th>{header}</th>
                ))
            }
            </tr>
            {
                this.props.data.rows.map(row=>(
                    <tr>
                    {
                        row.map(field=>(
                            <td>{field}</td>
                        ))
                    }
                    </tr>
                ))
            }
            </tbody>
            </table>
        );
    }
}

export default Table;