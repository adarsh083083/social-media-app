import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Constant, Fonts} from '../../global';
const styless = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    marginTop: CHANGE_BY_MOBILE_DPI(16),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(16),
  },
  profileImage: {
    width: CHANGE_BY_MOBILE_DPI(44),
    height: CHANGE_BY_MOBILE_DPI(44),
  },
  titleContainer: {
    marginHorizontal: CHANGE_BY_MOBILE_DPI(8),
  },
  titleProfile: {
    color: Colors.TEXT_COLOR_44,
    fontSize: Fonts.FONT_SIZE_14,
    lineHeight: CHANGE_BY_MOBILE_DPI(20),
    fontWeight: '400',
  },
  titleName: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_16,
    lineHeight: CHANGE_BY_MOBILE_DPI(20),
    fontWeight: '700',
  },
  challengeContainer: {
    height: Constant.SCREEN_HEIGHT / 1,
    marginTop: Constant.SCREEN_HEIGHT / 14,
  },
  challengeHeader: {
    color: Colors.WHITE,
    flex: 0.94,
    textAlign: 'center',
    fontSize: Fonts.FONT_SIZE_20,
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
    fontWeight: '700',
    marginTop: CHANGE_BY_MOBILE_DPI(35),
  },
  searchContainer: {
    marginHorizontal: CHANGE_BY_MOBILE_DPI(16),
    marginTop: CHANGE_BY_MOBILE_DPI(16),
  },
  searchTitle: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_16,
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
    fontWeight: '700',
  },
  containerSearch: {
    flexDirection: 'row',
    marginTop: CHANGE_BY_MOBILE_DPI(10),
  },
  imageClear: {
    width: CHANGE_BY_MOBILE_DPI(20),
    height: CHANGE_BY_MOBILE_DPI(20),
    top: CHANGE_BY_MOBILE_DPI(20),
  },
  dataContainer: {marginTop: CHANGE_BY_MOBILE_DPI(12)},
  noUserTitle: {
    textAlign: 'center',
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    fontWeight: '700',
    fontSize: Fonts.FONT_SIZE_14,
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
    color: Colors.WHITE,
  },
});
export default styless;
