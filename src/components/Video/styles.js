import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK_PRIMARY,
    borderBottomLeftRadius: CHANGE_BY_MOBILE_DPI(20),
    borderBottomRightRadius: CHANGE_BY_MOBILE_DPI(20),
    borderTopRightRadius: CHANGE_BY_MOBILE_DPI(20),
    borderTopLeftRadius: CHANGE_BY_MOBILE_DPI(20),
  },
  video: {
    width: '100%',
    height: CHANGE_BY_MOBILE_DPI(530),
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  rocketContainer: {
    backgroundColor: Colors.DARK_GRAY,
    bottom: CHANGE_BY_MOBILE_DPI(40),
    height: CHANGE_BY_MOBILE_DPI(28),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: CHANGE_BY_MOBILE_DPI(94),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    borderRadius: CHANGE_BY_MOBILE_DPI(16),
    flexDirection: 'row',
  },
  rocketImage: {
    width: CHANGE_BY_MOBILE_DPI(16),
    height: CHANGE_BY_MOBILE_DPI(16),
  },
  rocketTitle: {
    color: Colors.WHITE,
    marginStart: CHANGE_BY_MOBILE_DPI(4),
    fontSize: Fonts.FONT_SIZE_14,
  },
  graphImage: {
    width: CHANGE_BY_MOBILE_DPI(16),
    height: CHANGE_BY_MOBILE_DPI(16),
    tintColor: Colors.TEXT_COLOR_44,
  },
  graphTitle: {
    marginStart: CHANGE_BY_MOBILE_DPI(4),
    color: Colors.TEXT_COLOR_44,
    fontSize: Fonts.FONT_SIZE_14,
  },
  muteIconContainer: {
    bottom: CHANGE_BY_MOBILE_DPI(40),
  },
  muteIconBackground: {
    backgroundColor: Colors.DARK_GRAY,
    width: CHANGE_BY_MOBILE_DPI(28),
    height: CHANGE_BY_MOBILE_DPI(28),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: CHANGE_BY_MOBILE_DPI(14),
  },
  muteIcon: {
    width: CHANGE_BY_MOBILE_DPI(20),
    height: CHANGE_BY_MOBILE_DPI(20),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    justifyContent: 'space-evenly',
    bottom: CHANGE_BY_MOBILE_DPI(16),
  },
  btnStyle: {
    backgroundColor: Colors.DESTRUCTIVE_COLOR,
    height: CHANGE_BY_MOBILE_DPI(32),
    marginBottom: CHANGE_BY_MOBILE_DPI(20),
    width: CHANGE_BY_MOBILE_DPI(140),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: CHANGE_BY_MOBILE_DPI(20),
  },
  btnStyle2: {
    backgroundColor: Colors.PURPLE,
    height: CHANGE_BY_MOBILE_DPI(32),
    marginBottom: CHANGE_BY_MOBILE_DPI(20),
    width: CHANGE_BY_MOBILE_DPI(140),
    marginTop: CHANGE_BY_MOBILE_DPI(20),
  },
  btnTextStyle2: {
    fontSize: Fonts.FONT_SIZE_10,
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
  },
  btnTextStyle: {
    fontSize: Fonts.FONT_SIZE_10,
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
  },
});
export default styles;
