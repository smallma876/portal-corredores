import React, { Component } from 'react';
import store from './../redux/store';
import REQUEST_ACTIONS from './../constants/actions/requestactions';

class MultiSelectItem extends Component {

    constructor(props) {
        super(props);
        this.handlerCheckbox = this.handlerCheckbox.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(e){
        e.stopPropagation();
    }

    handlerCheckbox(e){
        e.stopPropagation();
        
        store.dispatch({
            type: REQUEST_ACTIONS.SEARCHER_POLIZA,
            request: e.target
        })
    }

    render() {
        const style = {
            padding: "5px 10px"
        }

        return (
            <li style={style} onClick={this.handlerClick}>
                <div className="li-item">
                    <input type="checkbox" className="mr-5px" data-value={this.props.item.id} onChange={this.handlerCheckbox} 
                    name={this.props.name}/>
                    <span>{this.props.item.nombre}</span>
                </div>
            </li>
        );
    }
}

export default MultiSelectItem;