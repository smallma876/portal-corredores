import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import MultiSelectPga from './multiselect';
import JsonRamos from './../data/jsonramo.json';
import JsonEstado from './../data/jsonestado.json';
import JsonSituacion from './../data/jsonsituacion.json';
import store from './../redux/store';
import REQUEST_ACTIONS from './../constants/actions/requestactions';
import MULTISELECT_CONSTANTS from './../constants/multiselect/multiselect';

class Searcher extends Component{

    constructor(props) {
        super(props);
        this.state = {
            searcher: "",
            optionsSearch: "",
            arrayRamo: [],
            arrayState: [],
            arraySituation: []
        }
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerChangeCheckbox = this.handlerChangeCheckbox.bind(this);
    }

    handlerChangeCheckbox(e){
        console.log(e.target.name);
    }

    handlerChange(e){
        e.preventDefault();
        store.dispatch({
            type: REQUEST_ACTIONS.SEARCHER_POLIZA,
            request: e.target
        });
    }
    

    render() {

        const styleGeneral = {
              
            display: "flex",
            justifyContent : "center",
            alignContent: "center",
            marginTop: "10px"
            
        }

        const inputStyle = {
                    background: "#FFF",
                    borderRadius: "2px",
                    padding : "12px 15px",
                    border: "1px solid #ddd",
                    width: "184px",
                    fontSize: "12px"
        }

        return (
            <div>
                <Form>
                <Container>
                    <Row>
                        <Col>
                            <MultiSelectPga subtitle ={"Ramos"} 
                                            arrayData = {JsonRamos} 
                                            handlerChangeCheckbox={this.handlerChangeCheckbox}
                                            name = {MULTISELECT_CONSTANTS.RAMOS}/>
                        </Col>
                        <Col>
                           <MultiSelectPga subtitle ={"Estado"} 
                                            arrayData = {JsonEstado}
                                            handlerChangeCheckbox={this.handlerChangeCheckbox}
                                            name = {MULTISELECT_CONSTANTS.STATE}/>
                        </Col>   
                        <Col>
                            <MultiSelectPga subtitle ={"Situación"}
                                             arrayData = {JsonSituacion}
                                             handlerChangeCheckbox={this.handlerChangeCheckbox}
                                             name = {MULTISELECT_CONSTANTS.SITUATION}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div style={styleGeneral}>
                                <div>
                                    <select style={inputStyle} name="criterio" value={this.state.criterio} onChange={this.handlerChange}>
                                        <option value="02">Nro Poliza/ Contrato</option>
                                        <option value="13">Código Agrupador</option>
                                        <option value="03">DNI</option>
                                        <option value="04">RUC</option>
                                        <option value="05">CE</option>
                                        <option value="01">Contratante</option>
                                        <option value="06">Asegurado</option>
                                        <option value="07">Placa</option>
                                    </select>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div style={styleGeneral}>
                                <div>
                                    <input type="text" style={inputStyle} name="valueCriterio" value={this.state.valueCriterio} onChange={this.handlerChange}/>
                                </div>
                            </div>
                            
                        </Col>
                        <Col>
                            <div style={styleGeneral}>
                                <div>
                                    <button type="submit" className="btn btn-primary" name="btnSearcher" onClick={this.props.callServicePolicies}>Buscar</button>
                                </div>     
                            </div>       
                        </Col>
                       
                    </Row>
                </Container>
            </Form>
            <div>
                            <span>{JSON.stringify(this.state)}</span>
                        </div>
            </div>

        );
    }      
}


export default Searcher;