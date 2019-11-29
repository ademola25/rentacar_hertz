import { vehiclesConstant } from '../constants';
import { vehiclesService } from '../services';
import axios from 'axios';

const vehiclesRepository = vehiclesService(axios);

const getVehicles = () => {
    function fetchVehicles(payload) { return { type: vehiclesConstant.ALL_VEHICLES,payload} }

    // dispatch
    return async function dispatch(dispatch) {
        try {
            const res = await vehiclesRepository.getAllVehicles();
            dispatch(fetchVehicles(res));
        } catch (err) {
            console.log(err);
            //dispatch(failure(err));
        }
    }
}

export const vehiclesAction = {
    getVehicles
    }