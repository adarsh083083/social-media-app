import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../../global/constant';
// import {Constant} from '../../global';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(10),
  },
  alignItemCenter: {
    alignItems: 'center',
    bottom: CHANGE_BY_MOBILE_DPI(60),
  },
  titleTextStyle: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_28,
    fontFamily: Fonts.BOLD,
  },
  textStyle: {
    color: Colors.TEXT_COLOR_70,
    fontSize: Fonts.FONT_SIZE_28,
    fontFamily: Fonts.BOLD,
  },
  subTitleTextStyle: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.LATO_REGULAR,
    marginTop: CHANGE_BY_MOBILE_DPI(8),
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
  },
  descriptionStyle: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.REGULAR,
    textAlign: 'center',
    marginTop: CHANGE_BY_MOBILE_DPI(27),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(24),
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
  },
  btnStyle: {
    backgroundColor: '#36343D',
    borderRadius: CHANGE_BY_MOBILE_DPI(25),
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(15),
    paddingVertical: CHANGE_BY_MOBILE_DPI(10),
  },
  btnTextStyle: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.SEMIBOLD,
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
    flexDirection: 'row',
  },
  titleSteps: {
    color: Colors.TEXT_COLOR_70,
    fontFamily: Fonts.LATO,
    fontWeight: '900',
    lineHeight: CHANGE_BY_MOBILE_DPI(33.6),
    fontSize: Fonts.FONT_SIZE_28,
  },
});

export default styles;
