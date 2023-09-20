import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Fonts} from '../../global';

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: Colors.DESTRUCTIVE_COLOR,
    height: CHANGE_BY_MOBILE_DPI(32),
    marginBottom: CHANGE_BY_MOBILE_DPI(20),
    width: CHANGE_BY_MOBILE_DPI(140),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: CHANGE_BY_MOBILE_DPI(20),
  },
  btnStyle2: {
    backgroundColor: Colors.PURPLE,
    height: CHANGE_BY_MOBILE_DPI(32),
    marginBottom: CHANGE_BY_MOBILE_DPI(20),
    width: CHANGE_BY_MOBILE_DPI(140),
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
    backgroundColor: Colors.DARK_GRAY,
    marginTop: CHANGE_BY_MOBILE_DPI(32),
    height: CHANGE_BY_MOBILE_DPI(130),
    borderRadius: CHANGE_BY_MOBILE_DPI(16),
  },
  cardContainer: {
    height: CHANGE_BY_MOBILE_DPI(76),
    width: '100%',
    backgroundColor: Colors.CARD_BG,
    padding: CHANGE_BY_MOBILE_DPI(16),
    borderRadius: CHANGE_BY_MOBILE_DPI(16),
  },
  profileInfoContainer: {
    flexDirection: 'row',
  },
  profileImage: {
    width: CHANGE_BY_MOBILE_DPI(44),
    height: CHANGE_BY_MOBILE_DPI(44),
  },
  profileTextContainer: {
    marginHorizontal: CHANGE_BY_MOBILE_DPI(8),
  },
  profileTitle: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.WHITE,
    lineHeight: CHANGE_BY_MOBILE_DPI(20),
  },
  profileEmail: {
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.TEXT_COLOR_44,
    lineHeight: CHANGE_BY_MOBILE_DPI(20),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    bottom: CHANGE_BY_MOBILE_DPI(10),
  },
});
export default styles;
