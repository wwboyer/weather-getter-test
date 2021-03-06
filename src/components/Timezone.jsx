import React from 'react';
import { Card } from 'semantic-ui-react';
import * as moment from 'moment-timezone';

class Timezone extends React.Component {
  render() {
    return (
      <Card centered>
        <Card.Content>
          <Card.Header><h1>Timezone:</h1></Card.Header>
          <Card.Content>
            {this.props.info ? this.props.info.timezone + " (UTC " + moment.tz(Date.now(), this.props.info.timezone).format('Z') + ")" : "Definitely on Earth somewhere. Probably."}
          </Card.Content>
        </Card.Content>
      </Card>
    )
  }
}

export default Timezone