import {
    STARTSHIP_GET_ALL_START,
    STARTSHIP_GET_ALL_SUCCESS,
    STARTSHIP_GET_ALL_ERROR,
} from './const';
import axios from 'axios';

const starshipGetAllStartActionCreator = () => {
    return {
        type: STARTSHIP_GET_ALL_START,
        payload: null
    };
}

const starshipGetAllSuccessActionCreator = (data) => {
    return {
        type: STARTSHIP_GET_ALL_SUCCESS,
        payload: data
    };
}

const starshipGetAllErrorActionCreator = (message) => {
    return {
        type: STARTSHIP_GET_ALL_ERROR,
        payload: message
    };
}

const starshipGellAllAsyncActionCreator = () => (dispatch) => {
    return new Promise (async(resolve, reject) => {
        try {
            dispatch(starshipGetAllStartActionCreator());
            const response = await axios.get('http://aurium.cl/swapi/starships.json');
            resolve(dispatch(starshipGetAllSuccessActionCreator(response.data.results)));
        } catch (error) {
            reject(dispatch(starshipGetAllErrorActionCreator(error)));
            debugger;
        }
    });
}

export default starshipGellAllAsyncActionCreator;