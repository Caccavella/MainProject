import React, { Component } from 'react'
import '../../App.css';
import logo from '../../logo.svg';



export default class Header extends Component {

    render() {
        return (
            <div>
                <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="logout">
                    <a href="http://localhost:3000/logout"><button className="logoutbutton">Log Out</button></a>
                </div>
                </div>
                <p className="App-intro">
                Change your history.
                </p>
            </div>
        )
    }

}
