import React, { Component } from 'react';
import MultiSelectItem from './multiselectitem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MultiSelectPga extends Component {

   
    render() {

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
               cursor: "pointer"
        }
    
        const items = this.props.items?this.props.items:[];

        return (
            <React.Fragment>
                <div style={wrapperMultiSelect}>
                    <div style={multiSelectStyle}>
                        <span className="select-contractor" rel="7">
                            <strong>Seleccionar <i className="fa fa-angle-down" aria-hidden="true"></i>
                            <FontAwesomeIcon icon="accusoft" size="lg"/>
                            </strong>
                        </span>
                        <div className="contractor-modal">
                            <div className="contractor-modal-content">
                                <ul className="contractor-options poliza">
                                    {items.map( item => item)}
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