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
        /* var instance = axios.create({
            baseURL: 'https://apimgmt-pacificocert.azure-api.net/pga-poliza-con/atencion-al-cliente-corredor/v1/polizas/contratos/?idBroker=402071&ramo=01,02,03,04,05,06,07,08,09,10,11,12&codSist=7&numReg=200&idTransac=0f07ab0b-84e5-4ac1-9484-44a4ab6698eb&stsPol=01',
            headers: {
                        'Access-Control-Allow-Origin': 'request-originating server addresses',
                        'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
                        'Access-Control-Allow-Headers': 'Authorization, Lang',
                        'Expires':'Thu, 01 Jan 1970 00:00:00 GMT', 
                        'Cache-Control':'private, no-store, max-age=0', 
                        'Authorization':'Basic cGFjaWZpY286c2VndXJvcw==', 
                        'Ocp-Apim-Trace':'true', 
                        'Ocp-Apim-Subscription-Key':'2fdde611a1c14eecb2ee9539dba88b58', 
                        'Content-Type':'application/json'
                    }
        }) */

        var instance = axios.create({
            baseURL: 'http://demo2578452.mockable.io/pga/polizas'
        }) 
       
        instance.get()
                .then((res)=>{
                    console.log(typeof res)
                })
                .catch(error => {
                    console.log(error)
                })
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