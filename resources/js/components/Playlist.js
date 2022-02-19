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
       
      let playlist = await fetch('https://api.spotify.com/v1/users/'+this.state.dataPerfil.id+'/playlists?limit=20&offset=0',{
                method:'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type":"application/json",
                    "Authorization": "Bearer "+this.state.token
                  },

      });
      let responseplay = await playlist.json();
      this.setState({
        playlists: responseplay.items
      });
    }
      render(){
          return(
            <Fragment>
                    <Col md={9}>
                        <Row>
                       {this.state.playlists.map((playlist) =>
                         <Col key={playlist.id} md={3} className="pt-4 pl-3 pr-3 pb-4">
                        <Card>
                              <p> {playlist.name}</p>
                         </Card>
                        </Col>
                        )};
                        </Row>
                    </Col>
             </Fragment>
              )
      }
  }
  export default Playlist; 