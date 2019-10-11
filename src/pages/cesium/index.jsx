import React from "react";
import { enquireScreen } from 'enquire-js';
import './less/index.css';
import Cesium from "cesium/Cesium";


let isMobile;
enquireScreen((b) => {
    isMobile = b;
});


export default class CesiumComponent extends React.Component {
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

        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwOGQ1Mzc2OC00NzlhLTQxMGEtOGY3MS1kYmY4YjcxYTcyN2IiLCJpZCI6MTYzODQsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzA0MjYzMTF9.YOj297Bn6bE83YD-cFZsDHL4v9bqb8DPJK6LEYmGyKg';
        this.viewer = new Cesium.Viewer(this.cesiumContainer, {
            terrainProvider: Cesium.createWorldTerrain()
        });
    }

    render() {

        return (
            <div>
                <div id="cesiumContainer" ref={ element => this.cesiumContainer = element }/>
            </div>
        );
    }
}