import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Navigation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'navigation'}>
                <a href="#" className={'logo-navigation'}>e-learning.bw</a>
            </div>
        )
    }
}

export default Navigation;

ReactDOM.render(<Navigation />, document.getElementById("navigation"));