import React, {Component} from 'react';
// eslint-disable-next-line
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import TechCrunch from '../../../logos/techcrunch.jpg';

export default class TechCrunchCard extends Component {
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
    this.props.saveCardUrls(!this.state.checked, 'techcrunch.com' )
    
  }
  
render() {
return(
  <Card>
  <Checkbox className="checkbox" onClick={() => this.checkBoxClick() } />
  <CardHeader
      title="TECHCRUNCH"
      subtitle="techcrunch.com"
      avatar={TechCrunch}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
    {/* <CardActions>
    <Checkbox label="SubURL 1" /><Checkbox label="SubURL 2" />
    </CardActions> */}
    <br />
    TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.
    </CardText>
  </Card>
);
}}