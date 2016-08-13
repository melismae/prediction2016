import {
    DROPDOWN_SELECT
} from '../constants/index';

const initialState = {
    selected: 0
}

export default function uiReducer(state = initialState, action) {
    switch(action.type) {
        case DROPDOWN_SELECT:
            return Object.assign({}, state, {
                selected: action.data.id
            });
        default:
            return state;
    }
}
