import { StyleSheet } from 'react-native';
import { SEMIBOLD } from '../../../global/fonts';
import { Colors, Constant, Fonts } from '../../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../../global/constant';
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
    marginTop: CHANGE_BY_MOBILE_DPI(24),
    marginBottom: CHANGE_BY_MOBILE_DPI(24),
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
    marginVertical: CHANGE_BY_MOBILE_DPI(16),
  },
  btnTextStyle2: {
    fontSize: 16,
    fontFamily: Fonts.BOLD,
    lineHeight: 24,
  },
  imageContainer: {
    marginTop: CHANGE_BY_MOBILE_DPI(101),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 188,
    height: 188,
  },
  titleContainer: {
    width: '90%',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: CHANGE_BY_MOBILE_DPI(101),
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
