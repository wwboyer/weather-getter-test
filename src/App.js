import React, { Component } from 'react';
import './App.css';
import Timezone from './components/Timezone';
import Current from './components/Current';
import Weekly from './components/Weekly';
import { Card, Button } from 'semantic-ui-react';
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider/Divider';

class App extends Component {

  state = {
    lat: null,
    long: null,
    text: "Get Location",
    info: null,
    loading: false
  }

  getLatitudeLongitude = () => {
    this.setState({
      lat: "Imma find you",
      long: "Get spooked boi",
      text: "Loading...",
      loading: true
    })
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(position => {
        let proxyURL = 'https://cors-anywhere.herokuapp.com/'
        let targetURL = "https://api.darksky.net/forecast/" + process.env.REACT_APP_DARK_SKY_KEY + "/" + position.coords.latitude + "," + position.coords.longitude
        this.setState({
          lat: position.coords.latitude.toFixed(6),
          long: position.coords.longitude.toFixed(6),
          text: "Get Location",
          loading: false
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
          <Card.Content>
            Latitude: {this.state.lat}
            <br></br>
            Longitude: {this.state.long}
            <Divider />
            <Button color={"green"} disabled={this.state.loading} loading={this.state.loading} fluid={false} size="tiny" onClick={this.getLatitudeLongitude}>{this.state.text}</Button>
          </Card.Content>
        </Card>
        {this.state.info ? <Timezone info={this.state.info} /> : null}
        {this.state.info ? <Current info={this.state.info} /> : null}
        {this.state.info ? <Weekly info={this.state.info} /> : null}
      </div>
    );
  }
}

export default App;
