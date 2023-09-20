import {StyleSheet} from 'react-native';
import {Colors, Constant, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const styles = StyleSheet.create({
  container: {
    marginTop: CHANGE_BY_MOBILE_DPI(16),
  },
  inputContainer: {
    width: Constant.SCREEN_WIDTH / 1.12,
    backgroundColor: Colors.BLACK_BG,
    justifyContent: 'center',
    borderRadius: CHANGE_BY_MOBILE_DPI(20),
    height: CHANGE_BY_MOBILE_DPI(40),
  },
  searchIcon: {
    width: CHANGE_BY_MOBILE_DPI(20),
    height: CHANGE_BY_MOBILE_DPI(20),
    alignContent: 'center',
    top: CHANGE_BY_MOBILE_DPI(20),
    left: CHANGE_BY_MOBILE_DPI(20),
  },
  inputWrapper: {
    flexDirection: 'row',
    paddingStart: CHANGE_BY_MOBILE_DPI(17),
    justifyContent: 'space-between',
    width: '90%',
  },
  input: {
    color: Colors.TEXT_COLOR_44,
    fontSize: Fonts.FONT_SIZE_16,
    lineHeight: CHANGE_BY_MOBILE_DPI(20),
    fontWeight: '400',
    paddingStart: CHANGE_BY_MOBILE_DPI(10),
    left: CHANGE_BY_MOBILE_DPI(20),
    width: '90%',
    bottom: CHANGE_BY_MOBILE_DPI(10),
  },
  clearIcon: {
    width: CHANGE_BY_MOBILE_DPI(20),
    height: CHANGE_BY_MOBILE_DPI(20),
    alignSelf: 'center',
    left: CHANGE_BY_MOBILE_DPI(20),
  },
});

export default styles;
