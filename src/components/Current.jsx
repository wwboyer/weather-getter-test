import React from 'react';
import { Card, Divider } from 'semantic-ui-react';
import '../weather-icons.min.css';

class Current extends React.Component {
  render() {
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>
            Current Weather
          </Card.Header>
          <Divider />
          <Card.Content>
            {this.props.info ? <div><i style={{fontSize: "30px"}} className={"wi wi-forecast-io-" + this.props.info.currently.icon}></i><br></br></div> : null}
            {this.props.info ? <div style={{whiteSpace: "pre"}}>{Math.round(this.props.info.currently.temperature) + "°F\n(Feels Like: " + Math.round(this.props.info.currently.apparentTemperature) + "°F)"}</div> : "Higher than 0 Kelvin"}
            {this.props.info ? <div style={{ whiteSpace: "pre" }}>{(this.props.info.currently.temperature * (Math.PI / 180)).toFixed(4) + " Radians\n(Feels Like: " + (this.props.info.currently.apparentTemperature * (Math.PI / 180)).toFixed(4) + " Radians)"}</div> : "Higher than 0 Kelvin"}
          </Card.Content>
          {this.props.info ? <Divider /> : null}
          <Card.Content extra>
            <Card.Meta>
              {this.props.info ? this.props.info.currently.summary : null}
            </Card.Meta>
          </Card.Content>
        </Card.Content>
      </Card>
    )
  }
}

export default Current