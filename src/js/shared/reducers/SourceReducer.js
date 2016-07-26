import {
    INITIAL_FETCH,
    SET_WINNING_PARTY
} from '../constants/sources';

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
