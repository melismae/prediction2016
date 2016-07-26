import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.selectList = this.selectList.bind(this);
    }

    selectList(list, index) {
        console.log("here");
    }

    getSources() {
        let sources = this.props.sources;
        return sources.map((entry, index) => {
            return (
                <option onClick={() => this.selectList(entry.source, index)}
                    className="list-name"
                    key={index}>
                    {entry.source}
                </option>
            );
        });
    }

    render() {
        return (
            <div>
              <select>
                {this.getSources()}
              </select>
            </div>
        );
    }
}
