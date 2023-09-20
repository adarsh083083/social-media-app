import { StyleSheet } from 'react-native';
import { Colors, Constant } from '../../global/index';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  alignContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    height: Constant.CHANGE_BY_MOBILE_DPI(120),
    width: Constant.CHANGE_BY_MOBILE_DPI(120)
  }
});
