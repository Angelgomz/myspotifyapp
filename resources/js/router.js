import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "/app.js";
const Router = () => (
        <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route component={NotFound} />
                    </Switch>
        
        </BrowserRouter>

);
export default Router;
if (document.getElementById('app')) {
    ReactDOM.render(<Router/>, document.getElementById('app'));
}