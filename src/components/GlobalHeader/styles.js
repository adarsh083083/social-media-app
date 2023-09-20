import { StyleSheet } from 'react-native';
import { Colors, Constant, Fonts } from '../../global';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(20)
  },
  headerFontStyle: {
    fontSize: Fonts.FONT_SIZE_20,
    color: Colors.WHITE,
    fontFamily: Fonts.SEMIBOLD
  },
  rightSvgContainer: {
  },
  marginRight: {
    marginRight: Constant.CHANGE_BY_MOBILE_DPI(20)
  }

});
export default styles;
