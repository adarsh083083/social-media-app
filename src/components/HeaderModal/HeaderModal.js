import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import BackArrowSvg from '../../assets/svgs/BackArrowSvg.svg';
import CloseArrowSvg from '../../assets/svgs/CloseSvg.svg';
import styles from './styles';
const HeaderModal = ({
  title,
  onPress,
  backArrowVisibility,
  goBack,
  closeVisibility,
}) => {
  return (
    <View style={styles.container}>
      {backArrowVisibility && (
        <TouchableOpacity onPress={goBack} style={styles.backArrowContainer}>
          <BackArrowSvg />
        </TouchableOpacity>
      )}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {closeVisibility && (
        <TouchableOpacity onPress={onPress}>
          <CloseArrowSvg />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default HeaderModal;
