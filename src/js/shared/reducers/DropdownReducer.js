import {
    DROPDOWN_SHOW,
    DROPDOWN_HIDE,
    DROPDOWN_SELECT,
} from '../constants/dropdown';

const initialState = {
    selected: 0,
    showDropdown: false
};


export default function dropdownReducer(state = initialState, action) {
    switch(action.type) {
        case DROPDOWN_SHOW:
            return Object.assign({}, state, {
                showDropdown: true
            });
        case DROPDOWN_HIDE:
            return Object.assign({}, state, {
                showDropdown: false
            });
        case DROPDOWN_SELECT:
            return Object.assign({}, state, {
                selected: id
            });
        default:
            return state;
    }
}
