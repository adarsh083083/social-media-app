import {StyleSheet} from 'react-native';
import {Colors, Constant, Fonts} from '../../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../../global/constant';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
  },
  backgroundImage: {
    height: Constant.SCREEN_HEIGHT / 2,
    resizeMode: 'cover',
    backgroundColor: 'red',
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
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
    color: Colors.TEXT_COLOR_44,
    fontWeight: Fonts.BOLD,
    fontSize: Fonts.FONT_SIZE_14,
    // Add any additional text styles as needed
  },
  container: {
    marginTop: CHANGE_BY_MOBILE_DPI(16),
  },
  row: {
    flexDirection: 'row',
  },
});
export default styles;
