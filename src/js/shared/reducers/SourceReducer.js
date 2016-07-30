import {
    DROPDOWN_SELECT
} from '../constants/sources';

const initialState = {
    selected: 0,
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
            winning: 'republican',
            url: 'http://primarymodel.com/'
        },
        {
            source: 'Betsey Lewis, Psychic',
            winning: 'republican',
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

export default function dropdownReducer(state = initialState, action) {
    switch(action.type) {
        case DROPDOWN_SELECT:
            return Object.assign({}, state, {
                selected: action.data.id
            });
        default:
            return state;
    }
}
