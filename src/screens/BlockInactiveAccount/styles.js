import { StyleSheet } from 'react-native';
import { DIMENSIONS } from '../../styles';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { Constant, Colors, Fonts } from '../../global';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  btnTextStyle: {
    fontSize: 16,
    fontFamily: Fonts.BOLD,
    lineHeight: 24,
  },
  btnStyle: {
    backgroundColor: '#ac3df5',
    height: 48,
  },
  btnContainer: {
    marginBottom: moderateScale(25),
  },
  paraTxt: {
    color: '#D6D4D9',
    textAlign: 'center',
    fontSize: moderateScale(16),
    marginBottom: 25,
    lineHeight: 26,
    paddingHorizontal: 26,
  },
  header: {
    marginTop: DIMENSIONS.HEIGHT * 0.05,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  mainHeading: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: moderateScale(24),
    marginBottom: moderateVerticalScale(20),
    fontFamily: Fonts.BOLD,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  settingIcon: {
    width: 45,
    height: 45,
  },
});

export default styles;
