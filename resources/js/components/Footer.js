import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
function Footer() {
  
    return (
      <div>
            
                <Row className="footer pt-4 pb-4">
                    <Col sm={1}>
                    </Col>
                    <Col sm={3} className="pt-1 pb-1" >
                        <h6 className="text-white bolder"> Nuestra App </h6>   
                        <h6 className="text-white bolder"> Blog </h6>  
                    </Col>
                    <Col sm={3} className="pt-1 pb-1">
                      <h6 className="text-white bolder"> Playlist </h6>   
                          <p className="text-white"> Consulta tus playlists </p>   
                          <p className="text-white"> Arma playlists </p>   
                    </Col>
                    <Col sm={3} className="pt-1 pb-1">
                          <h6 className="text-white bolder"> Ayuda </h6>   
                          <p className="text-white"> Contacto </p>
                    </Col>
                    <Col sm={1} className="pt-1 pb-1">
                    </Col>
                    <center>
                    <h6 className="text-white"> Desarrollado con amor por Ángel Gómez 💜 </h6>
                    </center>

                </Row>
      </div>
    );
}
export default Footer;
