import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messageText: 'bartosz wojtal.developer',
            left: -1000
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.setPositionText(),
            10);
    }

    render() {
        const leftPosition = this.state.left;

        return (
            <div className="welcome-container">
                <h3 style={{left: leftPosition, position: "relative"}} className={this.state.hover ? "js-show-text-hover" : "js-show-text"} id="msg">{this.state.messageText}</h3>
            </div>
        );
    }

    setPositionText() {
        let left = this.state.left;
        left ++;
        this.state.left < 0 ? this.setState({ left: left }) : false;
    }
}

export default Message;


if (document.getElementById('message-container')) {
    ReactDOM.render(<Message />, document.getElementById('message-container'));
}