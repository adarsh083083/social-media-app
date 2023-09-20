import { Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import { Colors, ScreenNames } from '../../../global';
import IMAGES from '../../../global/images';
import AppButton from '../../../components/AppButton/AppButton';
import MyTextInput from '../../../components/TextInput/MyTextInput';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CountryCodeZip from '../../../components/CountryCodeZip/CountryCodeZip';
import { styles } from './Styles';
import { SigninWithPhoneHook } from './SigninWithPhoneHook';
import { VerifyLoginByPhoneOtpThunk } from '../../../redux/asyncThunks/auth.asyncThunk';
import Gradient from '../../../components/Gradient/Gradient';

const SignWithPhone = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const validationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits')
      .required('Mobile number is required'),
  });

  const {
    countryCodeVisibility,
    countryCode,
    onChangeSearchText,
    searchData,
    setSearchData,
    selectedSearchData,
    setSelectedSearchData,
    toggleCountryCode,
  } = SigninWithPhoneHook();
  const goToOtpVerification = values => {
    navigation.navigate(ScreenNames.LOGIN_PHONE_OTP_VERIFY, {
      values,
    });
  };

  const [initialValues, setIntialValues] = useState({
    phoneNumber: '',
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
          values = { ...values, countryCode: selectedSearchData.dial_code };
          dispatch(VerifyLoginByPhoneOtpThunk(values))
            .unwrap()
            .then(res => {
              if (res) {
                goToOtpVerification(values);
              }
            })
            .catch(err => {
              console.log(err, 'error');
            });
        }}>
        {({ values, handleChange, errors, handleSubmit, handleBlur }) => (
          <Gradient
            children={
              <View style={styles.mainContainer}>
                <View style={styles.flexContainer}>
                  <Header
                    backArrowVisibility={true}
                    image={IMAGES.socialBloxLogo}
                    title="Sign-in to SocialBlox"
                    onPress={() => navigation.goBack()}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <View style={styles.flexDirectionContainer}>
                    <MyTextInput
                      keyboardType={'phone-pad'}
                      label={
                        <Text style={{ color: Colors.WHITE }}>County code</Text>
                      }
                      mode="flat"
                      activeUnderlineColor={'#36343D'}
                      textColor={'white'}
                      style={styles.countryInputStyle}
                      cursorColor={Colors.WHITE}
                      onChangeText={onChangeSearchText}
                      value={
                        searchData.length
                          ? countryCode
                          : selectedSearchData.dial_code
                      }
                    />
                    <MyTextInput
                      label={
                        <Text style={{ color: Colors.WHITE }}>Phone number</Text>
                      }
                      mode="flat"
                      keyboardType={'phone-pad'}
                      activeUnderlineColor={'#36343D'}
                      maxLength={10}
                      textColor={'white'}
                      style={styles.textInput}
                      cursorColor={Colors.WHITE}
                      value={values?.phoneNumber}
                      onChangeText={handleChange('phoneNumber')}
                      onBlur={() => handleBlur('phoneNumber')}
                    />
                  </View>
                  {errors?.phoneNumber ? (
                    <Text
                      style={styles.formikError}>
                      {errors?.phoneNumber}
                    </Text>
                  ) : null}
                  {countryCodeVisibility &&
                    searchData.length > 0 &&
                    countryCode.length != 0 && (
                      <View style={styles.positionContainer}>
                        <CountryCodeZip
                          countryCode={countryCode}
                          searchData={searchData}
                          onPress={item => {
                            setSelectedSearchData(item);
                            setSearchData('');
                            toggleCountryCode();
                          }}
                          toggleCountryCode={toggleCountryCode}
                        />
                      </View>
                    )}
                </View>
                <View style={styles.bottomContainer}>
                  <AppButton
                    // onPress={goToOtp}
                    btnStyle={styles.btnStyle2}
                    btnTextStyle={styles.btnTextStyle2}
                    btnText="Request sign-in code"
                    onPress={handleSubmit}
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
export default SignWithPhone;
