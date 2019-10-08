import asyncComponent from '../utils/asyncComponent'
const Home = asyncComponent(() => import("./Home"));
const Cesium = asyncComponent(() => import("./cesium"));

export const routes = [
    {
        id:0,
        path: "/",
        component: Home,
        routes: [
        ]
    },
    {
        id:1,
        path: "/Cesium",
        component: Cesium,
        routes: [
        ]
    },
];
