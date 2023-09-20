import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Colors, Constant, Fonts} from '../../../global';
// import {Constant} from '../../global';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  alignItemCenter: {
    alignItems: 'center',
    bottom: Constant.CHANGE_BY_MOBILE_DPI(60),
  },
  titleTextStyle: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_28,
    fontFamily: Fonts.BOLD,
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(33.3),
  },
  textStyle: {
    color: '#999A9C',
    fontSize: 28,
    fontFamily: Fonts.BOLD,
  },
  subTitleTextStyle: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.LATO_REGULAR,
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(2),
  },
  descriptionStyle: {
    color: Colors.WHITE,
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.REGULAR,
    textAlign: 'center',
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(24),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(27),
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    bottom: Constant.CHANGE_BY_MOBILE_DPI(80),
  },
  btnStyle: {
    backgroundColor: '#36343D',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  btnTextStyle: {
    color: Colors.WHITE,
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.LATO_BOLD,
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(24),
  },
  indicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
});

export default styles;
