import React, { Component } from 'react';
import HomeLayout from './../layout/homeLayout';
import Searcher from './searcher';
import TablePolicies from './tablepolicies';

class ModulePoliciesPga extends Component {

    constructor(props){
        super(props);
        this.handlerSelectRamo = this.handlerSelectRamo.bind(this);
        this.state = {
            ramoSelected : false
        }
    }

    handlerSelectRamo(){

    }

    render() {
        return (
            <HomeLayout>
                <Searcher/>
                <TablePolicies  handlerSelectRamo={this.handlerSelectRamo}/>         
            </HomeLayout>
        );
    }
}

export default ModulePoliciesPga;