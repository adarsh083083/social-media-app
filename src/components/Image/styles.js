import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: Colors.DESTRUCTIVE_COLOR,
    height: CHANGE_BY_MOBILE_DPI(32),
    marginBottom: CHANGE_BY_MOBILE_DPI(20),
    width: CHANGE_BY_MOBILE_DPI(150),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: CHANGE_BY_MOBILE_DPI(20),
  },
  btnStyle2: {
    backgroundColor: Colors.PURPLE,
    height: CHANGE_BY_MOBILE_DPI(32),
    marginBottom: CHANGE_BY_MOBILE_DPI(20),
    width: CHANGE_BY_MOBILE_DPI(150),
    marginTop: CHANGE_BY_MOBILE_DPI(20),
  },
  btnTextStyle2: {
    fontSize: Fonts.FONT_SIZE_10,
    lineHeight: 24,
  },
  btnTextStyle: {
    fontSize: Fonts.FONT_SIZE_10,
    lineHeight: 24,
  },
  container: {
    marginTop: CHANGE_BY_MOBILE_DPI(40),
    height: CHANGE_BY_MOBILE_DPI(400),
  },
  profileInfoContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  profileImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: CHANGE_BY_MOBILE_DPI(44),
    height: CHANGE_BY_MOBILE_DPI(44),
  },
  profileTextContainer: {
    marginStart: CHANGE_BY_MOBILE_DPI(10),
  },
  profileName: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_16,
  },
  profileSubtitle: {
    color: Colors.TEXT_COLOR_44,
    fontSize: Fonts.FONT_SIZE_14,
  },
  moreIcon: {
    width: CHANGE_BY_MOBILE_DPI(24),
    height: CHANGE_BY_MOBILE_DPI(24),
  },
  textContainer: {
    marginTop: CHANGE_BY_MOBILE_DPI(8),
  },
  descriptionText: {
    fontSize: Fonts.FONT_SIZE_14,
    color: Colors.WHITE,
  },
  linkText: {
    fontSize: Fonts.FONT_SIZE_14,
    color: Colors.PURPLE_COLOR,
  },
  imageContainer: {
    top: CHANGE_BY_MOBILE_DPI(8),
  },
  groundImage: {
    width: '100%',
    height: CHANGE_BY_MOBILE_DPI(343),
    bottom: CHANGE_BY_MOBILE_DPI(60),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    bottom: CHANGE_BY_MOBILE_DPI(130),
  },
});
export default styles;
