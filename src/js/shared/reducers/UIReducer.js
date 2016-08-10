import {
    DROPDOWN_SELECT
} from '../constants/sources';

const initialState = {
    selected: 0
}

export default function UIReducer(state = initialState, action) {
    switch(action.type) {
        case DROPDOWN_SELECT:
            return Object.assign({}, state, {
                selected: action.data.id
            });
        default:
            return state;
    }
}
