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
    loginError: null,
    loading: false,
  };

  logIn = async () => {
    // validate username and password input
    // make request to api
    // if succesfull set token and go to home page
    // console.log('hello');
    const { username } = this.state;
    const { password } = this.state;

    this.setState({
      loginError: '',
    });

    if (username === '' || password === '') {
      this.setState({
        loginError: 'Please fill all fields',
      });
    } else {
      this.setState({
        loading: true,
      });
      fetch(
        `http://ourvle.mona.uwi.edu/login/token.php?username=${username}&password=${password}&service=moodle_mobile_app`,
      )
        .then(response => response.json())
        .then((responseJson) => {
          this.setState({
            loading: false,
          });
          if (responseJson.error) {
            this.setState({
              loginError: responseJson.error,
            });
          } else {
            this.setToken(responseJson);
            this.goToHome();
          }
        })
        .catch(() => {
          this.setState({
            loginError: 'Error occured',
          });
        });
    }
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
    const {
      displayText, username, password, loading, loginError,
    } = this.state;
    return (
      <LoginView
        displayText={displayText}
        username={username}
        password={password}
        logIn={this.logIn}
        loading={loading}
        handlePasswordInput={this.handlePasswordInput}
        handleUserNameInput={this.handleUserNameInput}
        loginError={loginError}
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
