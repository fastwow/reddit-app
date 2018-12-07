import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Favorites extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
});

export default Favorites;
