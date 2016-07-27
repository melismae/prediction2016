import {
    DROPDOWN_SELECT
} from '../constants/dropdown';

const initialState = {
    selected: 0
};

export default function dropdownReducer(state = initialState, action) {
    switch(action.type) {
        case DROPDOWN_SELECT:
            return Object.assign({}, state, {
                selected: action.data.id
            });
        default:
            return state;
    }
}
