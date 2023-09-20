import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {VerifyPhoneNoOtpThunk} from '../../../redux/asyncThunks/auth.asyncThunk';
import {Fonts, ScreenNames} from '../../../global';

const CreateAccountOtpInput = ({navigateTo, data}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleOTPInput = otpValue => {
    const modifyValue = {...data, otp: otpValue};
    dispatch(VerifyPhoneNoOtpThunk(modifyValue))
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

export default CreateAccountOtpInput;
