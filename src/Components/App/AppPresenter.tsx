import React from 'react';
import PropTypes from 'prop-types';

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
  <span>{isLoggedIn ? 'you are in' : 'you are out'}</span>
);

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppPresenter;
