import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
    useRoutes,
  } from "react-router-dom";
import Home  from './components/Home.js';
import Profile  from './components/Profile.js';
import '../../public/css/navBar.css';
import '../../public/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Router = () => (
<BrowserRouter>
    <Routes>
             
                    <Route path="/" element={<Home/>}></Route>
                      <Route path="/profile" element={<Profile/>}></Route>
            
    </Routes>
</BrowserRouter>
);
if (document.getElementById('app')) {
    ReactDOM.render(<Router/>, document.getElementById('app'));
}