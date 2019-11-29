import { bookingConstant } from '../constants';

export const bookingReducer = (state={},action ) => {
    switch(action.type){
        case bookingConstant.CREATE_BOOKING:
            return { successMessage:action.message}
        default:
            return {}    
    }
}