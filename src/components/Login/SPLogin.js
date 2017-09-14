import React, { Component } from 'react'
import './Login.css';
import {Link} from 'react-router-dom';



// var language = 'spanish';


export default class SPLogin extends Component {
    render() {
        return (
            <div className="login">
                <div className="login-container">
                    <div className="name">
                        <h1>Sim Historia</h1>
                    </div>
                    <a href={process.env.REACT_APP_LOGIN}><button className="loginbutton">Acceder</button></a>
                </div> 
                <div className="spanish-link">
                <Link to="/">English</Link>
                </div>
            </div>
        )
    }

}