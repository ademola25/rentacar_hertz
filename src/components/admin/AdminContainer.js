import React, { Component } from 'react';
import { connect } from 'react-redux';

// import View
import AdminView from './AdminView';
import { vehiclesAction, companysAction,driversAction,tripsAction } from '../../actions'


class AdminContainer extends Component {
  state = {
  
  }

  componentDidMount(){
    this.fetchAll()
  }
  fetchAll = () => {
    const { dispatch } = this.props;
    dispatch(vehiclesAction.getVehicles());
    dispatch(companysAction.getCompanyUsers());
    dispatch(driversAction.getDrivers());
    dispatch(tripsAction.getTrips());
  }

  render() {
    const { authentication,companies,drivers,vehicles,trips } = this.props;
    const data = {
      companies,drivers,vehicles,trips
    }
    console.log(
      data
    )
    
    return (
      <AdminView />
    );
  }
}

function mapStateToProps(state) {
  return {
      authentication: state.authentication,
      companies:state.companyReducer,
      drivers:state.driverReducer,
      vehicles:state.vehicleReducer,
      trips:state.tripsReducer
  }
}

export default connect(mapStateToProps)(AdminContainer);