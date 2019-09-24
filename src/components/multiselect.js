import React, { Component } from 'react';
import JsonRamos from './../data/jsonramo.json'
import MultiSelectItem from './multiselectitem';

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
               cursor: "pointer",
               width: "184px",
               position: "relative"
        }

        return (
            <React.Fragment>
                <div style={wrapperMultiSelect}>
                    <div style={multiSelectStyle}>
                        <span className="select-contractor" rel="7">
                            <strong>Seleccionar 
                            </strong>
                        </span>
                        <div className="contractor-modal">
                            <div className="contractor-modal-content">
                                <ul className="contractor-options poliza">
                                    {JsonRamos.map( ramo => <MultiSelectItem item ={ramo} key={ramo.id}/>)}
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