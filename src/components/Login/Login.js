import React, { Component } from 'react'
import './Login.css';
import {Link} from 'react-router-dom';



export default class Login extends Component {

    render() {
        return (
            <div className="login">
                <div className="login-container">
                    <div className="name">
                        <h1>Sim History</h1>
                    </div>
                    <a href={process.env.REACT_APP_LOGIN}><button className="loginbutton">Log In</button></a>
                </div>
                    {/* <div className="details">
                    </div> */}
                <div className="spanish-link">
                <Link to="/sp">En Español</Link>
                </div>
            </div>
        )
    }

}