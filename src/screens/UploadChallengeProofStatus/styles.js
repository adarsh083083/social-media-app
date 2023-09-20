import {StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../styles';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Constant, Colors, Fonts} from '../../global';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f00',
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
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.SEMIBOLD,
    textAlign: 'center',
  },
  para: {
    color: Colors.GREY_COLOR,
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.REGULAR,
  },
  btnStyle: {
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(24),
    width: '100%',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  fixedCard: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 99,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    justifyContent: 'space-between',
    paddingTop: Constant.CHANGE_BY_MOBILE_DPI(160),
    paddingBottom: Constant.CHANGE_BY_MOBILE_DPI(30),
  },
  checkImg: {
    width: Constant.CHANGE_BY_MOBILE_DPI(60),
    height: Constant.CHANGE_BY_MOBILE_DPI(60),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(40),
  },
});

export default styles;
