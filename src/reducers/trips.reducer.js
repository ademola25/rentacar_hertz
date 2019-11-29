import { tripsConstants } from '../constants';

export const tripsReducer = (state ={}, action) => {
    switch(action.type){
        case tripsConstants.ALL_TRIPS:
            return {...state, tripsReport:action.payload}
        default:
            return {}    
    }
}