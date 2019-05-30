import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
  },
});

export const HomeView = () => (
  <View style={styles.container}>
    <View>
      <Text>Hello</Text>
    </View>
    <Text style={{ color: 'white' }}>This is the home screen</Text>
  </View>
);

export default HomeView;
