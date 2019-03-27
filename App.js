import React from 'react';
import {
  Platform, StyleSheet, View, StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import configureStore from './src/store/configureStore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

function getInitialState() {
  return {
    auth: {
      token: '',
    },
  };
}
export default class App extends React.Component {
  render() {
    const store = configureStore(getInitialState());
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
