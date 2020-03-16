import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useQuery } from '@apollo/react-hooks';
import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQuery';
import { ThemeProvider } from '../../typed-components';
import theme from '../../theme';

import 'react-toastify/dist/ReactToastify.min.css';

const AppContainer = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
      </ThemeProvider>
      <ToastContainer draggable position={'bottom-center'} />
    </>
  );
};

export default AppContainer;
