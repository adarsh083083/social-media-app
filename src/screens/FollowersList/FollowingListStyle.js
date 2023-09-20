import {StyleSheet} from 'react-native';
import { DIMENSIONS } from '../../styles';
import { Constant } from '../../global';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
 

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
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: moderateVerticalScale(10),
  },
  userPic: {
    width: Constant.CHANGE_BY_MOBILE_DPI(50),
    height: Constant.CHANGE_BY_MOBILE_DPI(50),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(50),
    marginRight: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  btnStyle: {
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(6),
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(24),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(50),
    backgroundColor: Colors.DARK_GRAY,
    marginLeft: 'auto',
  },
});

export default styles;
