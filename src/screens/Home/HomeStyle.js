import {StyleSheet} from 'react-native';
import {Colors, Constant, Fonts} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingBottom: Constant.CHANGE_BY_MOBILE_DPI(70),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  imageStyle: {
    height: Constant.CHANGE_BY_MOBILE_DPI(32),
    width: Constant.CHANGE_BY_MOBILE_DPI(32),
  },
  notificationContainer: {
    height: Constant.CHANGE_BY_MOBILE_DPI(32),
    width: Constant.CHANGE_BY_MOBILE_DPI(32),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GUN_METAL,
  },
  topTabContainer: {
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    backgroundColor: Colors.GUN_METAL,
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
    padding: Constant.CHANGE_BY_MOBILE_DPI(4),
  },
  topTabSubContainer: {
    backgroundColor: Colors.DARK_JUNGLE_METAL,
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),

    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(16),
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  topTabFontStyle: {
    fontSize: Fonts.FONT_SIZE_15,
    fontFamily: Fonts.REGULAR,
    color: Colors.WHITE,
  },
  imageContainer: {
    height: Constant.CHANGE_BY_MOBILE_DPI(192),
    width: Constant.SCREEN_WIDTH - 40,
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  postImageStyle: {
    height: '100%',
    width: '100%',
  },
  profileImage: {
    height: Constant.CHANGE_BY_MOBILE_DPI(43),
    width: Constant.CHANGE_BY_MOBILE_DPI(43),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
  },
  marginLeftContainer: {
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  nameFontStyle: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    color: Colors.WHITE,
    fontFamily: Fonts.MEDIUM,
  },
  userNameFontStyle: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(14),
    color: Colors.MONSON,
    fontFamily: Fonts.LIGHT,
  },
  mainFlexDirectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  subFlexDirectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionFontStyle: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    color: Colors.WHITE,
    fontFamily: Fonts.LIGHT,
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  likeAndDislikeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(3),
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(7),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
    backgroundColor: Colors.GUN_METAL,
  },
  marginHorizontalContainer: {
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  likeCountFontStyle: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(13),
    color: Colors.WHITE,
    fontFamily: Fonts.MEDIUM,
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(10),
    includeFontPadding: true,
  },
  commentContainer: {
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
    backgroundColor: Colors.GUN_METAL,
    padding: Constant.CHANGE_BY_MOBILE_DPI(3),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(7),
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  commentFontStyle: {
    fontSize: Fonts.FONT_SIZE_12,
    color: Colors.WHITE,
    fontFamily: Fonts.LIGHT,
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(5),
    includeFontPadding: true,
    top: 1,
  },
  emojiContainer: {
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
    backgroundColor: Colors.GUN_METAL,
    padding: Constant.CHANGE_BY_MOBILE_DPI(3),
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(10),
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(5),
  },
  cardMainContainer: {
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(30),
  },
  contentContainerMArginVretical: {
    marginVertical: Constant.CHANGE_BY_MOBILE_DPI(20),
    paddingBottom: Constant.CHANGE_BY_MOBILE_DPI(70),
  },
  emojiContainer1: {
    zIndex: 100,
    position: 'absolute',
    bottom: Constant.CHANGE_BY_MOBILE_DPI(20),
    // alignSelf: 'center'
  },
  emojiWidthContainer: {
    width: Constant.SCREEN_WIDTH,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emojiFontStyle: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    color: Colors.WHITE,
    fontFamily: Fonts.BOLD,
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
  },
  postContainer: {},
  interestContainer: {},
  interestImage: {
    alignSelf: 'center',
    width: CHANGE_BY_MOBILE_DPI(120),
    height: CHANGE_BY_MOBILE_DPI(120),
  },
  btnStyle2: {
    backgroundColor: Colors.DARK_GRAY,
    width: Constant.SCREEN_WIDTH - 40,
    height: CHANGE_BY_MOBILE_DPI(48),
    marginVertical: CHANGE_BY_MOBILE_DPI(16),
  },
  btnTextStyle2: {
    fontSize: Fonts.FONT_SIZE_16,
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
    fontFamily: Fonts.LATO,
    fontWeight: '900',
  },
  alignContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
