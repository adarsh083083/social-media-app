import {Text, View, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from './SignInStyles';
import Header from '../../../components/Header/Header';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import {Colors, ScreenNames} from '../../../global';
import Gradient from '../../../components/Gradient/Gradient';
import IMAGES from '../../../global/images';
import AppButton from '../../../components/AppButton/AppButton';
import MyTextInput from '../../../components/TextInput/MyTextInput';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import {Formik} from 'formik';
import {LoginByEmailThunk} from '../../../redux/asyncThunks/auth.asyncThunk';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const goToOtpVerification = values => {
    navigation.navigate(ScreenNames.OTP_VERIFICATION, {
      data: values,
    });
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
  });

  // Set initial form values using state
  const [initialValues, setIntialValues] = useState({
    email: '',
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
          dispatch(LoginByEmailThunk(values))
            .unwrap()
            .then(res => {
              if (res) {
                goToOtpVerification(values);
              }
            })
            .catch(err => {
              // Alert.alert('Alert', 'Internal Server Error')
            });
        }}>
        {({values, handleChange, errors, handleSubmit, handleBlur}) => (
          <Gradient
            children={
              <ScrollView style={{flex: 1, height: '100%'}}>
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
                    <MyTextInput
                      label={
                        <Text style={{color: Colors.WHITE}}>
                          Enter your e-mail
                        </Text>
                      }
                      mode="flat"
                      activeUnderlineColor={'#36343D'}
                      textColor={'white'}
                      style={styles.textInput}
                      cursorColor={Colors.WHITE}
                      value={values?.email}
                      onChangeText={handleChange('email')}
                      onBlur={() => handleBlur('email')}
                    />
                    {errors?.email ? (
                      <Text style={styles.formikError}>{errors.email}</Text>
                    ) : null}
                  </View>
                  <View style={styles.bottomContainer}>
                    <AppButton
                      btnStyle={styles.btnStyle3}
                      btnTextStyle={styles.btnTextStyle2}
                      btnText="Sign-in With Phone Number"
                      onPress={() =>
                        navigation.navigate(ScreenNames.SIGNIN_WITH_PHONE, {
                          flag: 1,
                        })
                      }
                    />
                    <AppButton
                      btnStyle={styles.btnStyle2}
                      btnTextStyle={styles.btnTextStyle2}
                      btnText="Request sign-in code"
                      onPress={handleSubmit}
                    />
                  </View>
                </View>
              </ScrollView>
            }
          />
        )}
      </Formik>
    </View>
  );
};

export default SignInScreen;
