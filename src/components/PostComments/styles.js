import {StyleSheet} from 'react-native';
import {Colors, Constant, Fonts} from '../../global';
export default styles = StyleSheet.create({
  commentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    bottom:Constant.CHANGE_BY_MOBILE_DPI(60)
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  commentUser: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 50,
    marginRight: 10,
  },
  commentName: {
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.BOLD,
    color: Colors.WHITE,
  },
  commentInfo: {
    fontSize: Fonts.FONT_SIZE_10,
    color: Colors.LIGHT_GRAY,
    marginBottom: 0,
    includeFontPadding: false,
  },
  commentTxt: {
    fontSize: Fonts.FONT_SIZE_14,
    lineHeight: 26,
    color: Colors.WHITE,
    includeFontPadding: false,
  },
  dotStyle: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: Colors.LIGHT_GRAY,
    includeFontPadding: false,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moreIcon: {
    width: 32,
    height: 20,
  },
  imageStyle: {width: 32, height: 20, resizeMode: 'contain'},
  optionWrapper: {
    position: 'absolute',
    right: 10,
    top: 40,
    backgroundColor: Colors.DARK_GRAY,
    borderRadius: 10,
    zIndex: 900,
  },
  optionList: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 40,
  },
});
