import React from "react";
import { enquireScreen } from 'enquire-js';
import './less/index.css';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});


export default class Cesium extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
        };
    }

    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({ isMobile: !!b });
        });
    }

    render() {

        return (
            <div
                className="cesium"
                ref={(d) => {
                    this.dom = d;
                }}
            >
                我是一个自定义组件
            </div>
        );
    }
}