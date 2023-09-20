import {StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../styles';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Constant, Colors, Fonts} from '../../global';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  txtWrapper: {
    paddingTop: DIMENSIONS.HEIGHT * 0.05,
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    flexDirection: 'row',
    // backgroundColor: Colors.BLACK_PRIMARY,
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
  btnTextStyle: {
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.REGULAR,
  },
  btnStyle: {
    backgroundColor: '#ac3df5',
    marginTop: moderateVerticalScale(14),
    width: '100%',
    marginLeft: 0,
  },

  notificationCard: {
    backgroundColor: Colors.DARK_GRAY,
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(20),
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(18),
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: moderateVerticalScale(10),
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
});

export default styles;
