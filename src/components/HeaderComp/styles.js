import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {FONT_SIZE_16} from '../../global/fonts';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    marginVertical: CHANGE_BY_MOBILE_DPI(10),
    paddingVertical: CHANGE_BY_MOBILE_DPI(10),
  },
  headerTitleStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerNameStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: FONT_SIZE_16,
    fontWeight: '700',
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
  },
  headerSubTitle: {
    color: Colors.TEXT_COLOR_44,
    fontSize: FONT_SIZE_16,
    fontWeight: '400',
    marginStart: CHANGE_BY_MOBILE_DPI(4),
  },
  settingStyle: {
    width: CHANGE_BY_MOBILE_DPI(32),
    height: CHANGE_BY_MOBILE_DPI(32),
  },
  reportedTitle: {
    fontSize: Fonts.FONT_SIZE_28,
    lineHeight: CHANGE_BY_MOBILE_DPI(30),
    color: Colors.WHITE,
  },
  iconStyle: {
    width: CHANGE_BY_MOBILE_DPI(20),
    height: CHANGE_BY_MOBILE_DPI(20),
  },
  notifyIconStyle: {
    width: CHANGE_BY_MOBILE_DPI(20),
    height: CHANGE_BY_MOBILE_DPI(20),
    position: 'relative',
    flexDirection: 'row',
    right: CHANGE_BY_MOBILE_DPI(20),
  },
});
export default styles;
