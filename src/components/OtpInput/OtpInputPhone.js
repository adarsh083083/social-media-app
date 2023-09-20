import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {StyleSheet, View} from 'react-native';
import {Fonts, ScreenNames} from '../../global';
import {useDispatch} from 'react-redux';
import {LoginByPhoneNoThunk} from '../../redux/asyncThunks/auth.asyncThunk';
import {useNavigation} from '@react-navigation/native';

const OtpInputPhone = ({navigateTo, data}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleOTPInput = otpValue => {
    const modifyValue = {...data, otp: otpValue};
    dispatch(LoginByPhoneNoThunk(modifyValue))
      .unwrap()
      .then(res => {
        if (res) {
          navigation.navigate(ScreenNames.YOUR_WALLET);
        }
      })
      .catch(err => {});

    // You can use the OTP value for further processing or validation
  };

  return (
    <View style={styles.container}>
      <OTPInputView
        // ref={otpRef}
        style={styles.otpContainer}
        pinCount={6}
        // code={this.state.code} //You can supply this prop or not.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.codeInput}
        // onCodeFilled={navigateTo}
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

export default OtpInputPhone;
