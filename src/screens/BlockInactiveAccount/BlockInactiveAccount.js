import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import Gradient from '../../components/Gradient/Gradient';
import Header from '../../components/Header/Header';
import IMAGES from '../../global/images';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import AppButton from '../../components/AppButton/AppButton';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { Colors, ScreenNames } from '../../global';
import ImagePicker from 'react-native-image-crop-picker';

const BlockInactiveAccount = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { status } = route.params;

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
            <View style={styles.header}>
              <Text style={styles.mainHeading}>
                {status == 1 ? 'Blocked account' : 'Inactive account'}
              </Text>
              <TouchableOpacity activeOpacity={0.8}>
                <Image source={IMAGES.GearIcon} style={styles.settingIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.profileContainer}>
              {status == 1 ? (
                <Text style={styles.paraTxt}>
                  Your account has been blocked by a SocialBlox moderator.
                  Contact SocialBlox to get more info.
                </Text>
              ) : (
                <Text style={styles.paraTxt}>
                  You've been inactive for too long, please back-up your
                  seedphrase by going to settings in the top right corner and
                  open back-up wallet. After that sign out and sign in again and
                  import your wallet by the seed phrase.
                </Text>
              )}
            </View>
            <View style={styles.btnContainer}>
              <AppButton
                btnStyle={styles.btnStyle}
                btnTextStyle={styles.btnTextStyle}
                btnText="Sign out"
              // onPress={() => navigation.navigate(ScreenNames.PHARSEINFO)}
              />
            </View>
          </View>
        }
      />
    </View>
  );
};

export default BlockInactiveAccount;
