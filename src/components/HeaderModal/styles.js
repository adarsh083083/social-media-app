import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.YOUR_BACKGROUND_COLOR,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(16),
    height: CHANGE_BY_MOBILE_DPI(70),
    marginTop: CHANGE_BY_MOBILE_DPI(20),
  },
  image: {
    width: CHANGE_BY_MOBILE_DPI(32),
    height: CHANGE_BY_MOBILE_DPI(32),
  },
  title: {
    fontSize: Fonts.FONT_SIZE_20,
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
    fontWeight: '700',
    color: Colors.WHITE,
  },
});
export default styles;
