import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import Gradient from '../../components/Gradient/Gradient';
import { Colors, Constant, Fonts, ScreenNames } from '../../global';
import IMAGES from '../../global/images';
import AppButton from '../../components/AppButton/AppButton';
import { useNavigation } from '@react-navigation/native';

const ChallengeApproved = () => {
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
          <View style={styles.container}>
            <Text style={styles.header}>Challenge approved</Text>
            <View style={styles.challengeApprovedView}>
              <Text style={styles.challengeApprovedTextStyle}>
                Challenge approved!
              </Text>
            </View>
            <View style={styles.imageViewStyle}>
              <Image
                source={IMAGES.ChallengeApproved}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.textViewStyle}>
              <View>
                <Text style={styles.earnedStyle}>You’ve earned</Text>
              </View>
              <View>
                <Text style={styles.dollarStyle}>
                  84.56 SBLX <Text style={styles.dollarInnerStyle}> $9.34</Text>
                </Text>
              </View>
              <View>
                <Text style={styles.descriptionStyle}>
                  The SocialBlox tokens are added to your wallet.
                </Text>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <AppButton
                // onPress={ScreenNames.CHALLENGE_DISAPPROVED}
                btnStyle={styles.btnStyle2}
                btnTextStyle={styles.btnTextStyle2}
                btnText="Continue"
              />
            </View>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    paddingTop: Constant.CHANGE_BY_MOBILE_DPI(40),
    backgroundColor: '#272A2E',
  },
  header: {
    fontSize: Fonts.FONT_SIZE_20,
    fontWeight: '700',
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
    textAlign: 'center',
    color: '#fff',
  },
  challengeApprovedView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(40),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  challengeApprovedTextStyle: {
    color: Colors.WHITE,
    fontWeight: '900',
    fontSize: Fonts.FONT_SIZE_28,
    textAlign: 'center',
  },
  imageViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: Constant.CHANGE_BY_MOBILE_DPI(200),
    height: Constant.CHANGE_BY_MOBILE_DPI(200),
  },
  btnStyle2: {
    backgroundColor: Colors.PURPLE,
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  btnTextStyle2: {
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.BOLD,
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(24),
  },
  textViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  earnedStyle: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_24,
    fontWeight: '900',
  },
  dollarStyle: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_28,
    fontWeight: '900',
    marginVertical: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  dollarInnerStyle: {
    color: '#D6D4D9',
    fontSize: Fonts.FONT_SIZE_24,
    fontWeight: '500',
    marginVertical: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  descriptionStyle: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_14,
    fontWeight: '400',
    marginVertical: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
});

export default ChallengeApproved;
