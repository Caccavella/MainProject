import React, {Component} from 'react';
// eslint-disable-next-line
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import CNN from '../../../logos/cnn-logo.png';

export default class CNNCard extends Component {
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
      this.props.saveCardUrls(!this.state.checked, 'cnn.com' )
      
    }
    
render() {
return(
  <Card>
  <Checkbox className="checkbox" onClick={() => this.checkBoxClick() } />
  <CardHeader
      title="CNN"
      subtitle="cnn.com"
      avatar={CNN}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
    {/* <CardActions>
    <Checkbox label="SubURL 1" /><Checkbox label="SubURL 2" />
    </CardActions> */}
    <br />
    View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.
    </CardText>
  </Card>
);

}}