import {StyleSheet} from 'react-native';
import {Colors, Constant, Fonts} from '../../../global';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {CHANGE_BY_MOBILE_DPI} from '../../../global/constant';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleNoStyle: {
    color: Colors.TITLE_COLOR,
    fontFamily: Fonts.LIGHT,
    fontSize: Fonts.FONT_SIZE_10,
  },
  titleStyle: {
    color: Colors.TITLE_COLOR,
    fontFamily: Fonts.REGULAR,
    fontSize: Fonts.FONT_SIZE_12,
    top: CHANGE_BY_MOBILE_DPI(15),
  },
  verfiyBtn: {
    flex: 0.44,
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: CHANGE_BY_MOBILE_DPI(20),
  },
  containerList: {
    backgroundColor: Colors.GREY,
    margin: CHANGE_BY_MOBILE_DPI(5),
    width: '30.3%',
    height: CHANGE_BY_MOBILE_DPI(56),
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
  },
  innerContainer: {
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
    marginVertical: CHANGE_BY_MOBILE_DPI(4),
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnVerify: {
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: CHANGE_BY_MOBILE_DPI(124),
    marginBottom: CHANGE_BY_MOBILE_DPI(24),
  },
  buttonContainer: {
    flex: 1,
    marginTop: moderateVerticalScale(100),
    justifyContent: 'flex-end',
    marginBottom: moderateScale(24),
  },
  listContainer: {
    marginTop: CHANGE_BY_MOBILE_DPI(60),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    borderRadius: CHANGE_BY_MOBILE_DPI(10),
  },
  titleAttention: {
    color: Colors.TEXT_COLOR_80,
    lineHeight: CHANGE_BY_MOBILE_DPI(30),
    fontFamily: Fonts.LIGHT,
    textAlign: 'center',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(24),
  },
  positionContainer: {
    position: 'absolute',
    left: Constant.CHANGE_BY_MOBILE_DPI(2),
  },
  titleSeedStyle: {
    color: Colors.TEXT_COLOR_80,
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
    fontFamily: Fonts.BOLD,
    textAlign: 'center',
    fontSize: CHANGE_BY_MOBILE_DPI(20),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(24),
    bottom: CHANGE_BY_MOBILE_DPI(10),
  },
  btnStyle: {
    backgroundColor: '#36343D',
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  btnStyle2: {
    backgroundColor: Colors.PURPLE,
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  btnTextStyle2: {
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.BOLD,
    lineHeight: 24,
  },
});
export default styles;
