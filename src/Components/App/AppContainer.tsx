import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQuery';

const AppContainer = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  return <AppPresenter isLoggedIn={data.auth.isLoggedIn} />;
};

export default AppContainer;
