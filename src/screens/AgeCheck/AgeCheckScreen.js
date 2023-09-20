import { Alert, Text, View } from 'react-native';
import React from 'react';
import { styles } from './AgeCheckStyles';
import Header from '../../components/Header/Header';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { Colors, Constant, ScreenNames } from '../../global';
import Gradient from '../../components/Gradient/Gradient';
import IMAGES from '../../global/images';
import AppButton from '../../components/AppButton/AppButton';
import { AgeCheckHooks } from './AgeCheckHooks';
import { useNavigation } from '@react-navigation/native';

const AgeCheckScreen = () => {
  const navigation = useNavigation();

  const handleCheckAge = () => {
    navigation.navigate(ScreenNames.YOUR_IDENTITY_SCREEN);
  };
  handleAlert = () => {
    Alert.alert('Unfortunately you are not old enough to access the app.');
  };
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar
        barColor={Colors.PRIMARY_COLOR}
        isLightBar={true}
        isTopSpace={true}
      />
      <Gradient
        children={
          <View style={styles.mainContainer}>
            <View style={styles.flexContainer}>
              <Header
                backArrowVisibility={true}
                image={IMAGES.socialBloxLogo}
                title="Age Check"
                // title="Your Identity"
                // titleSteps="(1/2)"
                onPress={() => navigation.goBack()}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.suggestionFontStyle}>
                You must be over 16 years of age to view the content on this
                platform.
              </Text>
            </View>
            <View style={styles.bottomContainer}>
              <AppButton
                onPress={() => handleCheckAge()}
                btnStyle={styles.btnStyle}
                btnTextStyle={styles.btnTextStyle2}
                btnText="I am older than 16"
              />

              <AppButton
                onPress={() => handleAlert(15)}
                btnStyle={styles.btnStyle2}
                btnTextStyle={styles.btnTextStyle2}
                btnText="I am younger than 16"
              />
            </View>
          </View>
        }
      />
    </View>
  );
};

export default AgeCheckScreen;
