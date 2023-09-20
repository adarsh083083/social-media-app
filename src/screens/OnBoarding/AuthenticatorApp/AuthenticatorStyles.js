import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../../global/constant';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
  },
  btnVerify: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  verfiyBtn: {
    justifyContent: 'flex-end',
    width: '100%',
  },

  btnStyle: {
    backgroundColor: Colors.PURPLE_COLOR,
    height: CHANGE_BY_MOBILE_DPI(48),
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
  },
  btnStyle2: {
    backgroundColor: Colors.DARK_GRAY,
    height: CHANGE_BY_MOBILE_DPI(48),
    marginVertical: CHANGE_BY_MOBILE_DPI(16),
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
    fontFamily: Fonts.LATO,
  },
  btnTextStyle2: {
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
    fontFamily: Fonts.LATO,
    fontWeight: '900',
    fontSize: CHANGE_BY_MOBILE_DPI(16),
  },
  imageContainer: {
    marginTop: CHANGE_BY_MOBILE_DPI(101),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: CHANGE_BY_MOBILE_DPI(188),
    height: CHANGE_BY_MOBILE_DPI(188),
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: CHANGE_BY_MOBILE_DPI(101),
    bottom: CHANGE_BY_MOBILE_DPI(24),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(24),
  },
  titleStyle: {
    fontSize: Fonts.FONT_SIZE_14,
    color: Colors.TEXT_COLOR_80,
    textAlign: 'center',
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
    fontFamily: Fonts.LATO,
    fontWeight: '500',
  },
  authenticatorTitle: {
    fontFamily: Fonts.LATO,
    fontWeight: '900',
    color: Colors.WHITE,
    fontSize: CHANGE_BY_MOBILE_DPI(28),
    lineHeight: CHANGE_BY_MOBILE_DPI(36.6),
  },
  authenticatorContainer: {
    bottom: CHANGE_BY_MOBILE_DPI(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
