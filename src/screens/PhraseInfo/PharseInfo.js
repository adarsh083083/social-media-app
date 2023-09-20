import React, { useState } from 'react';
import Gradient from '../../components/Gradient/Gradient';
import Header from '../../components/Header/Header';
import IMAGES from '../../global/images';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import AppButton from '../../components/AppButton/AppButton';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { Colors, ScreenNames } from '../../global';

const PharseInfo = () => {
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
            <View style={styles.txtWrapper}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.8}
                style={styles.backBtn}>
                <Image source={IMAGES.BackArrow} style={styles.backArrow} />
              </TouchableOpacity>
              <Text style={styles.mainHeading}>Your seed phrase</Text>
              <Text style={styles.subHeading}>Important info</Text>
              <Text style={styles.para}>
                To find your seed phrase after completing this, do the following
                steps.
              </Text>
              <View style={styles.pointerRow}>
                <Text style={styles.pointer}>1</Text>
                <Text style={styles.pointerTxt}>Go to settings</Text>
              </View>
              <View style={styles.pointerRow}>
                <Text style={styles.pointer}>2</Text>
                <Text style={styles.pointerTxt}>Choose back up wallet</Text>
              </View>
              <View style={styles.pointerRow}>
                <Text style={styles.pointer}>2</Text>
                <Text style={styles.pointerTxt}>Fill in your seed phrase</Text>
              </View>
            </View>
            <View style={styles.btnContainer}>
              <AppButton
                btnStyle={styles.btnStyle}
                btnTextStyle={styles.btnTextStyle}
                btnText="Continue"
                onPress={() => { navigation.navigate(ScreenNames.VERIFY_SEED_PHRASE) }}
              />
            </View>
          </View>
        }
      />
    </View>
  );
};

export default PharseInfo;
