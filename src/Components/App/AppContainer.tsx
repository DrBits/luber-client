import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import reset from 'styled-reset';
import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQuery';
import { ThemeProvider, injectGlobal } from '../../typed-components';
import theme from '../../theme';

injectGlobal`
  ${reset}
`;

const AppContainer = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  return (
    <ThemeProvider theme={theme}>
      <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
    </ThemeProvider>
  );
};

export default AppContainer;
