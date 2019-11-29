import React from 'react';

const NavBar = (props) => {
  return (
    <div className="horizontal-menu">
      <nav className="navbar top-navbar col-lg-12 col-12 p-0">
        <div className="container">
          <div className="text-left navbar-brand-wrapper d-flex align-items-center justify-content-between">
            <a className="navbar-brand brand-logo" href="index.html"><img src="http://rentacar.ng/images/hertznigeria.png" alt="logo" /></a>
            <a className="navbar-brand brand-logo-mini" href="index.html"><img src="http://rentacar.ng/images/hertznigeria.png" alt="logo" /></a>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <ul className="navbar-nav ml-lg-3">
              <li className="nav-item  dropdown d-none align-items-center d-lg-flex d-none">
                <a className="dropdown-toggle btn btn-outline-secondary btn-fw" href="#" data-toggle="dropdown" id="pagesDropdown">
                  <span className="nav-profile-name menu-item">Profile</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="pagesDropdown">
                  <a className="dropdown-item">
                    <i className="mdi mdi-settings text-primary"></i>
                    Account
                  </a>
                  <a className="dropdown-item">
                    <i className="mdi mdi-logout text-primary"></i>
                    Logout
                  </a>
                </div>
              </li>

            </ul>


            <ul className="navbar-nav navbar-nav-right">


              <li className="nav-item dropdown">
                <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
                  <i className="mdi mdi-email-outline mx-0"></i>
                  <p className="notification-ripple notification-ripple-bg">
                    <span className="ripple notification-ripple-bg"></span>
                    <span className="ripple notification-ripple-bg"></span>
                    <span className="ripple notification-ripple-bg"></span>
                  </p>
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                  <p className="mb-0 font-weight-normal float-left dropdown-header">Pending Trips</p>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="https://via.placeholder.com/36x36" alt="image" className="profile-pic" />
                    </div>
                    <div className="preview-item-content flex-grow">
                      <h6 className="preview-subject ellipsis font-weight-normal">David Grey
                        </h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        The meeting is cancelled
                        </p>
                    </div>
                  </a>

                </div>
              </li>

              <li className="nav-item nav-user-icon">
                <a className="nav-link" href="#">
                  <img src="https://via.placeholder.com/37x37" alt="profile" />
                </a>
              </li>
              <li className="nav-item nav-settings d-none d-lg-flex">
                <a className="nav-link" href="#">
                  <i className="mdi mdi-dots-horizontal"></i>
                </a>
              </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
              <span className="mdi mdi-menu"></span>
            </button>
          </div>
        </div>
      </nav>
      <nav className="bottom-navbar">
        <div className="container">
          <ul className="nav page-navigation">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <i className="mdi mdi-shield-check menu-icon"></i>
                <span className="menu-title">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/widgets/widgets.html">
                <i className="mdi mdi-puzzle menu-icon"></i>
                <span className="menu-title">Drivers</span>
              </a>
            </li>




            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="mdi mdi-view-headline menu-icon"></i>
                <span className="menu-title">Trips</span>
                <i className="menu-arrow"></i></a>
              <div className="submenu">
                <ul className="submenu-item">
                  <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Book Dispatch</a></li>
                  <li className="nav-item"><a className="nav-link" href="pages/forms/advanced_elements.html">Pending Trips</a></li>
                  <li className="nav-item"><a className="nav-link" href="pages/forms/validation.html">All Trips</a></li>
                  <li className="nav-item"><a className="nav-link" href="{{ route('adduser') }}">Add Users </a></li>
                  <li className="nav-item"><a className="nav-link" href="pages/forms/text_editor.html">Find Vehicle</a></li>
                </ul>
              </div>
            </li>




            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="mdi mdi-view-quilt menu-icon"></i>
                <span className="menu-title">Maps</span>
              </a>

            </li>



            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="mdi mdi-image-filter menu-icon"></i>
                <span className="menu-title">Contact Us</span>
              </a>

            </li>


            <li className="nav-item">
              <a href="pages/documentation/documentation.html" className="nav-link">
                <i className="mdi mdi-file-document menu-icon"></i>
                <span className="menu-title">Users</span></a>
            </li>


            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="mdi mdi-format-list-bulleted-square menu-icon"></i>
                <span className="menu-title">Reports</span>
              </a>

            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;