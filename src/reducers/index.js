import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { bookingReducer } from './booking.reducer';
import { driverReducer } from './driver.reducer';
import { vehicleReducer } from './vehicles.reducer';
import { companyReducer } from './company.reducer';
import { tripsReducer } from './trips.reducer';

const rootReducer = combineReducers({
  authentication,bookingReducer,driverReducer,vehicleReducer,companyReducer,tripsReducer
});

export default rootReducer;