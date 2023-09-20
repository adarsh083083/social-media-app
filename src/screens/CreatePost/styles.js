import {StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../styles';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Constant, Colors, Fonts} from '../../global';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  px20: {
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  mainHeading: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_20,
    marginBottom: moderateVerticalScale(20),
    fontFamily: Fonts.BOLD,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    includeFontPadding: true,
  },
  subHeading: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.SEMIBOLD,
    includeFontPadding: true,
  },
  para: {
    color: Colors.GREY_COLOR,
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.REGULAR,
    includeFontPadding: true,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  btnStyle: {
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(40),
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(6),
    marginHorizontal: 0,
    height: 'auto',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  profileIcon: {
    width: Constant.CHANGE_BY_MOBILE_DPI(60),
    height: Constant.CHANGE_BY_MOBILE_DPI(60),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(50),
    marginRight: Constant.CHANGE_BY_MOBILE_DPI(10),
    backgroundColor: Colors.BLASTIC_SEA,
  },
  visibleBtn: {
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(40),
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(8),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    alignSelf: 'flex-start',
    backgroundColor: Colors.DARK_GRAY,
  },
  visibleIcon: {
    width: Constant.CHANGE_BY_MOBILE_DPI(20),
    height: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginRight: Constant.CHANGE_BY_MOBILE_DPI(10),
    resizeMode: 'contain',
  },
  textInput: {
    textAlignVertical: 'top',
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(20),
    color: Colors.WHITE,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    columnGap: Constant.CHANGE_BY_MOBILE_DPI(20),
    backgroundColor: Colors.BLACK,
    height: Constant.CHANGE_BY_MOBILE_DPI(61),
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  flexWrapper: {
    justifyContent: 'space-between',
    flex: 1,
  },
  addPostIcons: {
    width: Constant.CHANGE_BY_MOBILE_DPI(24),
    height: Constant.CHANGE_BY_MOBILE_DPI(24),
    resizeMode: 'contain',
  },
  clsoeIcon: {
    width: Constant.CHANGE_BY_MOBILE_DPI(30),
    height: Constant.CHANGE_BY_MOBILE_DPI(30),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(50),
    overflow: 'hidden',
    position: 'absolute',
    top: Constant.CHANGE_BY_MOBILE_DPI(10),
    right: Constant.CHANGE_BY_MOBILE_DPI(10),
    zIndex: 99,
  },
  postImage: {
    width: '100%',
    height: Constant.CHANGE_BY_MOBILE_DPI(300),
    resizeMode: 'cover',
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
});

export default styles;
