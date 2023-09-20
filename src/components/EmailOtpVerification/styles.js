import {StyleSheet} from 'react-native';
import {Constant, Fonts} from '../../global';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(50),
  },
  otpContainer: {
    width: '90%',
    height: Constant.CHANGE_BY_MOBILE_DPI(70),
    alignSelf: 'center',
  },
  codeInput: {
    color: 'white',
    fontFamily: Fonts.BOLD,
    borderWidth: 1,
    borderColor: '#36343D',
    backgroundColor: '#36343D',
    height: Constant.CHANGE_BY_MOBILE_DPI(70),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(24),
  },
});
