import { StyleSheet } from 'react-native';
import { Colors, Constant, Fonts } from '../../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countryCodeContainer: {
    width: Constant.SCREEN_WIDTH / 3.5,
    maxHeight: Constant.CHANGE_BY_MOBILE_DPI(300),
    backgroundColor: '#36343D',
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(8)
  },
  marginVertical: {

    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(15),
    marginVertical: Constant.CHANGE_BY_MOBILE_DPI(9)
    // marginBottom: Constant.CHANGE_BY_MOBILE_DPI(15)
  },
  dailCodeFontStyle: {
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.LIGHT,
    color: Colors.WHITE
  },
  contentContainerStyle: {
    marginVertical: Constant.CHANGE_BY_MOBILE_DPI(14)
  }
});
export default styles;
