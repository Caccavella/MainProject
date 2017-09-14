import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import TMZ from '../../../logos/tmz.png';

export default class TMZCard extends Component {
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
      title="TMZ"
      subtitle="tmz.com"
      avatar={TMZ}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
    <CardActions>
    <Checkbox label="SubURL 1" /><Checkbox label="SubURL 2" />
    </CardActions>
    <br />
    Breaking the biggest stories in celebrity and entertainment news. Get exclusive access to the latest stories, photos, and video as only TMZ can.
    </CardText>
  </Card>
);

}}