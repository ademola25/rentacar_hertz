import { companyusersConstant } from '../constants';
import { companyservice } from '../services';
import axios from 'axios';

const companiesRepository = companyservice(axios);

const getCompanyUsers = () => {
    function fetchCompanies(payload) { return { type: companyusersConstant.ALL_COMPANY_USERS,payload} }

    // dispatch
    return async function dispatch(dispatch) {
        try {
            const res = await companiesRepository.getCompanyUsers();
            dispatch(fetchCompanies(res));
        } catch (err) {
            console.log(err);
            //dispatch(failure(err));
        }
    }
}

export const companysAction = {
    getCompanyUsers
    }