import {
    DROPDOWN_SELECT
} from '../constants/sources';


/*
//store
{
    selected: 0,
    sources: [],
    candidates: {}

}

/*
// const initialState = {
//     selected: 0,
//     candidates: {
//         republican: {
//             firstname: 'Donald',
//             lastname: 'Trump'
//         },
//         democrat: {
//             firstname: 'Hillary',
//             lastname: 'Clinton'
//         }
//     }
// };

export default function dropdownReducer(state = {}, action) {
    switch(action.type) {
        case DROPDOWN_SELECT:
            return Object.assign({}, state, {
                selected: action.data.id
            });
        default:
            return state;
    }
}
