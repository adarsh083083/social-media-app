import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Gradient from '../../../components/Gradient/Gradient';
import Header from '../../../components/Header/Header';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import styles from './styles';
import IMAGES from '../../../global/images';
import CreateAccountOtpInput from './CreateAccountOtpInput';
import {CreateAccByPhoneNoThunk} from '../../../redux/asyncThunks/auth.asyncThunk';
import {ScreenNames} from '../../../global';

const CreateAccountOtpVerify = () => {
  const maskedPart = '*****';
  const route = useRoute();
  const dispatch = useDispatch();
  const values = route?.params?.modifyData || {};
  console.log(values.phoneNumber, 'phonenumber....');
  let flag = typeof route?.params?.flag != 'undefined';
  const navigation = useNavigation();
  const initialCountdown = 60;
  const [countdown, setCountdown] = React.useState(initialCountdown);
  const [canResend, setCanResend] = React.useState(false);

  const goToBackUpCode = () => {
    navigation.navigate(ScreenNames.ENTER_BACKUP_CODE_SCREEN);
  };

  const startCountdown = () => {
    console.log(values, 'values');
    setCanResend(false);
    setCountdown(initialCountdown);
    dispatch(CreateAccByPhoneNoThunk(values))
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
                image={IMAGES.socialBloxLogo}
                onPress={() => navigation.goBack()}
              />
              <View style={styles.alignItemCenter}>
                <Text style={styles.titleTextStyle}>
                  {flag
                    ? route?.params?.flag == 2
                      ? 'Phone number'
                      : 'Authenticator'
                    : 'Phone'}
                  <Text style={styles.textStyle}>(1/2)</Text>
                </Text>
                <Text style={styles.subTitleTextStyle}>
                  {flag
                    ? route?.params?.flag == 2
                      ? 'Verify your phone number'
                      : 'Verify your authenticator app'
                    : 'Verify your Phone Number'}
                </Text>
                <Text style={styles.descriptionStyle}>
                  {flag
                    ? route?.params?.flag == 2
                      ? 'Enter the code here to verify +31612345678'
                      : 'Enter the code here to verify your account'
                    : `Enter the code we’ve send you here to verify:${'\n'} ${values.phoneNumber?.substring(
                        0,
                        5,
                      )}${maskedPart}`}
                </Text>
                <CreateAccountOtpInput data={values} />
              </View>
              <View style={styles.rowStyle}>
                <TouchableOpacity
                  onPress={startCountdown}
                  style={styles.btnStyle}>
                  <Text style={styles.btnTextStyle}>{`Send Code Again ${
                    canResend ? '' : '(' + countdown + ')'
                  }`}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={goToBackUpCode}
                  style={styles.btnStyle}>
                  <Text style={styles.btnTextStyle}>Backup Codes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default CreateAccountOtpVerify;
