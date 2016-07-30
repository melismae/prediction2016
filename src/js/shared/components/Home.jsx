import React, { Component } from 'react';
import { Link } from 'react-router';
import Dropdown from './Dropdown';

export default class Home extends Component {

    render() {
        let { candidates, sources, selected, dispatch } = this.props;
        let source = sources[selected];
        let winningParty = source.winning;
        let losingParty = winningParty === 'democrat' ? 'republican' : 'democrat';
        let winningPercent = `${winningParty}Percent`;
        let losingPercent = `${losingParty}Percent`;

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
                    <h1>President {candidates[winningParty].lastname}</h1>
                    <p>According to <a href={source.url} target="_blank">{source.source}</a>, {candidates[winningParty].firstname} {candidates[winningParty].lastname} has a {source[winningPercent]}% chance of winning, while {candidates[losingParty].firstname} {candidates[losingParty].lastname} has a {source[losingPercent]}% chance of winning.</p>
                    <p>Don't like the chances? <a href="https://www.usa.gov/register-to-vote" target="_blank">Register</a>, then <a href="https://gttp.votinginfoproject.org/" target="_blank">get out and vote</a> on November 8th!</p>
              </div>
            </div>
        );
    }
}
