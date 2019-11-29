import { driverconstant } from '../constants';

export const driverReducer = ( state={}, action) => {
    switch(action.type){
        case driverconstant.ALL_DRIVERS:
            return{...state, drivers: action.payload}
        default:
            return {}    
    }
}