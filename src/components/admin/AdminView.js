import React from 'react';

// import Layout components
import Footer from './footer/Footer';
import NavBar from './nav/NavBar';
import ContentWrapper from './content/Content';

const AdminView = (props) => {
  return (
    <>
      <div className="container-scroller">
        {/* <!-- partial:partials/_horizontal-navbar.html --> */}
        <NavBar />
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <ContentWrapper />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminView;