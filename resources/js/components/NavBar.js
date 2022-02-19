import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import '../../../public/css/styles.css';
function Navegacion() {
 
    return (
      <div>
       <Navbar>
        <Container>
          <Navbar.Brand href="/home">
                     <p> My Spotify App </p>
                   
          </Navbar.Brand>
        </Container>
        </Navbar>
      </div>
    );
}

export default Navegacion;
