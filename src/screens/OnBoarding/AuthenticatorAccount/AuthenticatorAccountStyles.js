import {StyleSheet} from 'react-native';
import {Colors, Constant, Fonts} from '../../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../../global/constant';
import {FONT_SIZE_24} from '../../../global/fonts';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
  },
  copyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnVerify: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(24),
  },
  verfiyBtn: {
    justifyContent: 'flex-end',
    width: '100%',
  },

  btnStyle: {
    backgroundColor: Colors.PURPLE_COLOR,
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(16),
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
  },
  btnStyle2: {
    backgroundColor: Colors.DARK_GRAY,
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    marginVertical: Constant.CHANGE_BY_MOBILE_DPI(16),
  },
  btnTextStyle2: {
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.LATO,
    lineHeight: FONT_SIZE_24,
    fontWeight: '900',
    color: Colors.WHITE,
  },
  imageContainer: {
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(101),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: Constant.CHANGE_BY_MOBILE_DPI(188),
    height: Constant.CHANGE_BY_MOBILE_DPI(188),
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    bottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  titleStyle: {
    fontSize: Fonts.FONT_SIZE_14,
    color: Colors.TEXT_COLOR_80,
    textAlign: 'center',
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(24),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.LATO,
    fontWeight: '500',
  },
  inputContainer: {
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(24),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(24),
  },
  inputContainerOne: {
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(24),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(16),
  },
  inputField: {
    backgroundColor: Colors.DARK_GRAY,
    fontSize: Fonts.FONT_SIZE_12,
    borderColor: Colors.GREY,
    color: Colors.WHITE,
    fontFamily: Fonts.LATO_REGULAR,
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(16),
  },

  inputField2: {
    backgroundColor: Colors.DARK_GRAY,
    fontSize: Fonts.FONT_SIZE_12,
    borderColor: Colors.GREY,
    color: Colors.WHITE,
    fontFamily: Fonts.LATO_REGULAR,
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(16),
    paddingRight: Constant.CHANGE_BY_MOBILE_DPI(46),
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomView: {
    width: '100%',
    height: Constant.CHANGE_BY_MOBILE_DPI(50),
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: Constant.CHANGE_BY_MOBILE_DPI(16),
  },
  btnCopyStyle: {
    color: 'white',
    position: 'absolute',
    right: Constant.CHANGE_BY_MOBILE_DPI(16),
    width: Constant.CHANGE_BY_MOBILE_DPI(20),
    height: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  authenticatorTitle: {
    fontFamily: Fonts.LATO,
    fontWeight: '900',
    color: Colors.WHITE,
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(28),
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(36.6),
  },
  authenticatorContainer: {
    bottom: Constant.CHANGE_BY_MOBILE_DPI(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleSecret: {
    color: Colors.WHITE,
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(16.8),
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.LATO,
    fontWeight: '900',
    bottom: Constant.CHANGE_BY_MOBILE_DPI(4),
  },
  labelSecret: {color: 'white'},
  labelAccount: {color: 'white'},

  imageCopied: {
    color: 'white',
    position: 'absolute',
    top: Constant.CHANGE_BY_MOBILE_DPI(34),
    right: Constant.CHANGE_BY_MOBILE_DPI(10),
    alignSelf: 'center',
    width: Constant.CHANGE_BY_MOBILE_DPI(20),
    height: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  inputStyle2: {
    backgroundColor: Colors.DARK_GRAY,
  },
  authenticatorTitle: {
    fontFamily: Fonts.LATO,
    fontWeight: '900',
    color: Colors.WHITE,
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(28),
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(36.6),
  },
  authenticatorContainer: {
    bottom: Constant.CHANGE_BY_MOBILE_DPI(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
