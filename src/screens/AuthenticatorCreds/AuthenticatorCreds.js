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
import { Colors, ScreenNames } from '../../global';

const AuthenticatorCreds = () => {
  const navigation = useNavigation();

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
              <View style={styles.px30}>
                <Text style={styles.subHeading}>Account:</Text>
                <Text style={styles.para}>user@gamil.com</Text>
                <Text style={styles.subHeading}>Key:</Text>
                <View style={styles.copyRow}>
                  <Text style={styles.para}>KSDFUJSDFDSSDFSDSDFJSDJF</Text>
                  <TouchableOpacity activeOpacity={0.8}>
                    <Image source={IMAGES.CopyIcon} style={styles.copyIcon} />
                  </TouchableOpacity>
                </View>
              </View>
              <AppButton
                btnStyle={styles.btnTransparant}
                btnTextStyle={styles.btnTextStyle}
                btnText="Use SMS verification"
              />
              <AppButton
                btnStyle={styles.btnStyle}
                btnTextStyle={styles.btnTextStyle}
                btnText="Open default authenticator app"
              />
              <AppButton
                btnStyle={styles.btnDark}
                btnTextStyle={styles.btnTextStyle}
                btnText="Enter code"
                onPress={() =>
                  navigation.navigate(ScreenNames.BLOCKINACTIVEACCOUNT, {
                    status: 1,
                  })
                }
              />
            </View>
          </View>
        }
      />
    </View>
  );
};

export default AuthenticatorCreds;
