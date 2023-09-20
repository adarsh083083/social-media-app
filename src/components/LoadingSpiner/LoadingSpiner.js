import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {styles} from './styles';
 
const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        style={{transform: [{scaleX: 2}, {scaleY: 2}]}}
        color="#ac3df5"
      />
    </View>
  );
};

export default LoadingSpinner;
