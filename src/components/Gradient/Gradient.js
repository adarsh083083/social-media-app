import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default function Gradient({children}) {
  return (
    <LinearGradient
      colors={['#282a2e', '#2e2739']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      {children}
    </LinearGradient>
  );
}
