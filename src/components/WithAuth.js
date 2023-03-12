import React from 'react';
import { Navigate } from 'react-router-dom';
import { BCMS_USER_ID } from '../constants';

const withAuth = (Component) => {
  return class extends React.Component {
    render() {
      const isAuthenticated = localStorage.getItem(BCMS_USER_ID) != null
      console.log("isAuthenticated: ", isAuthenticated)
      if (!isAuthenticated) {
        return <Navigate to="/login" />;
      }
      return <Component {...this.props} />;
    }
  };
};

export default withAuth;