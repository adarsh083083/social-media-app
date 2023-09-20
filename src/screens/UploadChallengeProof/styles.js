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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  btnStyle: {
    backgroundColor: 'tranparent',
    borderWidth: 1,
    borderColor: Colors.WHITE,
    alignSelf: 'flex-end',
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(24),
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(6),
    height: 'auto',
  },
  cardStyle: {
    width: '33%',
    height: Constant.CHANGE_BY_MOBILE_DPI(120),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  fixBtn: {
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(10),
    width: '100%',
  },
  mediaScreen: {
    height: '90%',
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(9),
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
  },
  checkImg: {
    width: Constant.CHANGE_BY_MOBILE_DPI(30),
    height: Constant.CHANGE_BY_MOBILE_DPI(30),
    resizeMode: 'contain',
  },
});

export default styles;
