import React, { Component} from 'react';
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
class Profile extends Component{
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
        return (
        <div>
            <Navegacion dataPerfil={this.state.dataPerfil}/>
            <Container>
                <Row>
                    <SideBarProfile dataPerfil={this.state.dataPerfil}/>
                    <Playlist Playlist={this.state.playlists}/>
                </Row>
            </Container>
            <Footer/>
        </div>
        )    
}
}
export default Profile;
