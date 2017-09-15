import React, {Component} from 'react';
// eslint-disable-next-line
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import TwitchTv from '../../../logos/twitchtv.png';

export default class TwitchCard extends Component {
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
    this.props.saveCardUrls(!this.state.checked, 'twitch.tv' )
    
  }
  
render() {
return(


  <Card>
  <Checkbox className="checkbox" onClick={() => this.checkBoxClick() } />
  <CardHeader
      title="TWITCHTV"
      subtitle="twitch.tv"
      avatar={TwitchTv}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
    {/* <CardActions>
    <Checkbox label="SubURL 1" /><Checkbox label="SubURL 2" />
    </CardActions> */}
    <br />
    Twitch is the world's leading video platform and community for gamers. More than 45 million gamers gather every month on Twitch to broadcast, watch and chat ...
    </CardText>
  </Card>
);

}}