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
class SideBarProfile extends Component{
    constructor(props){
      super(props);
         this.state = 
         {
         dataPerfil:[],
         token:'',
         playlists:[]
        }
    }
  async componentDidMount(){
       let response = await fetch('/getDataUserLogIn');
       let userdata = await response.json();
        this.setState({
            dataPerfil: userdata.user,
            token:userdata.token
          });
       
    
    }
      render(){
          return(
            <Fragment>
                         <Col md={3} className="pt-4 pl-3 pr-3 pb-4">
                           <Card> 
                                 <Card.Img variant="top" src={this.state.dataPerfil.image} />    
                              <Card.Body>    
                                 <div className="d-flex">
                                    <h6 className="titleBlue"> Nombre: </h6>
                                    <h6>
                                        {this.state.dataPerfil.name} 
                                    </h6>
                                  </div>
                                  <div className="d-flex">
                                    <h6 className="titleBlue"> Followers: </h6>
                                    <h6 className="subtitleCards">
                                        {this.state.dataPerfil.followers} 
                                    </h6>
                                  </div>
                                  <div className="d-flex">
                                    <h6 className="titleBlue"> Email: </h6>
                                    <h6 className="subtitleCards">
                                        {this.state.dataPerfil.email} 
                                    </h6>
                                  </div>
                                  <div className="d-flex">
                                    <h6 className="titleBlue"> Pais: </h6>
                                    <h6 className="subtitleCards">
                                        {this.state.dataPerfil.country} 
                                    </h6>
                                  </div>
                                  <div className="d-flex">
                                    <h6 className="titleBlue"> My Playlist: </h6>
                                    <h6 className="subtitleCards">
                                  
                                    </h6>
                                  </div>
                                  <div className="d-flex">
                                    <Button variant="success" className="btn-login mt-1">
                                        <h6 >
                                            ACCEDER A MIS PLAYLIST 
                                        </h6>
                                    </Button>
                                  </div>
                              </Card.Body>
                          </Card>
                    </Col>
             </Fragment>
              )
      }
  }
  export default SideBarProfile; 