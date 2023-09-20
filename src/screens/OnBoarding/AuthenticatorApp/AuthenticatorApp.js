import {View, Text} from 'react-native';
import React from 'react';
import SocialBloxLock from '../../../assets/svgs/socialblox_lock_authenticator.svg';
import IMAGES from '../../../global/images';
import Gradient from '../../../components/Gradient/Gradient';
import Header from '../../../components/Header/Header';
import styles from './AuthenticatorStyles';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import {Colors, ScreenNames} from '../../../global';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../../../components/AppButton/AppButton';
const AuthenticatorApp = () => {
  const navigation = useNavigation();
  const goToAuthenticatorOtp = () => {
    navigation.navigate(ScreenNames.AUTHENTICATOR_ACCOUNT);
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
                imageBack={IMAGES.BackArrow}
                image={IMAGES.socialBloxLogo}
                onPress={() => navigation.goBack()}
              />
              <View style={styles.authenticatorContainer}>
                <Text style={styles.authenticatorTitle}>Authenticator App</Text>
              </View>
              <View style={styles.imageContainer}>
                <SocialBloxLock />
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>
                  To make your account extra secure, we work with an
                  authenticator app as a 2-step verification. Open your
                  authenticator app.
                </Text>
              </View>
              <View style={styles.btnVerify}>
                <AppButton
                  onPress={goToAuthenticatorOtp}
                  btnStyle={styles.btnStyle}
                  btnTextStyle={styles.btnTextStyle2}
                  btnText="Open authenticator app"
                />
                <AppButton
                  onPress={null}
                  btnStyle={styles.btnStyle2}
                  btnTextStyle={styles.btnTextStyle2}
                  btnText="Other options"
                />
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default AuthenticatorApp;
