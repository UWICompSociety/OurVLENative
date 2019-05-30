import React from 'react';
import {
  View, Text, StyleSheet, TextInput, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import ProgressCircle from 'react-native-progress/Circle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
  },
  textContainer: {
    marginTop: 250,
  },
  getStartedText: {
    fontSize: 30,
    color: 'rgba(255,255,255, 1)',
    lineHeight: 40,
    textAlign: 'center',
  },
});

export const LoginView = ({
  username,
  password,
  handlePasswordInput,
  handleUserNameInput,
  logIn,
  loading,
  loginError,
}) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.getStartedText}>OurVLE</Text>
    </View>
    {loading ? (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ProgressCircle size={50} color="white" borderWidth={0.8} indeterminate />
      </View>
    ) : (
      <View style={{ marginTop: 40, marginLeft: 25, marginRight: 25 }}>
        <TextInput
          name="username"
          style={{ height: 40, borderColor: 'white', borderBottomWidth: 0.5 }}
          onChangeText={handleUserNameInput}
          placeholder="Username"
          disabled={loading}
          value={username}
        />
        <TextInput
          style={{
            marginTop: 20,
            height: 50,
            borderColor: 'white',
            borderBottomWidth: 0.5,
          }}
          disabled={loading}
          name="password"
          onChangeText={handlePasswordInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          error={loginError}
        />
        <View style={{ marginTop: 40 }}>
          <Button
            style={{ marginTop: 40 }}
            onPress={logIn}
            title="Log In"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>{loginError}</Text>
        </View>
      </View>
    )}
  </View>
);

LoginView.defaultProps = {
  username: '',
  password: '',
  handleUserNameInput: () => {},
  handlePasswordInput: () => {},
  logIn: false,
  loading: false,
  loginError: null,
};

LoginView.propTypes = {
  loading: PropTypes.bool,
  username: PropTypes.string,
  password: PropTypes.string,
  handleUserNameInput: PropTypes.func,
  handlePasswordInput: PropTypes.func,
  logIn: PropTypes.func,
  loginError: PropTypes.string,
};

export default LoginView;
