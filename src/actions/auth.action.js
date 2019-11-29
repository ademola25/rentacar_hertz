import { userConstants } from '../constants';
import { auth } from '../services';
import axios from 'axios';

const authService = auth(axios);

const userLogin = (user) => {
    function request() { return { type: userConstants.LOGIN_REQUEST} }
    function success(success) { return { type: userConstants.LOGIN_SUCCESS, success} }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error} }


    // dispatch
    return async function dispatch(dispatch) {
        dispatch(request());
        try {
            const res = await authService.userLogin(user);
            console.log(res)
            if(res.success){
                const token = localStorage.setItem('token', res.Authorization);
                dispatch(success(res));
            }else if(res.error){
                dispatch(failure(res.msg));
            }
        } catch (err) {
            console.log(err);
        }
    }
}

const userLogout = () => {

    authService.logout()
    return {
        type: userConstants.LOGOUT
    }
}

export const authActions = {
    userLogin,userLogout
    }