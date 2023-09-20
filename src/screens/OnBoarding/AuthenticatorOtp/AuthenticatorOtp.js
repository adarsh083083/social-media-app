import React, {useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import {LoginByPhoneNoThunk} from '../../../redux/asyncThunks/auth.asyncThunk';
import AuthenticatorOtpInput from './AuthenticatorOtpInput';
import IMAGES from '../../../global/images';
import styles from './styles';
import Header from '../../../components/Header/Header';
import Gradient from '../../../components/Gradient/Gradient';
import {Colors, ScreenNames} from '../../../global';

const AuthenticatorOtp = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const values = route?.params?.values || {};
  let flag = typeof route?.params?.flag != 'undefined';
  const navigation = useNavigation();
  const initialCountdown = 60;
  const [countdown, setCountdown] = React.useState(initialCountdown);
  const [canResend, setCanResend] = React.useState(false);

  const goToBackUpCode = () => {
    navigation.navigate(ScreenNames.ENTER_BACKUP_CODE_SCREEN);
  };
  const goToAuthenticatorApp = () => {
    navigation.navigate(ScreenNames.AUTHENTICATOR_MANUALLY);
  };

  const startCountdown = () => {
    setCanResend(false);
    setCountdown(initialCountdown);
    dispatch(LoginByPhoneNoThunk(values))
      .unwrap()
      .then(res => {});
  };

  React.useEffect(() => {
    let interval;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else {
      setCanResend(true);
      clearInterval(interval);
      // const currentValues = valuesRef.current;
    }
    return () => clearInterval(interval);
  }, [countdown]);
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
                <Text style={styles.authenticatorTitle}>Authenticator</Text>
                <Text style={styles.titleSteps}> (2/2)</Text>
              </View>
              <View style={styles.alignItemCenter}>
                <Text style={styles.subTitleTextStyle}>
                  Verify your authenticator app
                </Text>
                <Text style={styles.descriptionStyle}>
                  Enter the code here to verify your account
                </Text>
                <AuthenticatorOtpInput
                  data={values}
                  navigateTo={goToAuthenticatorApp}
                />
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default AuthenticatorOtp;
