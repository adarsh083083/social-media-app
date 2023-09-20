import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import Gradient from '../../components/Gradient/Gradient';
import { Colors, Constant, Fonts, ScreenNames } from '../../global';
import AppButton from '../../components/AppButton/AppButton';
import { useNavigation } from '@react-navigation/native';

const ReChallenge = () => {
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
            <View style={styles.mainContainer}>
              <Text style={styles.header}>Re-challenge</Text>
              <View style={styles.reChallengeView}>
                <Text style={styles.reChallengeTextStyle}>
                  You’re <Text style={styles.challenging}>challenging</Text>{' '}
                  Michiel
                </Text>
              </View>
              <View>
                <Text style={styles.description}>
                  Short introduction from the challenge Lorem ipsum dolor sit
                  amet, onsectetur adipiscinia...adipisciniaculis nunc mg elit.
                  Nunc tincidunt facilisis libero, quis iaculis.
                </Text>
              </View>
              <View>
                <Text style={styles.requirement}>Requirements:</Text>
                <View>
                  <Text style={styles.point}>
                    1.Jump without your shoes on{' '}
                  </Text>
                  <Text style={styles.point}>
                    2 minutes has to be visible on a stopwatch.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <AppButton
                onPress={() =>
                  navigation.navigate(ScreenNames.CHALLENGE_ACCEPTED)
                }
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
  reChallengeView: {
    marginTop: 40,
    marginBottom: 20,
  },
  reChallengeTextStyle: {
    color: Colors.WHITE,
    fontWeight: '700',
    fontSize: Fonts.FONT_SIZE_16,
  },
  challenging: {
    color: '#87888A',
  },
  description: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_16,
    fontWeight: '400',
    marginBottom: 20,
  },
  requirement: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_16,
    fontWeight: '900',
    marginBottom: 10,
  },
  point: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_16,
    fontWeight: '400',
    marginBottom: 5,
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
});

export default ReChallenge;
