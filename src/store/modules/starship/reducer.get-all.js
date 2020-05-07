import {
    STARTSHIP_GET_ALL_START,
    STARTSHIP_GET_ALL_SUCCESS,
    STARTSHIP_GET_ALL_ERROR
} from './const';

const initialState = {
    data: [],
    loading: true,
    error: null,
    succes: null,
    errorMessage: '',
};

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case STARTSHIP_GET_ALL_START:
            return {
                ...prevState,
                data: [],
                loading: true,
            };
        case STARTSHIP_GET_ALL_SUCCESS:
            return {
                ...prevState,
                data: action.payload,
                succes: true,
                error: false,
                loading: false,
            };
        case STARTSHIP_GET_ALL_ERROR:
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