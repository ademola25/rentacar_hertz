import { driverconstant } from '../constants';
import { driversService } from '../services';
import axios from 'axios';

const driversRepository = driversService(axios);

const getDrivers = () => {
    function fetchDrivers(payload) { return { type: driverconstant.ALL_DRIVERS,payload} }

    // dispatch
    return async function dispatch(dispatch) {
        try {
            const res = await driversRepository.getAllDrivers();
            dispatch(fetchDrivers(res));
        } catch (err) {
            console.log(err);
            //dispatch(failure(err));
        }
    }
}

export const driversAction = {
    getDrivers
    }