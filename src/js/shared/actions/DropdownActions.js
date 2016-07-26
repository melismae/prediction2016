import {
    DROPDOWN_HIDE,
    DROPDOWN_SHOW,
    DROPDOWN_SELECT
} from '../constants/dropdown';

export function dropdownHide() {
    return {
        type: DROPDOWN_HIDE,
    }
}

export function dropdownShow() {
    return {
        type: DROPDOWN_SHOW,
    };
}

export function dropdownSelect(id) {
    return {
        type: DROPDOWN_SELECT,
        data: {
            id: id
        }
    }
}
