import React from 'react';
import ReactDOM from 'react-dom';
require('./../bootstrap');
import '../../../public/css/navBar.css';
import '../../../public/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Navbar.js';
import Login from './Login.js';
import Footer from './Footer.js';
function Home(){
    return (
        <div>
            <Navegacion/>
            <Login/>
            <Footer/>
        </div>
      );
}
export default Home;
