import React, { Component } from 'react';
import { Link } from 'react-router';
import { createTodo, deleteTodo } from '../actions/TodoActions';

export default class SubComponent extends Component {
    deleteHandler(id) {
        this.props.dispatch(deleteTodo(id));    
    }

    render() {
        let { todos, dispatch } = this.props;
        let input;
        return (
            <div>
                <h1>Hello from SubComponent</h1>
                <form
                    onSubmit={
                        (e) => {
                            e.preventDefault();
                            if (!input.value.trim()) {
                                return;
                            }
                            dispatch(createTodo(input.value));
                            input.value = '';
                        }
                    }
                >
                    <input
                        type="text"
                        ref={ (n) => input = n }
                    ></input>
                    <button type="submit">Add Todo</button>
                </form>
                <ul>
                    {todos.map(t => {
                        return <li key={t.id}>{t.text}
                                   <button
                                       type="button"
                                       onClick={() => this.deleteHandler(t.id)}
                                   >X</button>
                                </li>
                        })
                    }
                </ul>
                <Link to="/">Home</Link>
            </div>
        );
    }
}
