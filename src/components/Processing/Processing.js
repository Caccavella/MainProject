import React, { Component } from 'react';
import Header from '../Header/Header';
import './Processing.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LinearProgress from 'material-ui/LinearProgress';

var styleChange = {
    opacity: 1
}
var styleDefault = {
    opacity: 0
}

export default class Processing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            completed: 0,
        };
    }

    componentDidMount() {
        this.timer = setTimeout(() => this.progress(5), 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    progress(completed) {
        if (completed > 100) {
            this.setState({ completed: 100 });
        } else {
            this.setState({ completed });
            const diff = Math.random() * 10;
            this.timer = setTimeout(() => this.progress(completed + diff), 1000);
        }
    }


    render() {
        return (
            <div className="Completionpage">
                <div className="headercontainer"><Header />
                </div>
                <div className="contextbox">
                    <h1>Working on your history...</h1>
                </div>
                <div className="progressbar">
                    
                        <MuiThemeProvider>
                            <LinearProgress mode='determinate' value={this.state.completed} />
                        </MuiThemeProvider>
                
                </div>
                <br />
                <div style={(this.state.completed >= 100) ? styleChange : styleDefault} className="Completion">
                    Completed!
                    <button className="returnbutton">Return</button>
                    </div>

                
            </div>

        )
    }
}