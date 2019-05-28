import React from 'react';
import {
  View, Text, StyleSheet, TextInput, Button,
} from 'react-native';
import PropTypes from 'prop-types';

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
}) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.getStartedText}>OurVLE</Text>
    </View>
    <TextInput
      name="username"
      style={{ height: 40 }}
      onChangeText={handleUserNameInput}
      placeholder="Username"
      value={username}
    />
    <TextInput
      name="password"
      style={{ height: 40 }}
      onChangeText={handlePasswordInput}
      placeholder="Password"
      secureTextEntry
      value={password}
    />
    <Button
      onPress={logIn}
      title="Log In"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  </View>
);

LoginView.defaultProps = {
  username: '',
  password: '',
  handleUserNameInput: () => {},
  handlePasswordInput: () => {},
  logIn: '',
};

LoginView.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  handleUserNameInput: PropTypes.func,
  handlePasswordInput: PropTypes.func,
  logIn: PropTypes.func,
};

export default LoginView;
