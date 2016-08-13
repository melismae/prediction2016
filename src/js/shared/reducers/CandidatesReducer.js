import { REPUBLICAN, DEMOCRAT } from '../constants/index';

const initialState = {
    republican: REPUBLICAN,
    democrat: DEMOCRAT
};

export default function candidatesReducer(state = initialState, action) {
    return state;
}
