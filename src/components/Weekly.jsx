import React from 'react';
import { Card, Divider } from 'semantic-ui-react';
import '../weather-icons.min.css';
import * as moment from 'moment-timezone';

class Weekly extends React.Component {
  render() {
    return (
      <div style={{"width": "75vw","display": "inline-block"}}>
      <Card.Group itemsPerRow={4}>
          {this.props.info.daily.data.map((data, i) => {
            return (
              <Card centered fluid={false} key={i}>
                <Card.Content>
                  <Card.Header>
                    {i === 0 ? "Today" : moment.tz(new Date(data.time * 1000), this.props.info.timezone).format("dddd")}
                  </Card.Header>
                  <Divider />
                  <i style={{ fontSize: "30px" }} className={"wi wi-forecast-io-" + data.icon}></i>
                  <br></br>
                  {this.props.info ? <div style={{ whiteSpace: "pre" }}>{"High: " + Math.round(data.temperatureMax) + "°F\n"}</div> : "Higher than 0 Kelvin"}
                  {this.props.info ? <div style={{ whiteSpace: "pre" }}>{"Low: " + Math.round(data.temperatureMin) + "°F\n"}</div> : "Higher than 0 Kelvin"}
                  <Divider />
                  <Card.Content extra>
                    <Card.Meta>
                      {data.summary}
                    </Card.Meta>
                  </Card.Content>
                </Card.Content>
              </Card>
            )
          })}
      </Card.Group>
      </div>
    )
  }
}

export default Weekly