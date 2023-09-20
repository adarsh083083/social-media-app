import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import Gradient from '../../components/Gradient/Gradient';
import { Colors, Constant, Fonts, ScreenNames } from '../../global';
import IMAGES from '../../global/images';
import AppButton from '../../components/AppButton/AppButton';
import { useNavigation } from '@react-navigation/native';

const ChallengeDisapproved = () => {
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
            <Text style={styles.header}>Challenge disapproved</Text>
            <View style={styles.challengeApprovedView}>
              <Text style={styles.challengeApprovedTextStyle} numberOfLines={2}>
                Challenge not approved!
              </Text>
            </View>
            <View style={styles.imageViewStyle}>
              <Image
                source={IMAGES.ChallengeRejected}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.textViewStyle}>
              <View>
                <Text style={styles.earnedStyle}>
                  You did not earn any SBLX
                </Text>
              </View>
              <View>
                <Text style={styles.descriptionStyle}>
                  The SocialBlox tokens are returned to the challengers’ wallet
                  because the majority of the people disapproved your challenge.
                  Try to match the requirements of the challenge so that you’ll
                  get approval next time!
                </Text>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <AppButton
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
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#272A2E',
  },
  header: {
    fontSize: Fonts.FONT_SIZE_20,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  challengeApprovedView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  challengeApprovedTextStyle: {
    color: Colors.WHITE,
    fontWeight: '900',
    fontSize: Fonts.FONT_SIZE_28,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  imageViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
  btnStyle2: {
    backgroundColor: Colors.PURPLE,
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  btnTextStyle2: {
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.BOLD,
    lineHeight: 24,
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
    textAlign: 'center',
  },
  dollarStyle: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_28,
    fontWeight: '900',
    marginVertical: 10,
    textAlign: 'center',
  },
  dollarInnerStyle: {
    color: '#D6D4D9',
    fontSize: Fonts.FONT_SIZE_24,
    fontWeight: '500',
    marginVertical: 10,
    textAlign: 'center',
  },
  descriptionStyle: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_14,
    fontWeight: '400',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default ChallengeDisapproved;
