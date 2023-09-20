import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const EmailOtpInput = ({data}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleOTPInput = otpValue => {
    const otpData = {otp: otpValue, ...data};
    // dispatch(EmailOtpVerifyThunk(otpData))
    //   .unwrap()
    //   .then(res => {
    //     if (res) {
    //       navigation.navigate(ScreenNames.AUTHENTICATOR_APP);
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

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

export default EmailOtpInput;
