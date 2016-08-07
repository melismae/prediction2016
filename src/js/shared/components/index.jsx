import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => {
    return {
        candidates: state.sources.candidates,
        sources: state.sources.sources,
        selected: state.sources.selected
    };
};
class App extends Component {
    render() {
        let { candidates, sources, selected, dispatch } = this.props;
        return (
            <div id="app-view">
                <Home candidates={candidates} sources={sources} selected={selected} dispatch={dispatch} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
