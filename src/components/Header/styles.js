import {StyleSheet} from 'react-native';
import {Colors, Constant, Fonts} from '../../global';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
  },
  headerContainer: {
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
    width: '100%',
  },
  // mainContainer: {
  //   marginTop: moderateVerticalScale(24),
  //   width: '100%',
  // },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: CHANGE_BY_MOBILE_DPI(38),
    height: CHANGE_BY_MOBILE_DPI(38),
  },

  backIcon: {
    borderRadius: CHANGE_BY_MOBILE_DPI(19),
    width: CHANGE_BY_MOBILE_DPI(38),
    height: CHANGE_BY_MOBILE_DPI(38),
    width: Constant.CHANGE_BY_MOBILE_DPI(38),
    height: Constant.CHANGE_BY_MOBILE_DPI(38),
  },

  backIcon: {
    borderRadius: 19,
    width: Constant.CHANGE_BY_MOBILE_DPI(38),
    height: Constant.CHANGE_BY_MOBILE_DPI(38),
  },
  titleStyle: {
    color: Colors.WHITE,
    alignSelf: 'center',
    fontSize: CHANGE_BY_MOBILE_DPI(28),
    marginTop: CHANGE_BY_MOBILE_DPI(20),
    fontFamily: Fonts.BOLD,
  },
  socialLogoStyle: {
    width: CHANGE_BY_MOBILE_DPI(38),
    height: CHANGE_BY_MOBILE_DPI(38),
    marginRight: CHANGE_BY_MOBILE_DPI(70),
    fontSize: Fonts.FONT_SIZE_28,
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(20),
    fontFamily: Fonts.LATO,
    fontWeight: '900',
  },
  imageStyle: {
    width: '86%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowStyle: {
    flexDirection: 'row',
  },
  backArrowContainer: {
    top: Constant.CHANGE_BY_MOBILE_DPI(35),
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  alignContainer: {
    alignItems: 'center',
  },
  stepsContainer: {
    bottom: Constant.CHANGE_BY_MOBILE_DPI(40),
    flexDirection: 'row',
  },
  titleEmail: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(28),
    fontFamily: Fonts.LATO,
    fontWeight: '900',
    color: Colors.WHITE,
  },
  titleSteps: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(28),
    fontFamily: Fonts.LATO,
    fontWeight: '900',
    color: Colors.TEXT_COLOR_80,
  },
  titleNo: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(28),
    fontFamily: Fonts.LATO,
    fontWeight: '900',
    color: Colors.WHITE,
  },
});
export default styles;
