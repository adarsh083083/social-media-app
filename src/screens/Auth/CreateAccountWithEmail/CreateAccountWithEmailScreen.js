import {Alert, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './CreateAccountWithEmailStyles';
import Header from '../../../components/Header/Header';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import {Colors, ScreenNames} from '../../../global';
import Gradient from '../../../components/Gradient/Gradient';
import IMAGES from '../../../global/images';
import AppButton from '../../../components/AppButton/AppButton';
import {CreateAccountWithEmailHooks} from './CreateAccountWithEmailHooks';
import MyTextInput from '../../../components/TextInput/MyTextInput';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {CreateAccByEmailThunk} from '../../../redux/asyncThunks/auth.asyncThunk';
const CreateAccountWithEmailScreen = () => {
  const {goToSignUp} = CreateAccountWithEmailHooks();
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
          console.log('before response');
          dispatch(CreateAccByEmailThunk(values))
            .unwrap()
            .then(res => {
              console.log(res, 'rson');
              if (res.data.statusCode === 200) {
                // Navigate to REGISTER screen on successful response
                navigation.navigate(ScreenNames.REGISTER, {data: values});
              } else if (res.data.statusCode === 400) {
                Alert.alert(res.data.message, 'Email allready used');
              }
            })
            .catch(err => {
              console.log('error', err);
            });
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
                  <MyTextInput
                    label={
                      <Text style={{color: Colors.WHITE}}>E-mailaddress</Text>
                    }
                    mode="flat"
                    activeUnderlineColor={Colors.GRAY}
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
                    onPress={goToSignUp}
                    btnStyle={styles.btnStyle}
                    btnTextStyle={styles.btnTextStyle2}
                    btnText="SignUp With Phone Number"
                  />
                  <AppButton
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
export default CreateAccountWithEmailScreen;
