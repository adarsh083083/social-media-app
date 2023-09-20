import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  StyleSheet,
  Platform,
  Linking,
} from 'react-native';
import React, { useState } from 'react';
import Gradient from '../../components/Gradient/Gradient';
import Header from '../../components/Header/Header';
import IMAGES from '../../global/images';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import AppButton from '../../components/AppButton/AppButton';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { Colors } from '../../global';

const NoAuthenticator = () => {
  const navigation = useNavigation();

  const openStore = async () => {
    if (Platform.OS == 'android') {
      Linking.openURL(
        'https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2',
      );
    } else {
      Linking.openURL(
        'https://apps.apple.com/us/app/google-authenticator/id388497605',
      );
    }
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
            <View>
              <View style={styles.txtWrapper}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  activeOpacity={0.8}
                  style={styles.backBtn}>
                  <Image source={IMAGES.BackArrow} style={styles.backArrow} />
                </TouchableOpacity>

                <Image
                  resizeMode="center"
                  source={IMAGES.socialBloxLogo}
                  style={styles.logoStyle}
                />
              </View>
              <Text style={styles.mainHeading}>Authenticator app</Text>
            </View>
            <View style={styles.btnContainer}>
              <Text style={styles.subHeading}>No authenticator app found</Text>
              <Text style={styles.para}>
                No authenticator app was found on your device. You can download
                one from the app store
              </Text>
              <AppButton
                btnStyle={styles.btnStyle}
                btnTextStyle={styles.btnTextStyle}
                btnText="Go to the app store"
                onPress={() => openStore()}
              />
            </View>
          </View>
        }
      />
    </View>
  );
};

export default NoAuthenticator;
