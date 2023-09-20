import {Colors} from '../../global';
import { StyleSheet } from 'react-native';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

const styles = StyleSheet.create({
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
