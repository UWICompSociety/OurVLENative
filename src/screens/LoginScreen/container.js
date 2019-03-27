import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LoginView } from './View';
import loginUser from '../../reducers/auth/authActions';

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

class Container extends React.Component {
  state = {
    username: '',
    password: '',
  };

  logIn = () => {
    // validate username and password input
    // make request to api
    // if succesfull set token and go to home page
  };

  goToHome = () => {
    const { navigation } = this.props;
    navigation.navigate('Home'); // navigate to home screen
  };

  handlePasswordInput = (text) => {
    this.setState({
      password: text,
    });
  };

  setToken = (token) => {
    const { dispatch } = this.props;
    dispatch(loginUser(token));
  };

  getToken = () => {
    const { auth } = this.props;
    return auth.token;
  };

  handleUserNameInput = (text) => {
    this.setState({
      username: text,
    });
  };

  render() {
    const { displayText, username, password } = this.state;
    return (
      <LoginView
        displayText={displayText}
        username={username}
        password={password}
        logIn={this.logIn}
        handlePasswordInput={this.handlePasswordInput}
        handleUserNameInput={this.handleUserNameInput}
      />
    );
  }
}

Container.defaultProps = {
  auth: {},
  dispatch: () => {},
};
Container.propTypes = {
  navigation: PropTypes.any.isRequired,
  auth: PropTypes.object,
  dispatch: PropTypes.func,
};
export const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);

export default LoginScreen;
