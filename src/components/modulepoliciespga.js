import React, { Component } from 'react';
import HomeLayout from './../layout/homeLayout';
import Searcher from './searcher';
import TablePolicies from './tablepolicies';

class ModulePoliciesPga extends Component {
    render() {
        return (
            <HomeLayout>
                <Searcher/>
                <TablePolicies/>         
            </HomeLayout>
        );
    }
}

export default ModulePoliciesPga;