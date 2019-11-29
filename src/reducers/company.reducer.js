import { companyusersConstant } from '../constants';

export const companyReducer = (state = {}, action) => {
    switch(action.type){
        case companyusersConstant.ALL_COMPANY_USERS:
            return {...state, companyUsers:action.payload}
        case companyusersConstant.ADD_USER:
            return {...state, successMessage:action.message}
        default:
            return{}        
    }
}
