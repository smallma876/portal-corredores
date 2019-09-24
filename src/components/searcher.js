import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import MultiSelectPga from './multiselect';

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
                            <MultiSelectPga onClick={this.props.handlerSelectRamo}/>
                        </Col>
                        <Col>
                           <MultiSelectPga/>
                        </Col>   
                        <Col>
                            <MultiSelectPga/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div style={styleGeneral}>
                                <div>
                                    <select style={inputStyle}>
                                        <option>Nro Poliza</option>
                                        <option>Nro Poliza</option>
                                        <option>Nro Poliza</option>
                                        <option>Nro Poliza</option>
                                        <option>Nro Poliza</option>
                                        <option>Nro Poliza</option>
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