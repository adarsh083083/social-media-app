import { Animated, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {ScreenNames} from '../../global/index';
import {useNavigation} from '@react-navigation/native';

const BackUpCodeHooks = () => {
  // Variable
  const navigation = useNavigation();

  // State
  // const [termsAndConditionVisibilty, setTermsAndConditionVisibilty] = React.useState(false);
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const goToProfile = () => {
    navigation.navigate(ScreenNames.CHOOSEPROFILE);
  };
  return {
    toggleCheckBox,
    setToggleCheckBox,
    goToProfile,
  };
};

export { BackUpCodeHooks };
