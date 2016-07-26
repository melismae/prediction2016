import { combineReducers } from 'redux';
import DropdownReducer from './DropdownReducer';
import SourceReducer from './SourceReducer';

const rootReducer = combineReducers({
    dropdown: DropdownReducer,
    sources: SourceReducer
});

export default rootReducer;

// export { default as todos } from './TodoReducer';
