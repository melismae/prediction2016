import {
    DROPDOWN_SELECT
} from '../constants/dropdown';

export function dropdownSelect(id) {
    return {
        type: DROPDOWN_SELECT,
        data: {
            id: id
        }
    }
}
