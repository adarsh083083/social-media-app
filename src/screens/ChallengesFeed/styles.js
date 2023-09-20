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
  contentContainer: {
    flex: 1,
    height: '100%',
    paddingBottom: Constant.CHANGE_BY_MOBILE_DPI(50),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  headerIcon: {
    width: Constant.CHANGE_BY_MOBILE_DPI(36),
    height: Constant.CHANGE_BY_MOBILE_DPI(36),
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
  cardStyle1: {
    width: Constant.CHANGE_BY_MOBILE_DPI(170),
    height: Constant.CHANGE_BY_MOBILE_DPI(200),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(10),
    overflow: 'hidden',
    marginRight: Constant.CHANGE_BY_MOBILE_DPI(20),
    justifyContent: 'flex-end',
  },
  imageStyle1: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    top: 0,
    left: 0,
  },
  cardStyle1Txt: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(10),
    paddingBottom: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  subHeading: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.SEMIBOLD,
  },
  subHeading2: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.SEMIBOLD,
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  para: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.REGULAR,
  },
  PlusContainer: {
    height: Constant.CHANGE_BY_MOBILE_DPI(56),
    width: Constant.CHANGE_BY_MOBILE_DPI(56),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
    backgroundColor: Colors.PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  positionContainer: {
    position: 'absolute',
    bottom: Constant.CHANGE_BY_MOBILE_DPI(70),
    right: Constant.CHANGE_BY_MOBILE_DPI(20),
    zIndex: 99,
  },
  w80: {
    width: '79%',
  },
  challgeRequestCard: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(14),
    backgroundColor: Colors.DARK_GRAY,
    position: 'relative',
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  infoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: Constant.CHANGE_BY_MOBILE_DPI(14),
  },
  mt20: {
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  grayPara: {
    color: Colors.MEDIUM_GRAY,
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.SEMIBOLD,
  },
  challengersInfo: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_11,
    fontFamily: Fonts.BOLD,
  },
  challengeView: {
    width: '100%',
    height: SCREEN_HEIGHT - Constant.CHANGE_BY_MOBILE_DPI(120),
    resizeMode: 'cover',
  },
  profileBig: {
    width: Constant.CHANGE_BY_MOBILE_DPI(50),
    height: Constant.CHANGE_BY_MOBILE_DPI(50),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(50),
    borderWidth: Constant.CHANGE_BY_MOBILE_DPI(2),
    borderColor: Colors.PURPLE,
    padding: Constant.CHANGE_BY_MOBILE_DPI(1),
    backgroundColor: Colors.DARK_GRAY,
    top: -20,
  },
  profileSmall: {
    width: Constant.CHANGE_BY_MOBILE_DPI(40),
    height: Constant.CHANGE_BY_MOBILE_DPI(40),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(50),
    borderWidth: Constant.CHANGE_BY_MOBILE_DPI(2),
    borderColor: Colors.PURPLE,
    padding: Constant.CHANGE_BY_MOBILE_DPI(1),
    position: 'relative',
    left: Constant.CHANGE_BY_MOBILE_DPI(-14),
    backgroundColor: Colors.DARK_GRAY,
    zIndex: 2,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(50),
    borderWidth: 1,
    borderColor: Colors.DARK_GRAY,
  },
  amoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: Constant.CHANGE_BY_MOBILE_DPI(10),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  logoIcon: {
    width: Constant.CHANGE_BY_MOBILE_DPI(32),
    height: Constant.CHANGE_BY_MOBILE_DPI(32),
    resizeMode: 'contain',
  },
  challengeDescContainer: {
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    paddingBottom: Constant.CHANGE_BY_MOBILE_DPI(40),
  },
  circleShape: {
    width: Constant.CHANGE_BY_MOBILE_DPI(8),
    height: Constant.CHANGE_BY_MOBILE_DPI(8),
    backgroundColor: Colors.WHITE,
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(50),
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: Constant.CHANGE_BY_MOBILE_DPI(14),
  },
  btnStyle: {
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(40),
  },
  btnStyle2: {
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(40),
    backgroundColor: Colors.MEDIUM_GRAY,
  },
  btnTxt2: {
    color: Colors.DARK_GRAY,
  },
});

export default styles;
