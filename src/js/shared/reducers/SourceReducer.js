import {
    INITIAL_FETCH,
    SET_WINNING_PARTY
} from '../constants/sources';

const initialState = {

    partyWinning: '',
    sources: [
        // FETCH WILL PROVIDE
        // int republicanPercent
        // int democratPercent
        // int date
        // str source - note this will be coming in as a slug - need to parse
        {
            source: 'Primary Model (Helmut Norpath)',
            democratPercent: 13,
            republicanPercent: 87,
            winning: 'Clinton',
            url: 'http://primarymodel.com/'
        },
        {
            source: 'Betsey Lewis, Psychic',
            winning: 'Trump',
            url: 'http://www.betseylewis.com/2016_Predictions.html'
        }
    ],
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
            return Object.assign({}, state, {
                partyWinning: partyWinning
            });

        default:
            return state;
    }
}
