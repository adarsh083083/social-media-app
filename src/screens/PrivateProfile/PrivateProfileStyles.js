import {StyleSheet} from 'react-native';
import {Colors, Constant, Fonts} from '../../global';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  inputContainer: {},
  flexDirectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //
    // marginTop: Constant.CHANGE_BY_MOBILE_DPI(40)
  },
  btnStyle: {
    backgroundColor: '#36343D',
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  btnStyle2: {
    backgroundColor: Colors.PURPLE,
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    marginVertical: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  btnTextStyle2: {
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.BOLD,
    lineHeight: 24,
  },
  textInput: {
    backgroundColor: '#36343D',
    borderTopLeftRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    borderTopRightRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(50),
  },

  positionContainer: {
    position: 'absolute',
    top: Constant.CHANGE_BY_MOBILE_DPI(97.2),
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  profileFontStyle: {
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.WHITE,
  },
  imageStyle: {
    height: Constant.CHANGE_BY_MOBILE_DPI(72),
    width: Constant.CHANGE_BY_MOBILE_DPI(72),
  },
  followerFontStyle: {
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.BOLD,
    color: Colors.WHITE,
    includeFontPadding: false,
  },
  followerSmallFontStyle: {
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.LIGHT,
    color: Colors.STAR_DUST,
    includeFontPadding: false,
  },
  postFontStyle: {
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.BOLD,
    color: Colors.WHITE,
  },
  marginLeft: {
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(15),
  },
  dot: {
    height: Constant.CHANGE_BY_MOBILE_DPI(5),
    width: Constant.CHANGE_BY_MOBILE_DPI(5),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
    backgroundColor: Colors.WHITE,
  },
  marginContainer: {
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  userNameFontStyle: {
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.MEDIUM,
    color: Colors.WHITE,
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  lockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  accountContainer: {
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  accountFontStyle: {
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.MEDIUM,
    color: Colors.WHITE,
  },
  challengesFontStyle: {
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.REGULAR,
    color: Colors.WHITE,
  },
});
