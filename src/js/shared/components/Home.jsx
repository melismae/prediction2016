import React, { Component } from 'react';
import Dropdown from './Dropdown';

export default class Home extends Component {

    para(source, winning, losing, candidates) {
        let url = source.url;
        let sourceName = source.sourceName;
        let winnerName = `${candidates[winning].firstname} ${candidates[winning].lastname}`;
        let loserName = `${candidates[losing].firstname} ${candidates[losing].lastname}`;
        let winPercent = source[winning];
        let losePercent = source[losing];

        return(<p>
            According to <a href={url} target="_blank" className={winning}>{sourceName}</a>, {winnerName} has a {winPercent}% chance of winning, while {loserName} has a {losePercent}% chance of winning.
        </p>);
    }

    render() {
        let { candidates, sources, selected, dispatch } = this.props;
        let source = sources[selected] ? sources[selected] : "";
        let winningParty = source.winning;
        let losingParty = winningParty === 'democrat' ? 'republican' : 'democrat';
        let president = `President ${candidates[winningParty].lastname}`;

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
                    <h1 className={winningParty}>{president}</h1>
                    {this.para(source, winningParty, losingParty, candidates)}
                    <p>Don't like the chances? <a href="https://vote.usa.gov/" target="_blank" className={winningParty}>Register</a>, then <a href="https://gttp.votinginfoproject.org/" target="_blank" className={winningParty}>get out and vote</a> on November 8th!</p>
                </div>
            </div>
        );
    }
}
