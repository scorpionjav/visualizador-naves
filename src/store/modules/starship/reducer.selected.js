import {
    STARTSHIP_SELECTED
} from './const';

const initialState = null;

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case STARTSHIP_SELECTED:
            return action.payload;
        default:
            return prevState;
    }
};

export default reducer;