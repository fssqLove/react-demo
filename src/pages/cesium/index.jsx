import React from "react";
import { enquireScreen } from 'enquire-js';
import './less/index.css';
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
import "cesium/Source/Widgets/widgets.css";


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

        this.viewer = new Viewer(this.cesiumContainer);
    }

    render() {

        return (
            <div>
                <div id="cesiumContainer" ref={ element => this.cesiumContainer = element }/>
            </div>
        );
    }
}