import { StyleSheet } from 'react-native';
import { Colors, Constant, Fonts } from '../../../global';
import { SCREEN_HEIGHT } from '../../../global/constant';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: SCREEN_HEIGHT,
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
  btnStyle: {
    backgroundColor: '#36343D',
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  btnStyle2: {
    backgroundColor: Colors.PURPLE,
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  btnStyle3: {
    backgroundColor: '#36343D',
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
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
  countryInputStyle: {
    backgroundColor: '#36343D',
    flex: 0.3,
    marginRight: Constant.CHANGE_BY_MOBILE_DPI(7),
    borderTopLeftRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    borderTopRightRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
  },
  positionContainer: {
    position: 'absolute',
    top: Constant.CHANGE_BY_MOBILE_DPI(97.2),
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  formikError: {
    marginHorizontal: 20,
    color: 'red',
    marginTop: 5,
  },
  bottomContainer: {
    paddingBottom: Constant.CHANGE_BY_MOBILE_DPI(30),
  },
});
