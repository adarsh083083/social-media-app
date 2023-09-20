import { StyleSheet } from 'react-native';
import { DIMENSIONS } from '../../styles';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { Constant, Colors, Fonts } from '../../global';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  txtWrapper: {
    marginTop: DIMENSIONS.HEIGHT * 0.05,
    paddingHorizontal: 20,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  backBtn: {
    width: 38,
    height: 38,
    marginBottom: moderateScale(20),
  },
  backArrow: {
    width: 38,
    height: 38,
    resizeMode: 'cover',
  },
  logoStyle: {
    width: 38,
    height: 38,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnContainer: {
    marginBottom: moderateScale(25),
  },
  mainHeading: {
    color: Colors.WHITE,
    fontSize: moderateScale(30),
    marginBottom: moderateVerticalScale(20),
    fontFamily: Fonts.BOLD,
    textAlign: 'center',
  },
  subHeading: {
    color: Colors.WHITE,
    fontSize: moderateScale(18),
    marginBottom: moderateVerticalScale(5),
  },
  para: {
    color: Colors.GREY_COLOR,
    fontSize: moderateScale(13),
    lineHeight: 26,
    marginBottom: moderateVerticalScale(14),
  },
  btnTextStyle: {
    fontSize: 16,
    fontFamily: Fonts.BOLD,
    lineHeight: 24,
  },
  btnStyle: {
    backgroundColor: '#ac3df5',
    marginTop: moderateVerticalScale(14),
  },
  btnTransparant: {
    backgroundColor: 'transparent',
    marginTop: moderateVerticalScale(24),
  },
  btnDark: {
    marginTop: moderateVerticalScale(14),
    backgroundColor: Colors.DARK_GRAY,
  },
  px30: {
    paddingHorizontal: 30,
  },
  copyRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    columnGap: 10,
  },
  copyIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default styles;
