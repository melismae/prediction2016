export const INITIAL_FETCH = 'INITIAL_FETCH';
export const SET_WINNING_PARTY = 'SET_WINNING_PARTY';

import {
    INITIAL_FETCH,
    SET_WINNING_PARTY
} from '../constants/todos';

const initialState = {
    partyWinning: '',
    sources: [],
    candidates: {
        republican: {
            firstname: 'Donald',
            lastname: 'Trump'
        },
        democrat: {
            firstname: 'Hillary',
            lastname: 'Clinton'
        }
    }
};


export default function sourceReducer(state = initialState, action) {
    switch(action.type) {
        case INITIAL_FETCH:
            
        case SET_WINNING_PARTY:

        default:
            return state;
    }
}