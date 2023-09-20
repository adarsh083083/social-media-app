import {StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../styles';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Constant, Colors, Fonts} from '../../global';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  txtWrapper: {
    marginTop: DIMENSIONS.HEIGHT * 0.05,
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  backBtn: {
    width: Constant.CHANGE_BY_MOBILE_DPI(38),
    height: Constant.CHANGE_BY_MOBILE_DPI(38),
    marginBottom: moderateScale(20),
  },
  backArrow: {
    width: Constant.CHANGE_BY_MOBILE_DPI(38),
    height: Constant.CHANGE_BY_MOBILE_DPI(38),
    resizeMode: 'cover',
  },
  bigHeading: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_35,
    fontFamily: Fonts.BOLD,
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(30),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  mainHeading: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_20,
    marginBottom: moderateVerticalScale(20),
    fontFamily: Fonts.BOLD,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subHeading: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.SEMIBOLD,
  },
  para: {
    color: Colors.GREY_COLOR,
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.REGULAR,
  },
  intressContainer: {
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(40),
  },
  card: {
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(10),
    paddingLeft: Constant.CHANGE_BY_MOBILE_DPI(10),
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(50),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.DARK_GRAY,
    overflow: 'hidden',
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(14),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  icon: {
    width: Constant.CHANGE_BY_MOBILE_DPI(20),
    height: Constant.CHANGE_BY_MOBILE_DPI(20),
    resizeMode: 'contain',
    marginRight: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  w90: {
    width: '90%',
  },
  footerArea: {
    width: '90%',
    alignSelf: 'center',
    paddingBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  footerPara: {
    color: Colors.GREY_COLOR,
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.REGULAR,
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(28),
    marginVertical: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  pl20: {
    paddingLeft: Constant.CHANGE_BY_MOBILE_DPI(20),
  },

  btnStyle: {
    marginVertical: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  activeCard: {
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(10),
    paddingLeft: Constant.CHANGE_BY_MOBILE_DPI(10),
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(50),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.PURPLE,
    overflow: 'hidden',
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(14),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
});

export default styles;
