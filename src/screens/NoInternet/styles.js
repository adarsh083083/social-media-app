import {StyleSheet} from 'react-native';
import {Colors, Constant, Fonts} from '../../global';
import {
  CHANGE_BY_MOBILE_DPI,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../global/constant';
import {moderateScale, scale} from 'react-native-size-matters';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  mainHeading: {
    color: Colors.GREY_COLOR,
    fontSize: Fonts.FONT_SIZE_20,
    fontFamily: Fonts.BOLD,
    textAlign: 'center',
  },
  para: {
    color: Colors.GREY_COLOR,
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.REGULAR,
    textAlign: 'center',
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(10),
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  headerContainer: {
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(24),
    width: '100%',
  },

  logoStyle: {
    width: Constant.CHANGE_BY_MOBILE_DPI(100),
    height: Constant.CHANGE_BY_MOBILE_DPI(100),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(70),
    resizeMode: 'cover',
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
  btnStyle: {
    height: CHANGE_BY_MOBILE_DPI(48),
    backgroundColor: Colors.PURPLE,
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(24),
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  btnTextStyle: {
    fontSize: scale(14),
    color: 'white',
    fontFamily: Fonts.BOLD,
  },
  btnColorStyle: {
    height: moderateScale(48),
    backgroundColor: 'grey',
    borderRadius: moderateScale(8),
    marginHorizontal: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnColorTextStyle: {
    fontSize: scale(14),
    color: 'white',
    fontFamily: Fonts.BOLD,
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
});
