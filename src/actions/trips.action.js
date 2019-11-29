import { tripsService } from '../services';
import { tripsConstants } from '../constants';
import axios from 'axios';
const tripsRepository = tripsService(axios);

const getTrips = () => {
    const getAllTrips = (payload) => { return {type:tripsConstants.ALL_TRIPS,payload}}

    return async function dispatch(dispatch){
            try{
                const res = await tripsRepository.getAllTrips();
                dispatch(getAllTrips(res))
            }catch(err){
                console.log(err)
            }
    }

}
export const tripsAction = {
    getTrips
}