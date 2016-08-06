import React, { Component } from 'react';
import { dropdownSelect } from '../actions/SourceActions';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.selectList = this.selectList.bind(this);
    }

    selectList(e) {
        this.props.dispatch(dropdownSelect(e.target.value));
    }

    getSources(sources) {
        return sources.map((entry, index) => {
            return (
                <option className="list-name"
                    value={index}
                    key={index}>
                    {entry.source}
                </option>
            );
        });
    }

    render() {
        let { sources, selected } = this.props;
        return (
            <div id="dropdown">
              <select onChange={(e) => this.selectList(e)}>
                {this.getSources(sources)}
              </select>
            </div>
        );
    }
}
