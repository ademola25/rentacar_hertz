import React from 'react';

const ContentWrapper = () => {
  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-12">


          <div className="row">
            <div className="col-sm-6 mb-4 mb-xl-0">
              <h3>James</h3>
              <h6 className="font-weight-normal mb-0 text-muted">Welcome Back!.</h6>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center justify-content-md-end">
                <div className="border-right-dark pr-4 mb-3 mb-xl-0 d-xl-block d-none">
                  <h3 className="text-muted">Company</h3>
                  <h6 className="font-weight-medium text-muted mb-0">Test</h6>
                </div>

                <div className="pr-1 mb-3 mb-xl-0">
                  <button type="button" className="btn btn-success btn-icon mr-2"><i className="mdi mdi-refresh"></i></button>
                </div>

              </div>
            </div>
          </div>



          <div className="page-header-tab mt-xl-4">
            <div className="col-12 pl-0 pr-0">
              <div className="row ">
                <div className="col-12 col-sm-6 mb-xs-4  pt-2 pb-2 mb-xl-0">
                  <ul className="nav nav-tabs tab-transparent" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="overview-tab" data-toggle="tab" href="#" role="tab" aria-controls="overview" aria-selected="true">Quick Links</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="users-tab" data-toggle="tab" href="#" role="tab" aria-controls="users" aria-selected="false">Book Trip</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" id="users-tab" data-toggle="tab" href="#" role="tab" aria-controls="users" aria-selected="false">All Trip</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="returns-tab" data-toggle="tab" href="#" role="tab" aria-controls="returns" aria-selected="false">Add User</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="more-tab" data-toggle="tab" href="#" role="tab" aria-controls="more" aria-selected="false">Find Vehicle</a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6 mb-xs-4 mb-xl-0 pt-2 pb-2 text-md-right d-none d-md-block">
                  <div className="d-inline-flex">
                    <button className="btn d-flex align-items-center">
                      <i className="mdi mdi-download mr-1"></i>
                      <span className="text-left font-weight-medium">
                        Download report
                            </span>
                    </button>

                    <button className="btn d-flex align-items-center pr-0">
                      <i className="mdi mdi-email-outline  mr-1"></i>
                      <span className="text-left font-weight-medium">
                        Email Driver
                            </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>




          <div className="tab-content tab-transparent-content pb-0">
            <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
              <div className="row">

                <div className="col-sm-6">
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-xl-6 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">


                          <div className="d-flex flex-wrap justify-content-between">
                            <h4 className="card-title">Driver</h4>
                            <div className="dropdown dropleft card-menu-dropdown">
                              <button className="btn p-0" type="button" id="dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="mdi mdi-dots-vertical card-menu-btn"></i>
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdown1" x-placement="left-start">
                                <a className="dropdown-item" href="#">All Drivers</a>
                              </div>
                            </div>
                          </div>
                          <div id="sales" className="carousel slide dashboard-widget-carousel position-static pt-2" data-ride="carousel">
                            <div className="carousel-inner">


                              <div id="all_drivers"></div>

                              <div className="carousel-item active">
                                <div className="d-flex flex-wrap align-items-baseline">
                                  <h3 className="mr-3">0807388183</h3>
                                </div>
                                <div className="mb-3">
                                  <p className="text-muted font-weight-bold text-small">Opeyemi Badmus<span className=" font-weight-normal"> (SKA 678 AB)</span></p>
                                </div>

                                <button className="btn btn-outline-secondary btn-sm btn-icon-text d-flex align-items-center">
                                  <i className="mdi mdi-earth mr-1"></i>
                                  <span className="text-left"></span>
                                </button>
                              </div>



                            </div>


                            <a className="carousel-control-prev" href="#sales" role="button" data-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#sales" role="button" data-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="sr-only">Next</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="col-12 col-sm-6 col-md-6 col-xl-6 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex flex-wrap justify-content-between">
                            <h4 className="card-title">Vehicles</h4>
                            <div className="dropdown dropleft card-menu-dropdown">
                              <button className="btn p-0" type="button" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="mdi mdi-dots-vertical card-menu-btn"></i>
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdown2" x-placement="left-start">
                                <a className="dropdown-item" href="#">Company Vehicles</a>
                              </div>
                            </div>
                          </div>
                          <div id="purchases" className="carousel slide dashboard-widget-carousel position-static pt-2" data-ride="carousel">
                            <div className="carousel-inner">


                              <div id="all_vehicles"></div>

                              <div className="carousel-item active">
                                <div className="d-flex flex-wrap align-items-baseline">
                                  <h3 className="mr-3">AAB 65 MMM</h3>
                                </div>
                                <div className="mb-3">
                                  <p className="text-muted font-weight-bold  text-small">Toyota Corolla <span className=" font-weight-normal">(SUV)</span></p>
                                </div>

                                <button className="btn btn-outline-secondary btn-sm btn-icon-text d-flex align-items-center">
                                  <i className="mdi mdi-car mr-1"></i>
                                  <span className="text-left"></span>
                                </button>
                              </div>






                            </div>
                            <a className="carousel-control-prev" href="#purchases" role="button" data-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#purchases" role="button" data-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="sr-only">Next</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-xl-6 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex flex-wrap justify-content-between">
                            <h4 className="card-title">Trips</h4>
                            <div className="dropdown dropleft card-menu-dropdown">
                              <button className="btn p-0" type="button" id="dropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="mdi mdi-dots-vertical card-menu-btn"></i>
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdown3" x-placement="left-start">
                                <a className="dropdown-item" href="#">All Trips</a>
                              </div>
                            </div>
                          </div>
                          <div id="returns" className="carousel slide dashboard-widget-carousel position-static pt-2" data-ride="carousel">
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <div className="d-flex flex-wrap align-items-baseline">
                                  <h2 className="mr-3">2400</h2>
                                </div>
                                <div className="mb-3">
                                  <p className="text-muted font-weight-bold text-small">PZ Company <span className=" font-weight-normal"></span></p>
                                </div>
                                <button className="btn btn-outline-secondary btn-sm btn-icon-text d-flex align-items-center">
                                  <i className="mdi mdi-shield-check mr-1"></i>
                                  <span className="text-left"></span>
                                </button>
                              </div>


                            </div>
                            <a className="carousel-control-prev" href="#returns" role="button" data-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#returns" role="button" data-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="sr-only">Next</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="col-12 col-sm-6 col-md-6 col-xl-6 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex flex-wrap justify-content-between">
                            <h4 className="card-title">Admins</h4>
                            <div className="dropdown dropleft card-menu-dropdown">
                              <button className="btn p-0" type="button" id="dropdown4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="mdi mdi-dots-vertical card-menu-btn"></i>
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdown4" x-placement="left-start">
                                <a className="dropdown-item" href="#">All Staff</a>
                              </div>
                            </div>
                          </div>
                          <div id="marketing" className="carousel slide dashboard-widget-carousel position-static pt-2" data-ride="carousel">
                            <div className="carousel-inner">


                              <div id="all_admin"></div>

                              <div className="carousel-item active">
                                <div className="d-flex flex-wrap align-items-baseline">
                                  <h3 className="mr-3">Jacob Zuma</h3>
                                </div>
                                <div className="mb-3">
                                  <p className="text-muted font-weight-bold text-small">Administrator<span className=" font-weight-normal">(level 1)</span></p>
                                </div>
                                <button className="btn btn-outline-secondary btn-sm btn-icon-text d-flex align-items-center">
                                  <i className="mdi mdi-view-headline mr-1"></i>
                                  <span className="text-left"></span>
                                </button>
                              </div>

                              {/* <!--<div className="carousel-item">
                                            <div className="d-flex flex-wrap align-items-baseline">
                                              <h2 className="mr-3">$ 27632</h2>
                                              <h3 className="text-success">+2.3%</h3>
                                            </div>
                                            <div className="mb-3">
                                              <p className="text-muted font-weight-bold text-small">North Ludwig <span className=" font-weight-normal">($2643M last month)</span></p>
                                            </div>
                                            <button className="btn btn-outline-secondary btn-sm btn-icon-text d-flex align-items-center">
                                            <i className="mdi mdi-calendar mr-1"></i>
                                            <span className="text-left">
                                            Oct
                                            </span>
                                            </button>
                                          </div>--> */}
                            </div>
                            <a className="carousel-control-prev" href="#marketing" role="button" data-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#marketing" role="button" data-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="sr-only">Next</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-sm-6">
                  <div className="col-md-6 col-lg-12 p-0 grid-margin">
                    <div className="card bg-primary">
                      <div className="card-body pb-0">
                        <div className="d-flex flex-wrap justify-content-between">
                          <h4 className="card-title text-white">Overview</h4>
                          <div className="dropdown dropleft card-menu-dropdown">

                          </div>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                          <div>
                            <h6 className="text-white">Maps</h6>
                            <p className="text-white mb-3">Vehicles</p>
                          </div>
                          <button className="btn btn-outline-primary btn-fw border ml-xl-4 text-white mb-4">View more</button>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <div>
                          <canvas id="areaChartMarketing"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>








              <div className="row">
                <div className="col-12 col-lg-4 col-xl-4 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-wrap justify-content-between">
                        <h4 className="card-title">Quick Book</h4>
                        <div className="dropdown dropleft card-menu-dropdown">

                        </div>
                      </div>


                      <div id="load_bookings"></div>

                      <form className="forms-sample" name="bookforCar" id="bookforCar">
                        <div className="card">
                          <div className="card-body">
                            {/* <!--<p className="card-description">
                                          Booking Trips Made Easy
                                        </p>--> */}
                            <div className="form-group">
                              <label>Passengers Name</label>
                              <input type="text" id="passengerName" className="form-control form-control-lg" placeholder="Passenger Name" aria-label="Passenger Name" />
                            </div>

                            <div className="form-group">
                              <label>Passengers Phone</label>
                              <input type="text" id="passengerPhone" className="form-control form-control-lg" placeholder="Passenger Phone" aria-label="Passenger Phone" />
                            </div>

                            <div className="form-group">
                              <label>Pickup Address</label>
                              <input type="text" id="pickup_address" className="form-control" placeholder="Pickup Address" aria-label="pickup" />
                            </div>
                            <div className="form-group">
                              <label>Drop Off Address</label>
                              <input type="text" id="dropoff_address" className="form-control form-control-sm" placeholder="Drop Off Address" aria-label="drop" />
                            </div>

                            <div className="form-group">
                              <label>Pickup Date</label>
                              <input type="text" id="pickup_date" className="form-control form-control-sm" placeholder="Pickup Date" aria-label="startdate" />
                            </div>

                            <div className="form-group">
                              <label>End Date</label>
                              <input type="text" id="end_date" className="form-control form-control-sm" placeholder="End Date" aria-label="enddate" />
                            </div>

                            <div className="form-group">
                              <label id="fetching">Select Vehicle</label>
                              <select className="js-example-basic-single w-100" id="allgetVehicles">
                                {/* <!-- className="js-example-basic-single w-100" --> */}
                                <option value="">Select</option>
                              </select>
                            </div>


                            <div className="form-group">
                              <label id="fetchingdrivers">Add Driver</label>
                              <select className="js-example-basic-single w-100" id="allgetDrivers">
                                <option value="">Select</option>
                              </select>
                            </div>

                            <div className="form-group">
                              <button className="btn btn-block btn-primary  todo-list-add-btn" id="booktrip">Book Trip</button>
                            </div>
                          </div>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>


                <div className="col-12 col-lg-8 col-xl-8 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-wrap justify-content-between">
                        <h4 className="card-title">Recent Trips</h4>
                        <div className="dropdown dropleft card-menu-dropdown">
                          <button className="btn p-0" type="button" id="dropdown11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="mdi mdi-dots-vertical card-menu-btn"></i>
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdown11" x-placement="left-start">
                            <a className="dropdown-item" href="#">All</a>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted">Most Recent Trips are shown here</p>
                      <div className="border pt-2 pb-2 mt-4 mb-3 border-radius-widget">
                        <ul className="d-md-flex flex-wrap align-items-baseline justify-content-center list-unstyled text-center mb-0 sales-legend">
                          <li className="border-right-sm">
                            <h6 className="font-weight-normal">Pending</h6>
                            <h2 className="text-primary">130</h2>
                          </li>
                          <li className="border-right-sm">
                            <h6 className="font-weight-normal">Dispatched</h6>
                            <h2 className="text-primary pl-md-3 pr-3">40</h2>
                          </li>
                          <li className="border-right-sm">
                            <h6 className="font-weight-normal">Accepted</h6>
                            <h2 className="text-primary">10</h2>
                          </li>
                          <li className="pb-2 pt-2 pl-4 pr-4">
                            <h6 className="font-weight-normal">Completed</h6>
                            <h2 className="text-primary">15</h2>
                          </li>
                        </ul>
                      </div>
                      <div className="row mt-1 d-sm-flex">
                        <div className="col-12">

                          <div className="table-responsive">
                            <table className="table center-aligned-table">
                              <thead>
                                <tr>

                                  <th>Name</th>
                                  <th>Pickup </th>
                                  <th>Drop Off</th>
                                  <th>Status</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>

                              <tbody id="contract_list">
                                {/* <!--<tr>
                                     
                                      <td>
                                        <div className="text-muted font-weight-medium">Mikel Ogbonna</div>
                                      </td>
                                      <td>Sharaton Hotel </td>
                                      <td>Ozumba Mbadiwe</td>
                                      <td><label className="badge badge-success">Completed</label></td>
                                      <td>
                                        <a href="#" className="mr-1 text-muted p-2"><i className="mdi mdi-view-array"></i></a>
                                        <a href="#" className="mr-1 text-muted p-2"><i className="mdi mdi-share"></i></a>
                                      </td>
                                    </tr>--> */}



                              </tbody>
                            </table>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>



          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentWrapper;