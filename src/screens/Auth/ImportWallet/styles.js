import {StyleSheet} from 'react-native';
import {Colors, Constant, Fonts} from '../../../global';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleNoStyle: {
    color: Colors.TITLE_COLOR,
    fontFamily: Fonts.LIGHT,
    fontSize: 10,
  },
  titleStyle: {
    color: Colors.TITLE_COLOR,
    fontFamily: Fonts.MEDIUM,
    marginTop: moderateVerticalScale(4),
  },
  verfiyBtn: {
    flex: 0.44,
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: moderateVerticalScale(20),
  },
  containerList: {
    backgroundColor: Colors.GREY,
    margin: moderateScale(2),
    width: '32.3%',
    height: moderateVerticalScale(60),
    borderRadius: moderateScale(10),
  },
  innerContainer: {
    marginHorizontal: moderateVerticalScale(10),
    marginVertical: moderateVerticalScale(4),
  },
  titleContainer: {
    marginVertical: Constant.CHANGE_BY_MOBILE_DPI(16),
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: moderateScale(18),
  },
  btnVerify: {
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: moderateVerticalScale(124),
    marginBottom: moderateVerticalScale(24),
  },
  buttonContainer: {
    flex: 1,
    marginTop: moderateVerticalScale(124),
    justifyContent: 'flex-end',
    marginBottom: moderateScale(24),
  },
  listContainer: {
    marginTop: moderateVerticalScale(60),
    marginHorizontal: 20,
    borderRadius: moderateScale(10),
  },
  positionContainer: {
    position: 'absolute',
    top: Constant.CHANGE_BY_MOBILE_DPI(2),
    left: Constant.CHANGE_BY_MOBILE_DPI(2),
  },
});
export default styles;
