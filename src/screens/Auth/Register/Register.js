import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Gradient from '../../../components/Gradient/Gradient';
import Header from '../../../components/Header/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import IMAGES from '../../../global/images';
import OtpInput from '../../../components/OtpInput/OtpInput';
import styles from '../Register/styles';
import {ScreenNames} from '../../../global';
import {CreateAccByEmailThunk} from '../../../redux/asyncThunks/auth.asyncThunk';
import {useDispatch} from 'react-redux';
import {BallIndicator} from 'react-native-indicators';

const Register = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const values = route?.params?.data || {};
  const [loading, setLoading] = useState(false);

  let flag = typeof route?.params?.flag != 'undefined';
  const navigation = useNavigation();
  const initialCountdown = 60;
  const [countdown, setCountdown] = React.useState(initialCountdown);
  const [canResend, setCanResend] = React.useState(false);

  const goToBackUpCode = () => {
    navigation.navigate(ScreenNames.ENTER_BACKUP_CODE_SCREEN);
  };

  const startCountdown = () => {
    setLoading(true);
    setCanResend(false);
    setCountdown(initialCountdown);
    dispatch(CreateAccByEmailThunk(values))
      .unwrap()
      .then(res => {
        setLoading(false);
      });
    setLoading(false);
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
    <>
      {loading ? (
        <View style={styles.indicatorStyle}>
          <BallIndicator color={'white'} />
        </View>
      ) : (
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
                    // titleEmail="Email"
                    // titleSteps="(1/2)"
                    onPress={() => navigation.goBack()}
                  />
                  <View style={styles.alignItemCenter}>
                    <Text style={styles.titleTextStyle}>
                      {flag
                        ? route?.params?.flag == 2
                          ? 'Phone number'
                          : 'Authenticator'
                        : 'Email'}{' '}
                      <Text style={styles.textStyle}>(1/2)</Text>
                    </Text>
                    <Text style={styles.subTitleTextStyle}>
                      {flag
                        ? route?.params?.flag == 2
                          ? 'Verify your phone number'
                          : 'Verify your authenticator app'
                        : 'Verify your e-mail'}
                    </Text>
                    <Text style={styles.descriptionStyle}>
                      {flag
                        ? route?.params?.flag == 2
                          ? 'Enter the code here to verify +31612345678'
                          : 'Enter the code here to verify your account'
                        : `Enter the code we’ve send you here to verify: ${values?.email}`}
                    </Text>
                    <OtpInput data={values} />
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
      )}
    </>
  );
};

export default Register;
