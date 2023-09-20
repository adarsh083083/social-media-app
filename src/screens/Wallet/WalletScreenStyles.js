import { StyleSheet } from 'react-native';
import { Colors, Constant, Fonts } from '../../global';
import { moderateVerticalScale, moderateScale } from 'react-native-size-matters';
import { REGULAR, SEMIBOLD } from '../../global/fonts';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
  },
  btnVerify: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: moderateVerticalScale(24),
    marginBottom: moderateVerticalScale(24),
  },
  verfiyBtn: {
    justifyContent: 'flex-end',
    width: '100%',
  },

  btnStyle: {
    backgroundColor: Colors.PURPLE_COLOR,
    height: 48,
  },
  btnStyle2: {
    backgroundColor: Colors.DARK_GRAY,
    height: 48,
    marginVertical: moderateVerticalScale(16),
  },
  btnTextStyle2: {
    fontSize: 16,
    fontFamily: Fonts.BOLD,
    lineHeight: 24,
  },
  imageContainer: {
    marginTop: moderateVerticalScale(101),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 188,
    height: 188,
  },
  titleContainer: {
    width: '90%',
    marginHorizontal: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateVerticalScale(101),
  },
  titleStyle: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(22),
    color: Colors.TITLE_COLOR,
    textAlign: 'center',
    fontFamily: SEMIBOLD
  },
  detailFontStyle: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(14),
    color: Colors.TITLE_COLOR,
    textAlign: 'center',
    lineHeight: 24,
    fontFamily: Fonts.LIGHT
  }
});
export default styles;
