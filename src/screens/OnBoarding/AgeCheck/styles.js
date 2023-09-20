import {StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../../styles';
import {Colors} from '../../../global';
import {moderateScale} from 'react-native-size-matters';
import {GRAY} from '../../../global/colors';
export const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: DIMENSIONS.HEIGHT * 0.32,
  },
  textStyle: {
    color: Colors.WHITE,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: moderateScale(60),
  },
  downButton: {
    marginTop: moderateScale(20),
  },
  btnStyle: {
    backgroundColor: GRAY,
  },
});
