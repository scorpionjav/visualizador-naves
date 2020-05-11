import {
    STARTSHIP_SELECTED_START,
    STARTSHIP_SELECTED_SUCCESS,
    STARTSHIP_SELECTED_ERROR,
} from './const';
import axios from 'axios';

export const starshipSelectedStartActionCreator = () => {
    return {
        type: STARTSHIP_SELECTED_START,
        payload: null
    };
}

const starshipSelectedSuccessActionCreator = (data) => {
    return {
        type: STARTSHIP_SELECTED_SUCCESS,
        payload: data
    };
}

const starshipSelectedErrorActionCreator = (message) => {
    return {
        type: STARTSHIP_SELECTED_ERROR,
        payload: message
    };
}

const starshipSelectedAsyncActionCreator = (data) => (dispatch) => {
    return new Promise (async(resolve, reject) => {
        try {
            dispatch(starshipSelectedStartActionCreator());
            const getPassengersNames = async() => {
                const attr = 'pilots';
                if (data[attr].length > 0) {
                    return await Promise.all(
                        data[attr].map(async(url) => {
                            try {
                                const passenger = url.replace('.co/','.dev/');
                                const response = await axios.get(passenger);
                                return(response.data.name);
                            } catch (error) {
                                console.log(error);
                            }
                        })
                    );
                } else {
                    return [];
                }
            };
            resolve(dispatch(starshipSelectedSuccessActionCreator(
                {
                    ...data,
                    passengersNames: await getPassengersNames()
                }
            )));
        } catch (error) {
            reject(dispatch(starshipSelectedErrorActionCreator(error)));
            debugger;
        }
    });
}

export default starshipSelectedAsyncActionCreator;