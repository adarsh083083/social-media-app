import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import BackArrowSvg from '../../assets/svgs/BackArrowSvg.svg';
import {useNavigation} from '@react-navigation/native';
import {Colors, Constant, Fonts} from '../../global';

const Header = props => {
  const {titleEmail, titleSteps, titleStepNo} = props;
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.headerContainer}>
      {props.backArrowVisibility && (
        <TouchableOpacity onPress={goBack} style={styles.backArrowContainer}>
          <BackArrowSvg />
        </TouchableOpacity>
      )}
      <View style={styles.alignContainer}>
        <View style={styles.mainContainer}>
          <Image
            resizeMode="center"
            source={props.image}
            style={styles.logoStyle}
          />
        </View>
        <Text style={styles.titleStyle}>{props.title}</Text>
        {!!props.titleSteps && !!props.titleEmail ? (
          <View style={styles.stepsContainer}>
            <Text style={styles.titleEmail}>{titleEmail}</Text>
            <Text style={styles.titleSteps}> {titleSteps}</Text>
            <Text style={styles.titleStepNo}>{titleStepNo}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};
export default Header;
