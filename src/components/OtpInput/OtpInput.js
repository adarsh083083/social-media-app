import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {StyleSheet, View} from 'react-native';
import {Fonts, ScreenNames} from '../../global';
import {useDispatch} from 'react-redux';
import {VerifyEmailOtpThunk} from '../../redux/asyncThunks/auth.asyncThunk';
import {useNavigation} from '@react-navigation/native';

const OtpInput = ({navigateTo, data}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleOTPInput = otpValue => {
    // Here, otpValue will contain the filled OTP value
    const otpData = {otp: otpValue, ...data};

    dispatch(VerifyEmailOtpThunk(otpData))
      .unwrap()
      .then(res => {
        if (res) {
          navigation.navigate(ScreenNames.AGE_CHECK_SCREEN);
        }
      })
      .catch(err => {});

    // You can use the OTP value for further processing or validation
  };

  return (
    <View style={styles.container}>
      <OTPInputView
        style={styles.otpContainer}
        pinCount={6}
        autoFocusOnLoad
        codeInputFieldStyle={styles.codeInput}
        onCodeFilled={handleOTPInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 50,
  },
  otpContainer: {
    width: '90%',
    height: 70,
    alignSelf: 'center',
  },
  codeInput: {
    color: 'white',
    fontFamily: Fonts.BOLD,
    borderWidth: 1,
    borderColor: '#36343D',
    backgroundColor: '#36343D',
    height: 70,
    borderRadius: 8,
    fontSize: 24,
  },
});

export default OtpInput;
