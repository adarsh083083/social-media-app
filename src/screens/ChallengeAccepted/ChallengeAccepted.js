import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Colors, Constant, Fonts} from '../../global';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import Gradient from '../../components/Gradient/Gradient';
import AppButton from '../../components/AppButton/AppButton';

const ChallengeAccepted = () => {
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
            <View style={styles.container}>
              <Text style={styles.header}>Challenge accepted!</Text>
              <Image
                style={styles.image}
                source={require('../../assets/images/ChallengeAccepted.png')}
                resizeMode="contain"
              />
            </View>
            <View style={styles.bottomContainer}>
              <AppButton
                onPress={() => {}}
                btnStyle={styles.btnStyle1}
                btnTextStyle={styles.btnTextStyle1}
                btnText="Upload your proof"
              />
              <AppButton
                onPress={() => {}}
                btnStyle={styles.btnStyle2}
                btnTextStyle={styles.btnTextStyle2}
                btnText="Do this later"
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
    justifyContent: 'center',
    color: '#fff',
  },
  image: {
    flex: 1,
  },
  bottomContainer: {
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(30),
  },
  btnStyle1: {
    backgroundColor: Colors.PURPLE,
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  btnStyle2: {
    backgroundColor: Colors.DARK_GRAY,
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  //   challengeApprovedView: {
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     marginTop: 40,
  //     marginBottom: 20,
  //   },
  //   challengeApprovedTextStyle: {
  //     color: Colors.WHITE,
  //     fontWeight: '900',
  //     fontSize: Fonts.FONT_SIZE_28,
  //     textAlign: 'center',
  //     marginHorizontal: 20,
  //   },
  //   imageViewStyle: {
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  //   imageStyle: {
  //     width: 200,
  //     height: 200,
  //   },
  //   btnStyle2: {
  //     backgroundColor: Colors.PURPLE,
  //     height: Constant.CHANGE_BY_MOBILE_DPI(48),
  //     marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  //   },
  //   btnTextStyle2: {
  //     fontSize: Fonts.FONT_SIZE_16,
  //     fontFamily: Fonts.BOLD,
  //     lineHeight: 24,
  //   },
  //   textViewStyle: {
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     flex: 1,
  //   },
  //   earnedStyle: {
  //     color: Colors.WHITE,
  //     fontSize: Fonts.FONT_SIZE_24,
  //     fontWeight: '900',
  //     textAlign: 'center',
  //   },
  //   dollarStyle: {
  //     color: Colors.WHITE,
  //     fontSize: Fonts.FONT_SIZE_28,
  //     fontWeight: '900',
  //     marginVertical: 10,
  //     textAlign: 'center',
  //   },
  //   dollarInnerStyle: {
  //     color: '#D6D4D9',
  //     fontSize: Fonts.FONT_SIZE_24,
  //     fontWeight: '500',
  //     marginVertical: 10,
  //     textAlign: 'center',
  //   },
  //   descriptionStyle: {
  //     color: Colors.WHITE,
  //     fontSize: Fonts.FONT_SIZE_14,
  //     fontWeight: '400',
  //     marginVertical: 10,
  //     textAlign: 'center',
  //   },
});
export default ChallengeAccepted;
