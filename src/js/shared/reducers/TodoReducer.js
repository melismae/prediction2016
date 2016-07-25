import {
    CREATE_TODO,
    DELETE_TODO
} from '../constants/todos';

const initialState = [
    {
        text: 'cat',
        id: Date.now()
    }
];

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case CREATE_TODO:
            return [
                ...state,
                action.data
            ]
        case DELETE_TODO:
            let index = state.map(t => t.id).indexOf(action.id);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        default:
            return state;
    }
}
