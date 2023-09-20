import {StyleSheet} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';
import {Colors} from '../../../global';
export const styles = StyleSheet.create({
  innerContainer: {
    marginBottom: moderateVerticalScale(16),
    flex: 1,
  },
  imageContainer: {
    marginTop: moderateVerticalScale(145),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 155,
    width: 197,
  },
  textTitle: {
    marginTop: moderateVerticalScale(106),
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 22,
    color: Colors.WHITE,
    lineHeight: 26.4,
  },
  tokenText: {
    fontSize: 12,
    color: Colors.WHITE,
    lineHeight: 20,
    marginTop: moderateVerticalScale(16),
  },
  btnStyle: {
    marginTop: moderateVerticalScale(40),
  },
  buttonStyle: {
    marginTop: moderateVerticalScale(20),
  },
});
