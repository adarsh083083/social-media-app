import {StyleSheet} from 'react-native';
import {Colors, Constant, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    marginTop: Constant.SCREEN_HEIGHT * 0.11,
  },
  inputStyle: {
    height: Constant.CHANGE_BY_MOBILE_DPI(56),
    backgroundColor: Colors.GREY,
    width: Constant.SCREEN_WIDTH / 3.5,
    marginRight: Constant.CHANGE_BY_MOBILE_DPI(7),
    borderTopLeftRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    borderTopRightRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
  },
  bottomContainer: {
    flex: 0.88,
    position: 'absolute',
    bottom: Constant.CHANGE_BY_MOBILE_DPI(10),
    width: '100%',
  },
  titleHeader: {
    marginTop: CHANGE_BY_MOBILE_DPI(16),
    flexDirection: 'row',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(16),
  },
  titleYourChallange: {
    color: Colors.TEXT_COLOR_44,
    fontWeight: Fonts.BOLD,
    fontSize: Fonts.FONT_SIZE_16,
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
  },
  titleName: {
    color: Colors.WHITE,
    fontWeight: Fonts.BOLD,
    fontSize: Fonts.FONT_SIZE_16,
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
    marginStart: CHANGE_BY_MOBILE_DPI(2),
  },
  inputContainer: {marginTop: CHANGE_BY_MOBILE_DPI(24)},
  titleStyle: {
    marginHorizontal: CHANGE_BY_MOBILE_DPI(16),
    bottom: CHANGE_BY_MOBILE_DPI(8),
    color: Colors.WHITE,
    fontWeight: Fonts.BOLD,
  },
  input: {
    backgroundColor: Colors.DARK_GRAY,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(16),
  },
  flatlistContainer: {
    marginTop: CHANGE_BY_MOBILE_DPI(24),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(16),
  },
  listHeaderTitle: {
    color: Colors.WHITE,
    fontWeight: Fonts.BOLD,
    fontSize: Fonts.FONT_SIZE_16,
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
  },
  btnStyle: {width: '88%'},
});
export default styles;
