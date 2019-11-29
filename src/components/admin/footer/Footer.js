import React from 'react';

const Footer = (props) => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-center text-sm-left d-block d-sm-inline-block">Copyright &copy; 2019. All rights reserved. </span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Designed by: <a href="https://jaycodes.com" target="_blank">James</a>. </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;