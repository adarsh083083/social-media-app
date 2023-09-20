import {StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../../styles';
import {Colors} from '../../../global';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    marginTop: DIMENSIONS.HEIGHT * 0.173,
    alignItems: 'center',
  },
  loaderImage: {
    height: 99,
    width: 99,
  },
  textContainer: {
    marginTop: DIMENSIONS.HEIGHT * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 22,
    color: Colors.WHITE,
    lineHeight: 24.3,
  },
  textStyle: {
    fontSize: 14,
    color: Colors.WHITE,
    lineHeight: 24,
  },
});
