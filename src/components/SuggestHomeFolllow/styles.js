import { StyleSheet } from 'react-native';
import { DIMENSIONS } from '../../styles';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { Constant, Colors, Fonts } from '../../global';

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
    textAlign: 'center',
  },
  para: {
    color: Colors.GREY_COLOR,
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.REGULAR,
    textAlign: 'center',
  },

  card: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: moderateVerticalScale(10),
  },
  userPic: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  btnStyle: {
    paddingVertical: 4,
    paddingHorizontal: 24,
    borderRadius: 50,
    marginLeft: 'auto',
    height: 'auto',
    marginRight: 0,
  },
  btnTextStyle: {
    fontSize: Fonts.FONT_SIZE_10,
  },


});

export default styles;
