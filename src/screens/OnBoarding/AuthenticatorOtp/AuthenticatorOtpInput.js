import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {StyleSheet, View} from 'react-native';
import {Fonts} from '../../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../../global/constant';

const AuthenticatorOtpInput = ({navigateTo, data}) => {
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
        onCodeFilled={navigateTo}
        // onCodeFilled={handleOTPInput}
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
    height: CHANGE_BY_MOBILE_DPI(56),
    alignSelf: 'center',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(28),
  },
  codeInput: {
    color: 'white',
    fontFamily: Fonts.BOLD,
    borderWidth: CHANGE_BY_MOBILE_DPI(1),
    borderColor: '#36343D',
    backgroundColor: '#36343D',
    height: CHANGE_BY_MOBILE_DPI(56),
    borderRadius: CHANGE_BY_MOBILE_DPI(8),
    fontSize: Fonts.FONT_SIZE_24,
  },
});

export default AuthenticatorOtpInput;
