import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import CrossImage from '../../../assets/svgs/addIcon.svg';
import styles from './styles';
const ItemAddRequirement = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.iconContainer}>
          <CrossImage />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Set a Requirement</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemAddRequirement;
