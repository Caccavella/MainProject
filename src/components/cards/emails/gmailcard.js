import React, { Component } from 'react';
// eslint-disable-next-line
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import Gmail from '../../../logos/gmaillogo.svg';

export default class GmailCard extends Component {
  constructor() {
    super()
    this.state = {
    checked: false,
    }
  }
  updateCheck() {
    this.setState({
      checked: !this.state.checked,
    }) 
    console.log(this.state.checked)
  }
  checkBoxClick() {
    this.updateCheck();
    this.props.saveCardUrls(!this.state.checked, 'gmail.com' )
    
  }
  

render() {
return(

  <Card>
  <Checkbox className="checkbox" onClick={() => this.checkBoxClick() } />
  <CardHeader
      title="GMAIL"
      subtitle="gmail.com"
      avatar={Gmail}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
    {/* <CardActions>
    <Checkbox label="SubURL 1" /><Checkbox label="SubURL 2" />
    </CardActions> */}
    <br />
    Gmail is email that's intuitive, efficient, and useful. 15 GB of storage, less spam, and mobile access.
    </CardText>
  </Card>
);

}
}