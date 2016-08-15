import React, { Component } from 'react';
import Dropdown from './Dropdown';

export default class Home extends Component {

    render() {
        let { candidates, sources, selected, dispatch } = this.props;
        let source = sources[selected] ? sources[selected] : "";
        let winningParty = source.winning;
        let losingParty = winningParty === 'democrat' ? 'republican' : 'democrat';

        return (
            <div id="container">
                <div id="top">
                    <Dropdown sources={sources} selected={selected} dispatch={dispatch} />
                    <div id="page-title">
                        <h2>predict16</h2>
                    </div>
                </div>
                <div id="selected-text">
                    <p>&#8212;Get ready for&#8212;</p>
                    <h1 className={winningParty}>President {candidates[winningParty].lastname}</h1>
                    <p>According to <a href={source.url} target="_blank" className={winningParty}>{source.sourceName}</a>, {candidates[winningParty].firstname} {candidates[winningParty].lastname} has a {source[winningParty]}% chance of winning, while {candidates[losingParty].firstname} {candidates[losingParty].lastname} has a {source[losingParty]}% chance of winning.</p>
                    <p>Don't like the chances? <a href="https://vote.usa.gov/" target="_blank" className={winningParty}>Register</a>, then <a href="https://gttp.votinginfoproject.org/" target="_blank" className={winningParty}>get out and vote</a> on November 8th!</p>
              </div>
            </div>
        );
    }
}
