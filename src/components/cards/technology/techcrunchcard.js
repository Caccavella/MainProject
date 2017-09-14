import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import TechCrunch from '../../../logos/techcrunch.jpg';

export default class TechCrunchCard extends Component {
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
      title="TECHCRUNCH"
      subtitle="techcrunch.com"
      avatar={TechCrunch}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
    <CardActions>
    <Checkbox label="SubURL 1" /><Checkbox label="SubURL 2" />
    </CardActions>
    <br />
    TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.
    </CardText>
  </Card>
);
}}