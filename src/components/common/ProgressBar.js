import React from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';

const ProgressBar = () => (
  <View style={styles.progressBar}>
    <ActivityIndicator size="large" color={'#000000'}/>
  </View>
);

export default ProgressBar;
