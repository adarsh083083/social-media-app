import {StyleSheet} from 'react-native';
import {Colors, Constant, Fonts} from '../../global';

export const styles = StyleSheet.create({
  innerContainer: {
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(200),
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(30),
  },
  btnContainer: {
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(15),
  },
  btnStyle: {
    backgroundColor: '#ac3df5',
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
  },
  btnStyle2: {
    backgroundColor: '#36343d',
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
  },
  btnTextStyle: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.BOLD,
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(24),
  },
  btnTextStyle2: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.BOLD,
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(24),
  },
  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: Colors.WHITE,
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(28),
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(32),
    fontWeight: '900',
  },
  success: {
    height: Constant.CHANGE_BY_MOBILE_DPI(247),
    width: Constant.CHANGE_BY_MOBILE_DPI(315),
  },
});
