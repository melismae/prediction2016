import {
    DROPDOWN_SELECT
} from '../constants/index';

export default function UIReducer(state = {}, action) {
    switch(action.type) {
        case DROPDOWN_SELECT:
            return Object.assign({}, state, {
                selected: action.data.id
            });
        default:
            return state;
    }
}
