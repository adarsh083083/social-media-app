import {StyleSheet} from 'react-native';
import {Colors, Constant, Fonts} from '../../global';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  carouselContainer: {
    flex: 1,
  },
  btnTextStyle: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.LATO_BOLD,
    fontWeight: '900',
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(24),
  },
  btnTextStyle2: {
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.LATO_BOLD,
    fontWeight: '900',
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(24),
  },
  btnStyle: {
    backgroundColor: '#ac3df5',
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
  },
  btnStyle2: {
    backgroundColor: '#36343d',
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
  },
  btnContainer: {
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(15),
  },

  ImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyle: {
    height: '100%',
    width: '100%',
  },
  onBoardingImageContainer: {
    height: Constant.SCREEN_WIDTH / 1.1,
    width: Constant.SCREEN_WIDTH / 1.2,
  },
  buttonContainer: {
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(20),
    justifyContent: 'flex-end',
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(60),
  },
  flexContainer: {
    flex: 1,
  },
  alignItemCenter: {
    alignItems: 'center',
    // alignSelf: 'center',
    // height: Constant.CHANGE_BY_MOBILE_DPI(200),
    // width: Constant.CHANGE_BY_MOBILE_DPI(300),
  },
  homeBannerConntainer: {
    alignSelf: 'center',
  },
  headerConntainer: {
    verfiyBtn: {
      flex: 0.44,
      justifyContent: 'flex-end',
      width: '100%',
      marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
    },
    btnVerify: {
      justifyContent: 'flex-end',
      width: '100%',
      marginTop: Constant.CHANGE_BY_MOBILE_DPI(124),
      marginBottom: Constant.CHANGE_BY_MOBILE_DPI(24),
    },
    listContainer: {
      marginTop: Constant.CHANGE_BY_MOBILE_DPI(60),
      marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
      borderRadius: Constant.CHANGE_BY_MOBILE_DPI(10),
    },
    titleAttention: {
      color: Colors.TITLE_COLOR,
      lineHeight: Fonts.FONT_SIZE_30,
      fontFamily: Fonts.REGULAR,
      textAlign: 'center',
    },
    titleContainer: {
      marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
      marginTop: Constant.CHANGE_BY_MOBILE_DPI(32),
      justifyContent: 'center',
    },
    headerStyle: {marginTop: Constant.CHANGE_BY_MOBILE_DPI(24)},
    bottomView: {
      marginTop: Constant.CHANGE_BY_MOBILE_DPI(24),
    },
  },
});

export default styles;
