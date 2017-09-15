import React, { Component } from 'react';

import '../../App.css';
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



class URLS extends Component {
    constructor() {
        super();
        this.state = {
            toSave: '',
            urlList: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.saveCardUrls = this.saveCardUrls.bind(this);
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
        if (this.state.toSave !== "" && this.state.urlList.length < 20) {
            this.urlList.push(this.state.toSave);
        } else {
            alert("Please enter a valid URL, or delete a previously entered URL.");
        }
        this.setState({
            toSave: ''
        })
        console.log(this.urlList);
    }

    //   handleRequestDelete(key) {
    //     this.urlList = this.state.urlList;
    //     const urlToDelete = this.urlList.map((url) => url.key).indexOf(key);
    //     this.urlList.splice(urlToDelete, 1);
    //     this.setState({urlList: this.urlList});
    //   };
    saveCardUrls(param1, param2) {
        console.log("param2", param2)
        let url = this.state.urlList;
        console.log('url', url)
        if (param1) {
            url.push(param2)
            this.setState ({
                urlList: url
            })
        } else if (!param1) {
          let unChecked = this.state.urlList.filter(function(str){ return str !== param2; });
            this.setState ({
                urlList: unChecked
            })
        }

    }


    render() {
        // eslint-disable-next-line
        var urls = this.state.urlList.map((e, i) => {
            while (i < 20) {
                return (
                    <div key={i} >
                        {e}
                    </div>
                )
            }
        })
        return (
            <div className="pagecontainer">
                <div className="headercontainer">
                    <Header />
                </div>
                <MuiThemeProvider>
                    <div className="cardlist">
                        <div className="cardsleft">
                            <div className="card">
                                <ESPNCard saveCardUrls={this.saveCardUrls} />
                            </div>
                            <br />
                            <div className="card">
                                <TechCrunchCard saveCardUrls={this.saveCardUrls} />
                            </div>
                            <br />
                            <div className="card">
                                <ScholasticCard saveCardUrls={this.saveCardUrls} />
                            </div>
                            <br />
                            <div className="card">
                                <GmailCard saveCardUrls={this.saveCardUrls} />
                            </div>
                        </div>
                        <div className="cardsright">
                            <br />
                            <div className="card">
                                <TMZCard saveCardUrls={this.saveCardUrls} />
                            </div>
                            <br />
                            <div className="card">
                                <TwitchCard saveCardUrls={this.saveCardUrls} />
                            </div>
                            <br />
                            <div className="card">
                                <CNNCard saveCardUrls={this.saveCardUrls} />
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
                <div className="inputurls">
                    <h2>Input Custom URLs here:</h2>
                    <h4>(Limit of 20 total urls will be used)</h4>
                    <input id="search" value={this.state.toSave} onKeyPress={(event, cb) => onEnter(event, this.handleSave)} onChange={(e) => this.handleChange(e.target.value)} placeholder="URL to be saved"></input>
                    <br />
                    <button className="savebutton" type="button" onClick={() => this.handleSave()}>Save</button>
                    <br />

                    <div className="newurls">
                        ***
                    {urls}
                        ***
                </div>

                </div>
                <div className="button-container">
                    <Link to='/complete'><button className="gobutton" onClick={() => console.log('urlList: ', this.state.urlList)}>Go!</button></Link>
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