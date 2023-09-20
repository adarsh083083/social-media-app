// import {moderateScale, scale} from 'react-native-size-matters';
import {Colors, Constant} from '../../global';
import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const styles = StyleSheet.create({
  btnStyle: {
    height: CHANGE_BY_MOBILE_DPI(48),
    backgroundColor: Colors.PURPLE,
    borderRadius: CHANGE_BY_MOBILE_DPI(20),
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: 'white',
    fontWeight: 'bold',
  },
  btnColorStyle: {
    height: CHANGE_BY_MOBILE_DPI(48),
    backgroundColor: 'grey',
    borderRadius: CHANGE_BY_MOBILE_DPI(8),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnColorTextStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  imageStyle: {
    width: Constant.CHANGE_BY_MOBILE_DPI(20),
    height: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  labelStyle: {
    marginStart: Constant.CHANGE_BY_MOBILE_DPI(10),
    bottom: 5,
    fontWeight: '600',
  },
  btnDark: {
    backgroundColor: Colors.DARK_GRAY,
  },
});
export default styles;
