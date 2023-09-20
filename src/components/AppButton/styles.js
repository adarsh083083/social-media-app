import {Colors, Constant, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btnStyle: {
    height: CHANGE_BY_MOBILE_DPI(48),
    backgroundColor: Colors.PURPLE,
    borderRadius: 100,
    // marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  btnTextStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: 'white',
    fontFamily: Fonts.BOLD,
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
    fontFamily: Fonts.BOLD,
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
    fontFamily: Fonts.BOLD,
  },
  btnEditStyle: {
    height: CHANGE_BY_MOBILE_DPI(40),
    backgroundColor: Colors.DARK_GRAY,
    borderRadius: CHANGE_BY_MOBILE_DPI(20),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  btnEditTextStyle: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: 'white',
    fontWeight: 'bold',
  },
});
export default styles;
