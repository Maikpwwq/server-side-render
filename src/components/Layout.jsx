import React from 'react';
import PropTypes from 'prop-types';

// import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className='App'>
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
