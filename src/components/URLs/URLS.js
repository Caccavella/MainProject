import React, { Component } from 'react';

import '../../App.css'
import Header from '../Header/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ScholasticCard from '../cards/education/scholasticcard';
import GmailCard from '../cards/emails/gmailcard';
import TMZCard from '../cards/entertainment/tmzcard';
import TwitchCard from '../cards/gaming/twitchcard';
import CNNCard from '../cards/news/cnncard';
import ESPNCard from '../cards/sports/espncard';
import TechCrunchCard from '../cards/technology/techcrunchcard';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import { onEnter } from '../functions';

var renderList= 'firstUrl';

class URLS extends Component {
    constructor() {
        super();
        this.state = {
            toSave: '',
            urlList: []
        }
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        this.props.getUserInfo();
    }
    handleChange(val) {
        this.setState({
            toSave: val
        })
    }
    handleSave() {
        this.urlList = this.state.urlList
        console.log(this.state.toSave);
        if(this.state.toSave !== "") {
            this.urlList.push(this.state.toSave);
        } else {
            alert("Please enter a URL");
        }
            console.log(this.urlList);
      }

    //   handleRequestDelete(key) {
    //     this.urlList = this.state.urlList;
    //     const urlToDelete = this.urlList.map((url) => url.key).indexOf(key);
    //     this.urlList.splice(urlToDelete, 1);
    //     this.setState({urlList: this.urlList});
    //   };
    renderUrls(){
     
        for(let i = 0; i < this.state.urlList.length; i++) {
            return renderList = this.state.urlList[i];
        }
    }  


    render() {
        return (
            <div className="pagecontainer">
                <div className="headercontainer">
                    <Header />
                </div>
                <MuiThemeProvider>
                    <div className="cardlist">
                        <div className="cardsleft">
                            <div className="card">
                                <ESPNCard />
                            </div>
                            <br />
                            <div className="card">
                                <TechCrunchCard />
                            </div>
                            <br />
                            <div className="card">
                                <ScholasticCard />
                            </div>
                            <br />
                            <div className="card">
                                <GmailCard />
                            </div>
                        </div>
                        <div className="cardsright">
                            <br />
                            <div className="card">
                                <TMZCard />
                            </div>
                            <br />
                            <div className="card">
                                <TwitchCard />
                            </div>
                            <br />
                            <div className="card">
                                <CNNCard />
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
                <div className="inputurls">
                    <h2>Input Custom URLs here:</h2>
                    <input id="search" onKeyPress={(event, cb) => onEnter(event, this.handleSave)} onChange={(e) => this.handleChange(e.target.value)} placeholder="URL to be saved"></input>
                    <br />
                    <button className="savebutton" type="button" onClick={() => this.handleSave()}>Save</button>
                    <br />

***
                <div className="">
                    {renderList}
                </div>
***

                </div>
                <div className="button-container">
                    <Link to='/complete'><button className="gobutton">Go!</button></Link>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {

        user: state.user
    }
}
let outputActions = {
    getUserInfo: getUserInfo
}

export default connect(mapStateToProps, outputActions)(URLS);