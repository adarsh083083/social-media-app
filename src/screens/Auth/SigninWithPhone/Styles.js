import {StyleSheet} from 'react-native';
import {Colors, Constant, Fonts} from '../../../global';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
  },
  flexDirectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(40),
  },
  btnStyle2: {
    backgroundColor: Colors.PURPLE,
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  btnTextStyle2: {
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.BOLD,
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(24),
  },
  textInput: {
    height: Constant.CHANGE_BY_MOBILE_DPI(56),
    backgroundColor: '#36343D',
    width: Constant.SCREEN_WIDTH / 1.7,
    borderTopLeftRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    borderTopRightRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
  },
  countryInputStyle: {
    height: Constant.CHANGE_BY_MOBILE_DPI(56),
    backgroundColor: '#36343D',
    width: Constant.SCREEN_WIDTH / 3.5,
    marginRight: Constant.CHANGE_BY_MOBILE_DPI(7),
    borderTopLeftRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    borderTopRightRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
  },
  positionContainer: {
    position: 'absolute',
    top: Constant.CHANGE_BY_MOBILE_DPI(120),
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  formikError: {
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    color: 'red',
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(5),
  },
});
