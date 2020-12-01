import React, { Component } from 'react';
import './ui-builder.scss';
import 'semantic-ui-css/semantic.min.css'

import Navbar from './navbar';
import WidgetsPanel from './components/widgets-panel';
import UIPanel from './components/ui-panel';
import PropertiesPanel from './components/properties-panel';



class UIBuilder extends Component {
    state = {}
    render() {
        return (
            <div className="d-flex flex-column ui-builder h-100">
                <Navbar></Navbar>
                <div className="d-flex h-100">
                    <WidgetsPanel></WidgetsPanel>
                    <UIPanel></UIPanel>
                    <PropertiesPanel></PropertiesPanel>
                </div>
            </div>
        );
    }
}

export default UIBuilder;