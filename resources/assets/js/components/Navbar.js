import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.titles = ['o mnie', 'pokaż swój projekt', 'ściągi', 'kontakt'];

    }

    render() {

        const listItems = this.titles.map((title, index) =>
            <li key={index} className={'navbar-list-item'}><a href="#">{title}</a></li>
        );

        return (
            <ul className={'navbar-list'}>
                {listItems}
            </ul>
        )

    }
}

export default Navbar;
ReactDOM.render(<Navbar />, document.getElementById("navbar"));