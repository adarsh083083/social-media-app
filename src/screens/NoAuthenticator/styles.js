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
    textAlign: 'center',
    fontSize: moderateScale(30),
    marginBottom: moderateVerticalScale(20),
    fontFamily: Fonts.BOLD,
  },
  subHeading: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: moderateScale(20),
    marginBottom: moderateVerticalScale(5),
  },
  para: {
    color: Colors.GREY_COLOR,
    textAlign: 'center',
    fontSize: moderateScale(13),
    lineHeight: 26,
  },
  btnTextStyle: {
    fontSize: 16,
    fontFamily: Fonts.BOLD,
    lineHeight: 24,
  },
  btnStyle: {
    backgroundColor: '#ac3df5',
    marginTop: moderateVerticalScale(60),
  },
});

export default styles;
