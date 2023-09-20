import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../../global/constant';
import {Colors, Constant, Fonts} from '../../../global';
import {scale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollView: {flex: 1},
  flexContainer: {
    flex: 1,
    margin: CHANGE_BY_MOBILE_DPI(16),
  },
  cardContainer: {
    backgroundColor: Colors.EBONY_CLAY_PRIMARY,
    height: CHANGE_BY_MOBILE_DPI(150),
    borderRadius: CHANGE_BY_MOBILE_DPI(16),
    marginTop: CHANGE_BY_MOBILE_DPI(20),
  },
  btnStyle2: {
    backgroundColor: Colors.PURPLE,
    height: Constant.CHANGE_BY_MOBILE_DPI(40),
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    width: '100%',
  },
  btnTextStyle2: {
    fontSize: Fonts.FONT_SIZE_16,
    lineHeight: 24,
    fontFamily: Fonts.LATO,
    fontWeight: '900',
  },
  socialBloxContainer: {
    flexDirection: 'row',
    marginVertical: CHANGE_BY_MOBILE_DPI(18),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(12),
  },
  socialBloxLogo: {
    width: CHANGE_BY_MOBILE_DPI(32),
    height: CHANGE_BY_MOBILE_DPI(32),
  },
  copiedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleCopied: {
    fontSize: Fonts.FONT_SIZE_22,
    color: Colors.WHITE,
    fontWeight: '900',
    lineHeight: CHANGE_BY_MOBILE_DPI(32),
    marginStart: CHANGE_BY_MOBILE_DPI(12),
  },
  title: {
    fontSize: Fonts.FONT_SIZE_14,
    color: Colors.TEXT_COLOR_80,
    fontFamily: Fonts.LATO,
    fontWeight: '500',
    marginStart: CHANGE_BY_MOBILE_DPI(12),
    lineHeight: CHANGE_BY_MOBILE_DPI(16.8),
  },
  btnStyle: {
    width: CHANGE_BY_MOBILE_DPI(110),
    height: CHANGE_BY_MOBILE_DPI(28),
    backgroundColor: Colors.EBONY_CLAY_SECONDARY,
    borderRadius: CHANGE_BY_MOBILE_DPI(20),
    bottom: CHANGE_BY_MOBILE_DPI(5),
  },
  btnTextStyle: {
    fontSize: Fonts.FONT_SIZE_10,
    lineHeight: CHANGE_BY_MOBILE_DPI(20),
    color: Colors.TITLE_COLOR,
    fontWeight: '500',
  },
  btnEditStyle: {
    height: CHANGE_BY_MOBILE_DPI(40),
    backgroundColor: Colors.DARK_GRAY,
    borderRadius: CHANGE_BY_MOBILE_DPI(20),
    marginTop: CHANGE_BY_MOBILE_DPI(10),
    width: '100%',
  },
  btnEditTextStyle: {
    fontSize: Fonts.FONT_SIZE_16,
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
    color: Colors.TITLE_COLOR,
    fontWeight: '500',
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: CHANGE_BY_MOBILE_DPI(24),
  },
  profileImage: {
    width: CHANGE_BY_MOBILE_DPI(54),
    height: CHANGE_BY_MOBILE_DPI(54),
  },
  outerContainer: {
    flexDirection: 'row',
  },
  followerContainer: {
    marginStart: CHANGE_BY_MOBILE_DPI(14),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleFollowers: {
    fontSize: CHANGE_BY_MOBILE_DPI(18),
    fontWeight: '900',
    color: Colors.WHITE,
    lineHeight: CHANGE_BY_MOBILE_DPI(20),
  },
  subTitleFollowers: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    marginStart: CHANGE_BY_MOBILE_DPI(4),
    fontWeight: '900',
    color: Colors.TEXT_COLOR_70,
    fontFamily: Fonts.REGULAR,
    lineHeight: CHANGE_BY_MOBILE_DPI(20),
  },
  followingContainer: {
    marginStart: CHANGE_BY_MOBILE_DPI(14),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleFollowing: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontWeight: '900',
    fontFamily: Fonts.LATO,
    color: Colors.WHITE,
    marginStart: CHANGE_BY_MOBILE_DPI(8),
  },
  subTitleFollowing: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    marginStart: CHANGE_BY_MOBILE_DPI(4),
    fontWeight: '900',
    fontFamily: Fonts.LATO,
    color: Colors.TEXT_COLOR_70,
    lineHeight: CHANGE_BY_MOBILE_DPI(20),
  },
  postContainer: {
    flexDirection: 'row',
    marginTop: CHANGE_BY_MOBILE_DPI(4),
  },
  postStyle: {
    marginStart: CHANGE_BY_MOBILE_DPI(14),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlePost: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontWeight: '900',
    color: Colors.WHITE,
  },
  subTitlePost: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    marginStart: CHANGE_BY_MOBILE_DPI(4),
    fontWeight: '900',
    color: Colors.TEXT_COLOR_70,
    lineHeight: CHANGE_BY_MOBILE_DPI(20),
  },
  completedContainer: {
    marginStart: CHANGE_BY_MOBILE_DPI(14),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleComplete: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    fontWeight: '900',
    color: Colors.WHITE,
    marginStart: CHANGE_BY_MOBILE_DPI(8),
  },
  subTitleComplete: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    marginStart: CHANGE_BY_MOBILE_DPI(4),
    fontWeight: '900',
    color: Colors.TEXT_COLOR_70,
    lineHeight: CHANGE_BY_MOBILE_DPI(20),
    fontFamily: Fonts.LATO_REGULAR,
  },
  introContainer: {
    marginTop: CHANGE_BY_MOBILE_DPI(24),
  },
  introTitle: {
    fontSize: Fonts.FONT_SIZE_16,
    color: Colors.WHITE,
    fontFamily: Fonts.LATO_REGULAR,
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
  },
  editButtonContainer: {marginTop: CHANGE_BY_MOBILE_DPI(32)},

  // ItemChallenges
  challengeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BG_COLOR,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
    borderRadius: CHANGE_BY_MOBILE_DPI(16),
    flex: 1,
    marginVertical: CHANGE_BY_MOBILE_DPI(32),
  },
  challengeInnerContainer: {
    width: '100%',
  },
  challengeImage: {
    width: '100%',
    height: CHANGE_BY_MOBILE_DPI(530),
  },
  challengeOuterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    bottom: CHANGE_BY_MOBILE_DPI(50),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
  },
  voteContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BG_COLOR,
    width: CHANGE_BY_MOBILE_DPI(94),
    borderRadius: CHANGE_BY_MOBILE_DPI(16),
    height: CHANGE_BY_MOBILE_DPI(28),
  },
  rocketContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(8),
  },
  rocketImage: {
    width: CHANGE_BY_MOBILE_DPI(16),
    height: CHANGE_BY_MOBILE_DPI(16),
  },
  rocketTitle: {
    marginStart: CHANGE_BY_MOBILE_DPI(4),
    fontWeight: '700',
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.WHITE,
  },
  graphContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(8),
  },
  graphImage: {
    width: CHANGE_BY_MOBILE_DPI(16),
    height: CHANGE_BY_MOBILE_DPI(16),
    tintColor: Colors.TITLE_COLOR,
  },
  titleGraph: {
    marginStart: CHANGE_BY_MOBILE_DPI(4),
    fontWeight: '700',
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.TITLE_COLOR,
  },
  muteContainer: {
    width: CHANGE_BY_MOBILE_DPI(32),
    height: CHANGE_BY_MOBILE_DPI(32),
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BG_COLOR,
    overflow: 'hidden',
  },
  muteImage: {
    width: CHANGE_BY_MOBILE_DPI(16),
    height: CHANGE_BY_MOBILE_DPI(16),
  },
  listContainer: {
    flexDirection: 'row',
  },
  flexDirectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //
    // marginTop: Constant.CHANGE_BY_MOBILE_DPI(40)
  },
  imageStyle: {
    height: Constant.CHANGE_BY_MOBILE_DPI(72),
    width: Constant.CHANGE_BY_MOBILE_DPI(72),
  },
  followerFontStyle: {
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.BOLD,
    color: Colors.WHITE,
    includeFontPadding: false,
  },
  followerSmallFontStyle: {
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.LIGHT,
    color: Colors.STAR_DUST,
    includeFontPadding: false,
  },
  dot: {
    height: Constant.CHANGE_BY_MOBILE_DPI(5),
    width: Constant.CHANGE_BY_MOBILE_DPI(5),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
    backgroundColor: Colors.WHITE,
  },
  marginContainer: {
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  marginLeft: {
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(15),
  },
});

export default styles;
