import {
    STARTSHIP_SELECTED_START,
    STARTSHIP_SELECTED_SUCCESS,
    STARTSHIP_SELECTED_ERROR,
} from './const';

const initialState = {
    data: [],
    loading: false,
    error: null,
    succes: null,
    errorMessage: '',
};

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case STARTSHIP_SELECTED_START:
            return {
                ...prevState,
                data: [],
                loading: true,
            };
        case STARTSHIP_SELECTED_SUCCESS:
            return {
                ...prevState,
                data: action.payload,
                succes: true,
                error: false,
                loading: false,
            };
        case STARTSHIP_SELECTED_ERROR:
            return {
                ...prevState,
                error: true,
                succes: false,
                errorMessage: action.payload,
                loading: false,
            };
        default:
            return prevState;
    }
};

export default reducer;