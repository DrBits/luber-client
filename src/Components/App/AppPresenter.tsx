import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import AddPlace from '../../Routes/AddPlace';
import EditAccount from '../../Routes/EditAccount';
import Home from '../../Routes/Home';
import OutHome from '../../Routes/OutHome';
import PhoneLogin from '../../Routes/PhoneLogin';
import Places from '../../Routes/Places';
import Ride from '../../Routes/Ride';
import Settings from '../../Routes/Settings';
import VerifyPhone from '../../Routes/VerifyPhone';
import SocialLogin from '../../Routes/SocialLogin';
import FindAddress from '../../Routes/FindAddress';

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </BrowserRouter>
);

const LoggedOutRoutes: React.SFC = () => (
  <Switch>
    <Route path={'/'} exact component={OutHome} />
    <Route path={'/phone-login'} component={PhoneLogin} />
    <Route path={'/verify-phone/:number'} component={VerifyPhone} />
    <Route path={'/social-login'} component={SocialLogin} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route path={'/'} exact component={Home} />
    <Route path={'/ride'} exact component={Ride} />
    <Route path={'/edit-account'} exact component={EditAccount} />
    <Route path={'/settings'} exact component={Settings} />
    <Route path={'/places'} exact component={Places} />
    <Route path={'/app-place'} exact component={AddPlace} />
    <Route path={'/find-address'} exact component={FindAddress} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppPresenter;
