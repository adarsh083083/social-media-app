import {StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../styles';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Constant, Colors, Fonts} from '../../global';
import {SCREEN_HEIGHT} from '../../global/constant';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  txtWrapper: {
    marginTop: DIMENSIONS.HEIGHT * 0.05,
    paddingHorizontal: 20,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  backBtn: {
    width: 38,
    height: 38,
    marginBottom: moderateScale(20),
  },
  backArrow: {
    width: 38,
    height: 38,
    resizeMode: 'cover',
  },

  mainHeading: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_20,
    marginBottom: moderateVerticalScale(20),
    fontFamily: Fonts.BOLD,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subHeading: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.SEMIBOLD,
  },
  instructionVideo: {
    backgroundColor: Colors.DARK_GRAY,
    height: SCREEN_HEIGHT - 220,
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 14,
    marginBottom: 25,
  },
});

export default styles;
