import {StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../styles';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Constant, Colors, Fonts} from '../../global';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../global/constant';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  headerIcon: {
    width: Constant.CHANGE_BY_MOBILE_DPI(44),
    height: Constant.CHANGE_BY_MOBILE_DPI(44),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  mainHeading: {
    fontSize: Fonts.FONT_SIZE_20,
    fontFamily: Fonts.BOLD,
    color: Colors.WHITE,
  },
  para: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.REGULAR,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(10),
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  profileImage: {
    width: Constant.CHANGE_BY_MOBILE_DPI(50),
    height: Constant.CHANGE_BY_MOBILE_DPI(50),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(50),
    marginRight: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  titleName: {
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.BOLD,
    color: Colors.WHITE,
    textTransform: 'capitalize',
  },
  titleProfile: {
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.REGULAR,
    color: Colors.MEDIUM_GRAY,
  },
  inputContainer: {
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(50),
    backgroundColor: Colors.DARK_GRAY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    width: '90%',
    alignSelf: 'center',
    paddingRight: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  inputField: {
    width: '80%',
    paddingLeft: Constant.CHANGE_BY_MOBILE_DPI(20),
    color: Colors.WHITE,
  },
  clearIcon: {
    width: Constant.CHANGE_BY_MOBILE_DPI(30),
    height: Constant.CHANGE_BY_MOBILE_DPI(30),
    resizeMode: 'contain',
  },
});

export default styles;
