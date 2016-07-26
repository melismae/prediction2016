import {
    INITIAL_FETCH,
    SET_WINNING_PARTY
} from '../constants/sources';

export function initialFetch() {
    return {
        type: INITIAL_FETCH
        // API GET 
    }
}

export function setWinningParty(id) {
    return {
        type: SET_WINNING_PARTY,
        id: id
    };
}
