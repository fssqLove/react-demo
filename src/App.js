import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import Routes from './pages/router';

import {enquireScreen} from 'enquire-js';

import Header from './layouts/Nav0';
import Footer from './layouts/Footer0';

import {Nav00DataSource, Footer00DataSource} from './layouts/data.source';
import './layouts/less/antMotionStyle.less';


let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
        };
    }

    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({isMobile: !!b});
        });
    }

    render() {
        return (
            <div className="templates-wrapper"
                 ref={(d) => {
                     this.dom = d;
                 }}
            >
                <Router>
                    <div>
                        <Header dataSource={Nav00DataSource} isMobile={this.isMobile}/>
                        <Routes />
                        <Footer dataSource={Footer00DataSource} isMobile={this.isMobile}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
