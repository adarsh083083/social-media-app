import {StyleSheet} from 'react-native';
import { Fonts } from '../../global';
 
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 50,
  },
  otpContainer: {
    width: '90%',
    height: 70,
    alignSelf: 'center',
  },
  codeInput: {
    color: 'white',
    fontFamily: Fonts.BOLD,
    borderWidth: 1,
    borderColor: '#36343D',
    backgroundColor: '#36343D',
    height: 70,
    borderRadius: 8,
    fontSize: 24,
  },
});
