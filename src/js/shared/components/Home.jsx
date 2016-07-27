import React, { Component } from 'react';
import { Link } from 'react-router';
import Dropdown from './Dropdown';

export default class Home extends Component {

    render() {
        let { candidates, sources, dropdown, winning, dispatch } = this.props;
        return (
            <div>
              <Dropdown sources={sources} dropdown={dropdown} dispatch={dispatch} />
               {/*}<div id="selected-text">
                <p>Get ready for</p>
                <h1>President {winner.lastname}</h1>
                <p>According to {selectedSource.source}, has a % chance of winning, while has a {loser.percent}% chance of winning.</p>
                <p>Don't like the chances? Get out and vote!</p>
              </div> */}
            </div>
        );
    }
}
