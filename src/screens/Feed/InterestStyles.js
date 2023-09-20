import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {LATO} from '../../global/fonts';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
  },
  btnStyle2: {
    backgroundColor: Colors.DARK_GRAY,
    height: 48,
    marginVertical: CHANGE_BY_MOBILE_DPI(16),
  },
  btnTextStyle2: {
    fontSize: Fonts.FONT_SIZE_16,
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
    fontFamily: Fonts.LATO,
    fontWeight: '900',
  },
  actionButtonIcon: {
    fontSize: Fonts.FONT_SIZE_20,
    height: CHANGE_BY_MOBILE_DPI(22),
    color: Colors.WHITE,
  },
  addButtonStyle: {
    width: CHANGE_BY_MOBILE_DPI(56),
    height: CHANGE_BY_MOBILE_DPI(56),
    borderRadius: CHANGE_BY_MOBILE_DPI(28),
    backgroundColor: Colors.PURPLE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {alignItems: 'center', justifyContent: 'center'},
  switchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    marginTop: CHANGE_BY_MOBILE_DPI(24),
  },
  interestContainer: {
    flex: 1.5,
  },
  interestImage: {
    alignSelf: 'center',
    width: CHANGE_BY_MOBILE_DPI(120),
    height: CHANGE_BY_MOBILE_DPI(120),
  },
  addContainer: {
    flex: 1,
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: CHANGE_BY_MOBILE_DPI(16),
    right: CHANGE_BY_MOBILE_DPI(20),
  },
  addIcon: {width: CHANGE_BY_MOBILE_DPI(14), height: CHANGE_BY_MOBILE_DPI(14)},
});
export default styles;
