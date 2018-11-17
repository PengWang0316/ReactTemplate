
import React, { Component, Fragment, Suspense } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import importedComponent from 'react-imported-component'; Use the React.lazy instead
import CssBaseline from '@material-ui/core/CssBaseline';

import LoginDialog from './LoginDialog';
import LoginDialogSnackbar from './snackbars/LoginDialogSnackbar';
import CheckCircleIconSnackbar from './snackbars/CheckCircleIconSnackbar';
import Navbar from './Navbar';
import { parserUserFromJwt } from '../actions/UserActions';
import LoginDialogContext from '../contexts/LoginDialogContext';

import {
  HOME_PAGE_URL,
} from '../config';
import LoadingAnimation from './SharedComponents/LoadingAnimation';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#9ecde7',
      main: '#6d9cb5',
      dark: '#3e6e85',
      contrastText: '#fff',
    },
    secondary: {
      light: '#497ca4',
      main: '#105075',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

/* istanbul ignore next */
// const HomePage = importedComponent(() => import(/* webpackChunkName: "HomePageContainer" */ './containers/HomePageContainer').catch(err => console.log(err)), { LoadingComponent: LoadingAnimation });
const HomePage = React.lazy(() => import('./containers/HomePageContainer'));
/**
 * The root component that contains the theme, routers, navbar, and login dialog
 */
export class App extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  /**
   * If Redux does not have user and local storage has jwt, use jwt to parser the user.
   * @param {object} props contains the component's prop value.
   * @return {null} No return.
   */
  // constructor(props) {
  //   super(props);
  //   if (!props.user._id) {
  //     const jwtMessage = localStorage.getItem(JWT_MESSAGE);
  //     if (jwtMessage) props.parserUserFromJwt(jwtMessage);
  //   }
  // }

  state = {
    isLoginDialogOpen: false,
    isLogoutSnackBarOpen: false,
    isLoginSnackbarOpen: false,
    snackbarMessage: ''
  };

  /**
   * Setting the open state to an opposite value.
   * @return {null} No return.
   */
  handleToggleDialog = () => this.setState(({ isLoginDialogOpen }) => ({ isLoginDialogOpen: !isLoginDialogOpen }));

  /**
   * Setting the snackbarOpen state to true in order to open the snackbar.
   * If message paramter is a string, set it to message state. Otherwise, set a empty message.
   * @param {string} message will be showed in the snackbar.
   * @return {null} No return.
   */
  handleToggleSnackbar = message => this.setState(({ isLoginSnackbarOpen }) => ({ isLoginSnackbarOpen: !isLoginSnackbarOpen, snackbarMessage: typeof message === 'string' ? message : '' }));

  /**
   * Set the logoutSnackbarOpen state to an opposite value.
   * @return {null} No return.
   */
  handleToggleLogoutSnackbar = () => this.setState(({ isLogoutSnackBarOpen }) => ({ isLogoutSnackBarOpen: !isLogoutSnackBarOpen }));

  /**
   * It will be pass down in a context in order to make it available for all component.
   * This method will be used when logout action is performed.
   * Clear the state isLoginDialogOpen in order to prevent the LoginDialog shows up.
   * @return {null} No return.
   */
  handleLogoutAction = () => this.setState({ isLoginDialogOpen: false, isLogoutSnackBarOpen: true });

  /**
   * The render method for the component
   * @return {jsx} Return jsx
   */
  render() {
    const { user } = this.props;
    const {
      isLogoutSnackBarOpen, isLoginDialogOpen, isLoginSnackbarOpen, snackbarMessage,
    } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          {/* Using a context to give children components access to login dialog */}
          <LoginDialogContext.Provider value={{ handleLogoutAction: this.handleLogoutAction, handleToggleLoginDialog: this.handleToggleDialog }}>
            <div>
              <CssBaseline />
              <Navbar />
              <main>
                <Suspense fallback={<LoadingAnimation />}>
                  <Switch>
                    <Route exact path={HOME_PAGE_URL} component={() => <HomePage />} />
                    <Route render={() => <p>Not Fount!</p>} />
                  </Switch>
                </Suspense>
              </main>
              {!user._id && ( // If a user has already login, do not need to load componnets below.
                <Fragment>
                  <LoginDialog open={isLoginDialogOpen} onClose={this.handleToggleDialog} onToggleSnackbar={this.handleToggleSnackbar} />
                  <LoginDialogSnackbar open={isLoginSnackbarOpen} onClose={this.handleToggleSnackbar} message={snackbarMessage} />
                </Fragment>
              )}
              <CheckCircleIconSnackbar open={isLogoutSnackBarOpen} onClose={this.handleToggleLogoutSnackbar} message="Logou Successfully" />
            </div>
          </LoginDialogContext.Provider>
        </Router>
      </MuiThemeProvider>
    );
  }
}
/* istanbul ignore next */
const mapStateToProps = state => ({
  user: state.user
});
/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  parserUserFromJwt: jwtMessage => dispatch(parserUserFromJwt(jwtMessage))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
