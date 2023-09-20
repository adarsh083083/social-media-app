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

  card: {
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(18),
    width: '90%',
    alignSelf: 'center',
    marginBottom: moderateVerticalScale(14),
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
