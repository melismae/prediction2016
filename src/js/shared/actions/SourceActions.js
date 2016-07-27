import axios from 'axios';
import {
    INITIAL_FETCH,
    SET_WINNING_PARTY
} from '../constants/sources';

const ROOT_URL = ''; 

export function initialFetch() {
    const request = axios.get(`${ROOT_URL}/api/v1/predictions`);
    return {
        type: INITIAL_FETCH,
        payload: request
    }
}

export function setWinningParty(id) {
    return {
        type: SET_WINNING_PARTY,
        id: id
    };
}
