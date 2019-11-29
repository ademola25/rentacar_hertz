import { vehiclesConstant } from '../constants';

export const vehicleReducer = ( state ={}, action) => {
    switch(action.type){
        case vehiclesConstant.ALL_VEHICLES:
            return {...state,allVehicles: action.payload }
        default:
            return {}    
    }
}