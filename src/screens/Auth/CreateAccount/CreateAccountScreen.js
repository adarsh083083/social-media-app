import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './CreateAccountStyles';
import Header from '../../../components/Header/Header';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import {Colors, Constant, CountryCode, ScreenNames} from '../../../global';
import Gradient from '../../../components/Gradient/Gradient';
import IMAGES from '../../../global/images';
import AppButton from '../../../components/AppButton/AppButton';
import { CreateAccountHooks } from './CreateAccountHooks';
import MyTextInput from '../../../components/TextInput/MyTextInput';
import * as yup from 'yup';
import {CreateAccByPhoneNoThunk} from '../../../redux/asyncThunks/auth.asyncThunk';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {CountryCodeList} from '../../../components/CountryCodeList/CountryCodeList';
import {Formik} from 'formik';

const CreateAccountScreen = () => {
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
    setCountryCode,
    onChangeSearchText,
    searchData,
    setSearchData,
    selectedSearchData,
    setSelectedSearchData,
    toggleCountryCode,
    goToOtp,
  } = CreateAccountHooks();
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
          modifyData = {...values, countryCode: selectedSearchData.dial_code};
          dispatch(CreateAccByPhoneNoThunk(modifyData))
            .unwrap()
            .then(res => {
              if (res) {
                navigation.navigate(ScreenNames.CREATE_ACCOUNT_OTP_VERIFY, {
                  modifyData,
                });
              }
            })
            .catch(err => { });
        }}>
        {({values, handleChange, errors, handleSubmit, handleBlur}) => (
          <Gradient
            children={
              <View style={styles.mainContainer}>
                <View style={styles.flexContainer}>
                  <Header
                    backArrowVisibility={true}
                    image={IMAGES.socialBloxLogo}
                    title="Create account"
                    onPress={() => navigation.goBack()}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <View style={styles.flexDirectionContainer}>
                    <MyTextInput
                      keyboardType={'phone-pad'}
                      label={
                        <Text style={{color: Colors.WHITE}}>County code</Text>
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
                        <Text style={{color: Colors.WHITE}}>Phone number</Text>
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
                    <Text style={styles.formikError}>
                      {errors?.phoneNumber}
                    </Text>
                  ) : null}
                  {countryCodeVisibility &&
                    searchData.length > 0 &&
                    countryCode.length != 0 && (
                      <View style={styles.positionContainer}>
                        <CountryCodeList
                          countryCode={CountryCode}
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
                    btnText="Next"
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
export default CreateAccountScreen;
// {errors?.phoneNumber ? (
//   <Text style={{color:'red'}}>
//     {errors.phoneNumber}hellollllllllllllllll
//   </Text>
// ) : null}
