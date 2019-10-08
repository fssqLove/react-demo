import React, {PureComponent} from 'react';
import {Route} from 'react-router-dom';

import RouteService from './routeService';

export default class Router extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            routes: []
        }
    }

    componentDidMount() {
        RouteService.getRoutes()
            .then(data => {
                this.setState({
                    routes: data
                });
            }, err => {
                console.log('路由加载失败' + err);
            });
    }

    render() {
        return (
            <div>
                {this.state.routes.map((route, i) => (
                    <RouteWithSubRoutes key={route.id} {...route} />
                ))}
            </div>
        )
    }
}

function RouteWithSubRoutes(route) {
    return (
        <Route exact path={route.path} render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes}/>
        )}/>
    )
}
