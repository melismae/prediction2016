import React, { Component } from 'react';
import { Link } from 'react-router';
import Dropdown from './Dropdown';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
        // int republicanPercent
        // int democratPercent
        // int date
        // str source - note this will be coming in as a slug - need to parse
            selected: 1,
            partyWinning: 'D',
            sources: [
              {
                source: 'FiveThirtyEight',
                republicanPercent: 40,
                democratPercent: 51,
                date: "7/22/16"
              },
              {
                source: 'PredictWise',
                republicanPercent: 52,
                democratPercent: 42,
                date: "7/23/16"
              }
          ],
          candidates: {
              republican: {
                  firstname: 'Donald',
                  lastname: 'Trump'
              },
              democrat: {
                  firstname: 'Hillary',
                  lastname: 'Clinton'
              }
          }
        }
    }


    render() {
        console.log(this.state.candidates);
        let selectedSource = this.state.sources[this.state.selected];
        // let r = selectedSource.republicanPercent;
        // let d = selectedSource.democratPercent;
        //
        // candidates.republican.percent = r;
        // candidates.democrat.percent = d;
        //
        // let winner;
        // let loser;
        //
        // if (r > d) {
        //     // add the percent as a key to the candidates object
        //     winner = candidates.republican;
        //     loser = candidates.democrat;
        // } else {
        //     winner = candidates.democrat;
        //     loser = candidates.republican;
        // }

        return (
            <div>
              <Dropdown sources={this.state.sources} />
              <div id="selected-text">
                <p>Get ready for</p>
                <h1>President {winner.lastname}</h1>
                <p>According to {selectedSource.source}, has a % chance of winning, while has a {loser.percent}% chance of winning.</p>
                <p>Don't like the chances? Get out and vote!</p>
              </div>
            </div>
        );
    }
}
