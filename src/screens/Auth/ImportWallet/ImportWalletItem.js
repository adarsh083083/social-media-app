import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
 
const ImportWalletItem = ({ item }) => {
  return (
    <View style={styles.containerList}>
      <View style={styles.innerContainer}>
        <View style={styles.positionContainer}>
          <Text style={styles.titleNoStyle}>{item.id}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{item.title}</Text>
        </View>
      </View>
    </View>
  );
};

export default ImportWalletItem;
