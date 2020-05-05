import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.authorName}
                </td>
                <td>
                    {this.props.obj.date_of_birth}
                </td>
                <td>
                    {this.props.obj.img}
                </td>
            </tr>
        );
    }
}

export default DataTable;