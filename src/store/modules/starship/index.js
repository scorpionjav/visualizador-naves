import { combineReducers } from 'redux';
import starshipGetAll from './reducer.get-all';
import starshipSelected from './reducer.selected';

const reducer = combineReducers({
    starshipGetAll,
    starshipSelected
});

export default reducer;