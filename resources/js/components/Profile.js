import React from 'react';
import ReactDOM from 'react-dom';
require('./../bootstrap');
import '../../../public/css/navBar.css';
import '../../../public/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Navegacion from './Navbar.js';
import Footer from './Footer.js';
import SideBarProfile from './SideBarProfile.js';
import Playlist from './Playlist.js';
function Profile(){
    return (
        <div>
            <Navegacion/>
            <Container>
                <Row>
                    <SideBarProfile/>
                    <Playlist/>
                </Row>
            </Container>
            <Footer/>
        </div>
      );
}
export default Profile;
