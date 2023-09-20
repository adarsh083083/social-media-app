import {View, Image, Text} from 'react-native';
import React from 'react';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import {Colors, Fonts, ScreenNames} from '../../../global';
import styles from './AuthenticatorManuallyStyles';
import IMAGES from '../../../global/images';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../../../components/AppButton/AppButton';
import Header from '../../../components/Header/Header';
import Gradient from '../../../components/Gradient/Gradient';
import {useDispatch, useSelector} from 'react-redux';
import {CreateBackupCodeThunk} from '../../../redux/asyncThunks/auth.asyncThunk';
import SocialBloxLockAuthenticator from '../../../assets/svgs/socialblox_authenticator.svg';

const AuthenticatorManually = () => {
  const {user} = useSelector(state => state.authSlice);
  const Value = user?.data?.email;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const modifyData = {
    email: Value,
  };

  const handleBackupCode = () => {
    dispatch(CreateBackupCodeThunk(modifyData))
      .unwrap()
      .then(res => {
        if (res) {
          navigation.navigate(ScreenNames.BACKUP_CODE_SCREEN, {
            code: res?.data?.data,
          });
        }
      })
      .catch(err => {});
  };

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
                backArrowVisibility={true}
                imageBack={IMAGES.BackArrow}
                image={IMAGES.socialBloxLogo}
                onPress={() => navigation.goBack()}
              />
              <View style={styles.authenticatorContainer}>
                <Text style={styles.authenticatorTitle}>Authenticator App</Text>
              </View>
              <View style={styles.imageContainer}>
                <SocialBloxLockAuthenticator />
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.detailFontStyle}>
                  Two-Factor authentication is on
                </Text>
                <Text style={styles.innerText}>
                  We’ll now ask for a login code any time you log in on
                </Text>
                <Text style={styles.innerText1}> a device.</Text>
              </View>
            </View>
            <View style={styles.btnVerify}>
              <AppButton
                onPress={() => handleBackupCode()}
                btnStyle={styles.btnStyle}
                btnTextStyle={styles.btnTextStyle2}
                btnText="Next"
              />
            </View>
          </View>
        }
      />
    </View>
  );
};

export default AuthenticatorManually;
