import React, { Component } from 'react';

class MultiSelectItem extends Component {
    render() {
        const style = {
            padding: "5px 10px"
        }

        return (
            <li value={this.props.item.id} style={style}>
                <div className="li-item">
                    <input type="checkbox" className="mr-5px"/>
                    <span>{this.props.item.nombre}</span>
                </div>
            </li>
        );
    }
}

export default MultiSelectItem;