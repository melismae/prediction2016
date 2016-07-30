import {
    DROPDOWN_SELECT
} from '../constants/sources';

export function dropdownSelect(id) {
    return {
        type: DROPDOWN_SELECT,
        data: {
            id: id
        }
    }
}
