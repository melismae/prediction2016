import {
    DROPDOWN_SELECT
} from '../constants/index';

export function dropdownSelect(id) {
    return {
        type: DROPDOWN_SELECT,
        data: {
            id: id
        }
    }
}
