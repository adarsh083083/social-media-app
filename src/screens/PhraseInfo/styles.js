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
  txtWrapper: {
    marginTop: DIMENSIONS.HEIGHT * 0.05,
    paddingHorizontal: 20,
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
  mainHeading: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: moderateScale(30),
    marginBottom: moderateVerticalScale(20),
    fontFamily: Fonts.BOLD,
  },
  subHeading: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: moderateScale(20),
    marginBottom: moderateVerticalScale(10),
    fontFamily: Fonts.BOLD,
  },
  para: {
    color: '#D6D4D9',
    textAlign: 'center',
    fontSize: moderateScale(14),
    marginBottom: 25,
    lineHeight: 26,
  },
  pointerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  pointer: {
    width: 34,
    height: 34,
    fontSize: 14,
    lineHeight: 34,
    borderRadius: 50,
    backgroundColor: Colors.PURPLE,
    textAlign: 'center',
    color: Colors.WHITE,
    fontFamily: Fonts.BOLD,
    marginRight: 20,
  },
  pointerTxt: {
    fontSize: 16,
    fontFamily: Fonts.BOLD,
    color: Colors.WHITE,
  },
});

export default styles;
