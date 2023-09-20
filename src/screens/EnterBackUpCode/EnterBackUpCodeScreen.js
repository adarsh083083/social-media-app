import { Text, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './EnterBackUpCodeStyle';
import Header from '../../components/Header/Header';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { Colors, ScreenNames } from '../../global';
import Gradient from '../../components/Gradient/Gradient';
import IMAGES from '../../global/images';
import AppButton from '../../components/AppButton/AppButton';
import MyTextInput from '../../components/TextInput/MyTextInput';
import { EnterBackUpCodeHooks } from './EnterBackUpCodeHooks';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik } from 'formik';
import { VerifyBackupCodeThunk } from '../../redux/asyncThunks/auth.asyncThunk';

const EnterBackUpCodeScreen = () => {
  const route = useRoute();
  const EmailValue = route?.params?.values || {};
  const navigation = useNavigation();
  const { toggleCheckBox, setToggleCheckBox, goToAuthenticator } =
    EnterBackUpCodeHooks();
  const [visibility, setVisibility] = React.useState(false);
  const toggle = () => {
    setVisibility(!visibility);
  };
  const navigateToPrivateProfile = () => {
    navigation.navigate(ScreenNames.PRIVATE_PROFILE_SCREEN);
  };
  const goToWalletScreen = () => {
    navigation.navigate(ScreenNames.YOUR_WALLET);
  };

  const validationSchema = yup.object().shape({
    otpValue: yup.string().required('Backup Code is required'),
  });

  const dispatch = useDispatch();
  const [initialValues, setIntialValues] = useState({
    otpValue: '',
  });

  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar
        barColor={Colors.PRIMARY_COLOR}
        isLightBar={true}
        isTopSpace={true}
      />
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={values => {
          const modifyValues = { ...values, email: EmailValue.email };
          dispatch(VerifyBackupCodeThunk(modifyValues))
            .unwrap()
            .then(res => {
              console.log(res, 'backupcode response');
              if (res.data.statusCode === 200) {
                goToWalletScreen()
              } else if (res.data.statusCode === 400) {
                Alert.alert(res.data.message, 'Email allready used');
              }
            })
            .catch(err => {
              console.log(err);
            });
        }}>
        {({ values, handleChange, errors, handleSubmit, handleBlur }) => (
          <Gradient
            children={
              <View style={styles.mainContainer}>
                <View style={styles.flexContainer}>
                  <Header
                    image={IMAGES.socialBloxLogo}
                    title="Enter backup code"
                    onPress={() => navigation.goBack()}
                  />
                  <Text style={styles.yourIdentityDescriptionStyle}>
                    Enter one of the eight-digit backup codes provided when you
                    set up two-factor authentication.
                  </Text>
                  <Text style={styles.yourIdentityDescriptionStyle}>
                    It may be saved as a screenshot on your phone.
                  </Text>
                </View>
                <View style={styles.inputContainer}>
                  <MyTextInput
                    label={
                      <Text style={{ color: Colors.WHITE }}>
                        Enter your backup code
                      </Text>
                    }
                    mode="flat"
                    activeUnderlineColor={'#36343D'}
                    textColor={'white'}
                    style={styles.textInput}
                    cursorColor={Colors.WHITE}
                    value={values?.otpValue}
                    onChangeText={handleChange('otpValue')}
                    onBlur={() => handleBlur('otpValue')}
                  />
                  {errors?.otpValue ? (
                    <Text style={styles.formikError}>{errors.otpValue}</Text>
                  ) : null}
                </View>
                <View style={styles.bottomContainer}>
                  <AppButton
                    // onPress={toggle}
                    onPress={handleSubmit}
                    btnStyle={styles.btnStyle2}
                    btnTextStyle={styles.btnTextStyle2}
                    btnText="Continue"
                  />
                </View>
              </View>
            }
          />
        )}
      </Formik>
    </View>
  );
};

export default EnterBackUpCodeScreen;
