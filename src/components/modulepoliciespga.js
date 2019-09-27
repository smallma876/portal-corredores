import React, { Component } from 'react';
import HomeLayout from './../layout/homeLayout';
import Searcher from './searcher';
import TablePolicies from './tablepolicies';
import axios from 'axios';



class ModulePoliciesPga extends Component {

    constructor(props) {
        super(props);
        this.callServicePolicies = this.callServicePolicies.bind(this); 
    }

    callServicePolicies(e){
        e.preventDefault();
        console.log("se invoca al servicio");
       
    }

    render() {
        return (
            <HomeLayout>
                <Searcher callServicePolicies = {this.callServicePolicies}/>
                <TablePolicies/>         
            </HomeLayout>
        );
    }
}

export default ModulePoliciesPga;