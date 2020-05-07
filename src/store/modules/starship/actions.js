import {
    STARTSHIP_GET_ALL_START,
    STARTSHIP_GET_ALL_SUCCESS,
    STARTSHIP_GET_ALL_ERROR,
    STARTSHIP_SELECTED
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

export const starshipGellAllAsyncActionCreator = () => (dispatch) => {
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

export const starshipSelectedActionCreator = (data) => {
    const attr = 'pilots'; //TODO: falta definición
    const getPassengersNames = () => {
        let names = [];
        data[attr].length > 0 && data[attr].map( async(passenger) => {
                try {
                    const response = await axios.get(passenger);
                    names.push(response.data.name); //TODO: comprobar respuesta del servicio
                } catch (error) {
                    console.log(error);
                }
            }
        )
        return names;
    };

    return {
        type: STARTSHIP_SELECTED,
        payload: {
            ...data,
            passengersNames: getPassengersNames()
        }
    };
}
