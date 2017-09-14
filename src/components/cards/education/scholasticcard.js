import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import Scholastic from '../../../logos/scholastic.jpg';


// var scholasticEng = 'Scholastic Book Clubs is the best possible partner to help you get excellent books into the hands of every child, to help them become successful lifelong readers ...';
// var scholasticSp = 'Scholastic (o Scholastic Inc.) es una empresa editora de libros estadounidense conocida por publicar materiales educativos para escuelas, profesores, y padres ...';
export default class ScholasticCard extends Component {
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
  <Checkbox className="checkbox" onChange={(value) => console.log(value) } />
  <CardHeader
  title="SCHOLASTIC"
  subtitle="scholastic.com"
  avatar={Scholastic}
  actAsExpander={true}
  showExpandableButton={true}
  />
  <CardText expandable={true}>
  <CardActions>
  <Checkbox label="SubURL 1" /><Checkbox label="SubURL 2" />
    </CardActions>
    <br />
    {/* {(this.state.language ==='spanish')
    
    ? 'Scholastic (o Scholastic Inc.) es una empresa editora de libros estadounidense conocida por publicar materiales educativos para escuelas, profesores, y padres ...'
  :  'Scholastic Book Clubs is the best possible partner to help you get excellent books into the hands of every child, to help them become successful lifelong readers ...'}\ */}
  Scholastic Book Clubs is the best possible partner to help you get excellent books into the hands of every child, to help them become successful lifelong readers ...'
    </CardText>
    </Card>
  );

  
}
  
}