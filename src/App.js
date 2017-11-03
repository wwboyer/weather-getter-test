import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timezone from './components/Timezone';
import Current from './components/Current';
import { Card, Button, Divider } from 'semantic-ui-react';

class App extends Component {

  state = {
    lat: null,
    long: null,
    text: "Get Location",
    info: null
  }

  getLatitudeLongitude = () => {
    this.setState({
      lat: "Imma find you",
      long: "Get spooked boi",
      text: "Loading..."
    })
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(position => {
        let proxyURL = 'https://cors-anywhere.herokuapp.com/'
        let targetURL = "https://api.darksky.net/forecast/" + process.env.REACT_APP_DARK_SKY_KEY + "/" + position.coords.latitude + "," + position.coords.longitude
        this.setState({
          lat: position.coords.latitude.toFixed(6),
          long: position.coords.longitude.toFixed(6),
          text: "Get Location"
        })
        fetch(proxyURL + targetURL)
        .then(response => response.json())
        .then(json => this.setState({info: json}))
        
      })
    }else{
      alert("Can't get geolocation because either the browser doesn't support it or it's been turned off. Or maybe you're in China?")
    }
  }

  render() {
    console.log(this.state.info)
    return (
      <div className="App">
        <header className="App-header">
          <h1><a href="https://www.darksky.net/poweredby/" style={{color: "white", textDecoration: "none"}}>Powered by DarkSky</a></h1>
        </header>
        <Card centered>
          Latitude: {this.state.lat}
          <br></br>
          Longitude: {this.state.long}
          <br></br>
          <Card.Content>
            <Button color={"green"} fluid={false} size="tiny" onClick={this.getLatitudeLongitude}>{this.state.text}</Button>
          </Card.Content>
        </Card>
        <Timezone info={this.state.info} />
        <Current info={this.state.info} />
      </div>
    );
  }
}

export default App;
