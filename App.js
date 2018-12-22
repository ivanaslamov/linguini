import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import Bar from './Bar';

import Bar from './components/bar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Bar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
