import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {scale} from 'react-native-size-matters';
import {Colors} from '../../global';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
  },
  btnStyle: {
    backgroundColor: '#36343D',
    height: CHANGE_BY_MOBILE_DPI(48),
    marginBottom: CHANGE_BY_MOBILE_DPI(20),
  },
  btnStyle2: {
    backgroundColor: Colors.PURPLE,
    height: CHANGE_BY_MOBILE_DPI(48),
    marginBottom: CHANGE_BY_MOBILE_DPI(20),
  },
  btnTextStyle2: {
    fontSize: scale(16),
    fontFamily: 'bold',
    lineHeight: 24,
  },
});
