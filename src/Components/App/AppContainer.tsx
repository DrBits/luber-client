import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQuery';
import { ThemeProvider } from '../../typed-components';
import theme from '../../theme';

const AppContainer = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  return (
    <ThemeProvider theme={theme}>
      <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
    </ThemeProvider>
  );
};

export default AppContainer;
