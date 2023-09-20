import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../screens/OnBoarding/YourSeedPhrase/YourSeedPhraseStyles';

const ItemYourSeed = ({item}) => {
  return (
    <TouchableOpacity style={styles.containerList}>
      <View style={styles.innerContainer}>
        <View style={styles.positionContainer}>
          <Text style={styles.titleNoStyle}>{item.id}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemYourSeed;
