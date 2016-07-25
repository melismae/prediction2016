import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hello from Home Component</h1>
                <ul>
                    <li><Link to="/todos">SubComponent</Link></li>
                </ul>
            </div>
        );
    }
}
