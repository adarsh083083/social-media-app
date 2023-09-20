import { View, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import BackArrowSvg from '../../assets/svgs/BackArrowSvg.svg'
import Setting from '../../assets/svgs/MenuSvg.svg'

import { useNavigation } from '@react-navigation/native';
const GlobalHeader = ({
  headerName,
  leftSvg = <BackArrowSvg />,
  rightSvg = <Setting />
}) => {
  const navigation = useNavigation()
  const goBack = () => {
    navigation.goBack()
  }


  const leftSvgEvent = () => {
    goBack()
  }

  const rightSvgEvent = () => {

  }
  return (
    <View style={styles.headerContainer}>
      {leftSvg &&
        <TouchableOpacity onPress={leftSvgEvent} style={styles.leftSvgContainer}>
          {leftSvg}
        </TouchableOpacity>
      }
      <View style={styles.alignContainer}>
        <Text style={styles.headerFontStyle}>{headerName}</Text>
      </View>
      {
        <TouchableOpacity onPress={rightSvgEvent} style={rightSvg ? styles.margRight : styles.rightSvgContainer}>
          {rightSvg && rightSvg}
        </TouchableOpacity>
      }
    </View>

  );
};
export default GlobalHeader;
