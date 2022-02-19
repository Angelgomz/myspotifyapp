import React, { Component , Fragment}from 'react';
import ReactDOM from 'react-dom';
require('./../bootstrap');
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../../public/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useState } from 'react';
class Playlist extends Component{
    constructor(props){
      super(props);
      
    }
      render(){
          return(
            <Fragment>
                    <Col md={9}>
                        <Row>
                       {this.props.Playlist.map((playlist) =>
                         <Col key={playlist.id} md={3} className="pt-4 pl-3 pr-3 pb-4">
                        <Card className="cardplaylist">
                           <Card.Img className="playlistImg" variant="top" src={playlist.images[0]['url']} />
                              <h6 className="titleBlue pt-1 pb-1"> {playlist.name}</h6>
                              <div className="d-flex">
                                    <p className="text-gray"> Created By: {playlist.owner.display_name}</p>
                              </div>
                              <div className="d-flex">
                                    <p className="text-gray"> {playlist.descripcion}</p>
                              </div>
                              <div className="d-flex">
                                    <Button variant="success" className="btn-login mt-1">
                                        <p>
                                            acceder
                                        </p>
                                    </Button>
                                  </div>
                         </Card>
                        </Col>
                        )}
                        </Row>
                    </Col>
             </Fragment>
              )
      }
  }
  export default Playlist; 