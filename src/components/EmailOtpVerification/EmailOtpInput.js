import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {EmailOtpVerifyThunk} from '../../redux/asyncThunks/auth.asyncThunk';
import {styles} from './styles';
import {ScreenNames} from '../../global';

const EmailOtpInput = ({data}) => {
  const goToYourWallet = () => {
    navigation.navigate(ScreenNames.YOUR_WALLET);
  };
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleOTPInput = otpValue => {
    const otpData = {otp: otpValue, ...data};
    dispatch(EmailOtpVerifyThunk(otpData))
      .unwrap()
      .then(res => {
        if (res) {
          goToYourWallet();
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

export default EmailOtpInput;
