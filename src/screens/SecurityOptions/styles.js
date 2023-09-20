import {StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../styles';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Constant, Colors, Fonts} from '../../global';

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
  para: {
    color: Colors.GREY_COLOR,
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.REGULAR,
  },
  userPic: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: moderateVerticalScale(10),
  },
  OptionIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  w90: {
    width: '90%',
  },
});

export default styles;
