import React, { Component } from 'react';
import MultiSelectItem from './multiselectitem';

    const wrapperMultiSelect = {
        display : "flex",
        justifyContent : "center",
        fontSize : "12px",
    }

    const multiSelectStyle = {
        padding : "12px 15px",
        border: "1px solid #ddd",
        display: "flex",
        justifyContent : "center",
        alignContent: "center",
        background: "#FFF",
        borderRadius: "2px",
        cursor: "pointer",
        width: "184px",
        position: "relative"
    }

    const displayNone={
        display: "none"
    }

    const displayUnset={
        display: "unset"
    }

class MultiSelectPga extends Component {

    constructor(props){
        super(props);
        this.state = {
            isToggleOn : false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState( state => ({
            isToggleOn : !state.isToggleOn
        }))
    }
    
    render() {
     
        return (
            <React.Fragment>
                <div style={wrapperMultiSelect}>
                    <div style={multiSelectStyle} onClick={this.handleClick}>
                        <span className="select-contractor" rel="7">
                            <strong>{this.props.subtitle} 
                            </strong>
                        </span>
                        <div className="contractor-modal" style={this.state.isToggleOn ? displayUnset:displayNone}>
                            <div className="contractor-modal-content">
                                <ul className="contractor-options poliza">
                                    {this.props.arrayData.map( ramo => <MultiSelectItem item ={ramo} key={ramo.id} 
                                                handlerChangeCheckbox = {this.props.handlerChangeCheckbox} name={this.props.name}/>)
                                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MultiSelectPga;