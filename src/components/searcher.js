import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import MultiSelectPga from './multiselect';
import JsonRamos from './../data/jsonramo.json';
import JsonEstado from './../data/jsonestado.json';
import JsonSituacion from './../data/jsonsituacion.json';

function Searcher(){

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
            <Form>
                <Container>
                    <Row>
                        <Col>
                            <MultiSelectPga subtitle ={"Ramos"} arrayData = {JsonRamos}/>
                        </Col>
                        <Col>
                           <MultiSelectPga subtitle ={"Estado"} arrayData = {JsonEstado}/>
                        </Col>   
                        <Col>
                            <MultiSelectPga subtitle ={"Situación"} arrayData = {JsonSituacion}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div style={styleGeneral}>
                                <div>
                                    <select style={inputStyle}>
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
                                    <input type="text" style={inputStyle}/>
                                </div>
                            </div>
                            
                        </Col>
                        <Col>
                            <div style={styleGeneral}>
                                <div>
                                    <button type="submit" className="btn btn-primary">Buscar</button>
                                </div>     
                            </div>       
                        </Col>

                    </Row>
                </Container>
            </Form>
        );
    }


export default Searcher;