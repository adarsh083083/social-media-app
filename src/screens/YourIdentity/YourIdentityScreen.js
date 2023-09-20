import {Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './YourIdentityStyle';
import Header from '../../components/Header/Header';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {Colors, ScreenNames} from '../../global';
import Gradient from '../../components/Gradient/Gradient';
import IMAGES from '../../global/images';
import AppButton from '../../components/AppButton/AppButton';
import MyTextInput from '../../components/TextInput/MyTextInput';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import {Formik} from 'formik';
import {CreateUserIdentityThunk} from '../../redux/asyncThunks/auth.asyncThunk';
const YourIdentityScreen = () => {
  // const {toggleCheckBox, setToggleCheckBox, goToAuthenticator} =
  //   YourIdentityHooks();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    displayName: yup.string().required('Display Name is required'),
  });

  // Set initial form values using state
  const [initialValues, setIntialValues] = useState({
    username: '',
    displayName: '',
    // profileUpdateProgress: 3,
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
          dispatch(CreateUserIdentityThunk(values))
            .unwrap()
            .then(res => {
              console.log(res,"your identity scren")
              if (res?.data?.statusCode === 200) {
                navigation.navigate(ScreenNames.AUTHENTICATOR_APP);
              }
            })
            .catch(err => {});
        }}>
        {({values, handleChange, errors, handleSubmit, handleBlur}) => (
          <Gradient
            children={
              <View style={styles.mainContainer}>
                <ScrollView style={{marginTop: 20}}>
                  <View style={styles.flexContainer}>
                    <Header
                      backArrowVisibility={true}
                      image={IMAGES.socialBloxLogo}
                      title="Your Identity"
                      onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.yourIdentityDescriptionStyle}>
                      We don’t care about your identity as long as your friends
                      can find you. Your display name can be whatever you want,
                      but the username needs to be unique.
                    </Text>
                  </View>
                  <View style={styles.inputContainer}>
                    <View>
                      <MyTextInput
                        label={
                          <Text style={{color: Colors.WHITE}}>
                            Display name
                          </Text>
                        }
                        mode="flat"
                        activeUnderlineColor={'#36343D'}
                        textColor={'white'}
                        style={styles.textInput}
                        cursorColor={Colors.WHITE}
                        value={values?.username}
                        onChangeText={handleChange('username')}
                        onBlur={() => handleBlur('username')}
                      />
                      {errors?.username ? (
                        <Text style={styles.formikError}>
                          {errors.username}
                        </Text>
                      ) : null}
                    </View>
                    <View>
                      <MyTextInput
                        label={
                          <Text style={{color: Colors.WHITE}}>Username</Text>
                        }
                        mode="flat"
                        activeUnderlineColor={'#36343D'}
                        textColor={'white'}
                        style={styles.textInput}
                        cursorColor={Colors.WHITE}
                        value={values?.displayName}
                        onChangeText={handleChange('displayName')}
                        onBlur={() => handleBlur('displayName')}
                      />
                      {errors?.displayName ? (
                        <Text style={styles.formikError}>
                          {errors.displayName}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                  <View style={styles.bottomContainer}>
                    <View style={styles.checkBoxContainer}>
                      <CheckBox
                        style={styles.checkboxAndroid}
                        boxType={'square'}
                        value={toggleCheckBox}
                        onValueChange={e => setToggleCheckBox(e)}
                        tintColors={{
                          true: Colors.PURPLE,
                          false: Colors.WHITE,
                        }}
                        onTintColor={Colors.WHITE}
                        onFillColor={Colors.WHITE}
                        hideBox={false}
                        // onCheckColorr={Colors.WHITE}
                      />
                      <Text style={styles.termsAndConditionFontStyle}>
                        {`By continuing I agree to the`}
                        <Text style={styles.termsAndConditionBoldFontStyle}>
                          {' '}
                          {`Terms of Service`}
                        </Text>
                        <Text style={styles.termsAndConditionFontStyle}>
                          {' '}
                          {'and'}
                        </Text>
                        <Text style={styles.termsAndConditionBoldFontStyle}>
                          {' '}
                          {'Privacy Policy'}
                        </Text>
                      </Text>
                    </View>
                    <AppButton
                      onPress={handleSubmit}
                      btnStyle={styles.btnStyle2}
                      btnTextStyle={styles.btnTextStyle2}
                      btnText="Next"
                    />
                  </View>
                </ScrollView>
              </View>
            }
          />
        )}
      </Formik>
    </View>
  );
};

export default YourIdentityScreen;
