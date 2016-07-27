import React, { Component } from 'react';
import { Link } from 'react-router';
import Dropdown from './Dropdown';

export default class Home extends Component {

    render() {
        let { candidates, sources, dropdown, winning, dispatch } = this.props;
        return (
            <div id="container">
              <div id="top">
                  <Dropdown sources={sources} dropdown={dropdown} dispatch={dispatch} />
                  <div id="page-title">
                      <h2>predict16</h2>
                  </div>
              </div>
              <div id="selected-text">
                  <p>Get ready for</p>
                  <h1>President Clinton</h1>
                  <p>According to FiveThirtyEight, Hillary Clinton has a 52.8% chance of winning in November, while Donald Trump's chances are at 47.5%.</p>
                  <p>Don't like the odds? Get out and vote!</p>
              </div>
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
