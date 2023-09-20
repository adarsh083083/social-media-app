import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const CustomHeader = ({title, onBackPress, style, backImage}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Image source={backImage} style={style} />
      </TouchableOpacity>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default CustomHeader;
