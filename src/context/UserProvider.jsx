import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { userContext } from './index';

function UserProvider({ children }) {
  const [recommendations, setRecommendations] = useState([]);
  const value = {
    recommendations,
    setRecommendations,

  };

  return (
    <userContext.Provider value={ value }>
      { children }
    </userContext.Provider>
  );
}

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
