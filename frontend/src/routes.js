import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import LogoutPage from './pages/LogOutPage';
import ErrorPage from './pages/ErrorPage';
import PrivateRoute from './components/Common/PrivateRoute';  // Ensure this component is created as needed

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/logout" component={LogoutPage} />
      <PrivateRoute path="/profile" component={ProfilePage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
}

export default Routes;
