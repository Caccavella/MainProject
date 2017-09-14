import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import Gmail from '../../../logos/gmaillogo.svg';

export default class GmailCard extends Component {
  state = {
  checked: false,
}

updateCheck() {
  this.setState((oldState) => {
    return {
      checked: !oldState.checked,
    };
  });
}
render() {
return(

  <Card>
    <Checkbox className="checkbox" />
    <CardHeader
      title="GMAIL"
      subtitle="gmail.com"
      avatar={Gmail}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
    <CardActions>
    <Checkbox label="SubURL 1" /><Checkbox label="SubURL 2" />
    </CardActions>
    <br />
    Gmail is email that's intuitive, efficient, and useful. 15 GB of storage, less spam, and mobile access.
    </CardText>
  </Card>
);

}
}