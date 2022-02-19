import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import api from '../api.js'
function Login() {
    function connectSpotify(){
        api.login().then(url =>
            window.location.href = url.url
        ).then(resp =>
            console.log(resp)
        );
    }
    return (
      <div>
            
                <Row>
                    <Col sm={5} className="pt-4 pl-3 pr-3 pb-4 homeLeft">
                            <p> ¡Una nueva interfaz para disfrutar al máximo tu spotify!</p>

                            <h5> Conectate a una nueva forma de escuchar música </h5>
                            <Button variant="success" className="btn-login mt-1" onClick={connectSpotify}>
                               <p> Login con spotify <FontAwesomeIcon icon={faSpotify}  /></p>
                            </Button>
                    </Col>
                    <Col sm={7} className="home">
                      
                         
                    </Col>
                </Row>
      </div>
    );
}

export default Login;
