import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};
class App extends Component {
    render() {
        let { todos, children } = this.props;
        let childrenWithProps = children ? React.cloneElement(children, this.props) : '';

        return (
            <div id="app-view">
                <Home todos={todos} />
                <div>{childrenWithProps}</div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
