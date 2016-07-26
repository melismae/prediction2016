import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => {
    return {
        candidates: state.sources.candidates,
        sources: state.sources.sources,
        dropdown: state.dropdown,
        winning: state.sources.partyWinning
    };
};
class App extends Component {
    render() {
        let { candidates, sources, dropdown, winning } = this.props;

        return (
            <div id="app-view">
                <Home candidates={candidates} sources={sources} dropdown={dropdown} winning={winning} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
