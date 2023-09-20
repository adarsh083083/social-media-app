import {StyleSheet} from 'react-native';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors, Constant, Fonts} from '../../global';
import {FONT_SIZE_16, FONT_SIZE_28} from '../../global/fonts';
import {scale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
  },
  buyContainer: {
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
  },
  buyTitle: {
    color: Colors.WHITE,
    fontWeight: '900',
    fontSize: FONT_SIZE_28,
    lineHeight: 32,
  },
  buySubTitle: {
    fontWeight: '500',
    fontSize: FONT_SIZE_16,
    lineHeight: 24,
    color: Colors.WHITE,
  },
  flexDirectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(40),
  },
  countryInputStyle: {
    height: Constant.CHANGE_BY_MOBILE_DPI(56),
    backgroundColor: '#36343D',
    width: Constant.SCREEN_WIDTH / 3.5,
    marginRight: Constant.CHANGE_BY_MOBILE_DPI(7),
    borderTopLeftRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    borderTopRightRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
  },
  positionContainer: {
    position: 'absolute',
    top: Constant.CHANGE_BY_MOBILE_DPI(120),
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  textInput: {
    height: Constant.CHANGE_BY_MOBILE_DPI(56),
    backgroundColor: '#36343D',
    width: Constant.SCREEN_WIDTH / 1.7,
    borderTopLeftRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    borderTopRightRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
  },
  modalContainer: {
    height: Constant.SCREEN_HEIGHT / 1.07,
    borderTopRightRadius: Constant.CHANGE_BY_MOBILE_DPI(16),
    borderTopLeftRadius: Constant.CHANGE_BY_MOBILE_DPI(16),
    elevation: 2,
  },
  headerFontstyle: {
    fontSize: Fonts.FONT_SIZE_20,
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  positionContainer: {
    position: 'absolute',
    right: Constant.CHANGE_BY_MOBILE_DPI(20),
    top: Constant.CHANGE_BY_MOBILE_DPI(0),
  },
  walletCardContainer: {
    backgroundColor: Colors.SHIP_GREY,
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(16),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    padding: Constant.CHANGE_BY_MOBILE_DPI(15),
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(15),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  imageStyle: {
    height: Constant.CHANGE_BY_MOBILE_DPI(32),
    width: Constant.CHANGE_BY_MOBILE_DPI(32),
  },
  walletAmmountFontStyle: {
    fontSize: Fonts.FONT_SIZE_22,
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.WHITE,
  },
  afterDecimalFontStyle: {
    fontSize: Fonts.FONT_SIZE_15,
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.WHITE,
  },
  dollarFontStyle: {
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.LIGHT,
    color: Colors.WHITE,
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginLeftContainer: {
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  walletFontStyle: {
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.MEDIUM,
    color: Colors.WHITE,
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(7),
  },
  copyConatiner: {
    backgroundColor: Colors.MULLED_WINE,
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(15),
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(5),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
  },
  flexContainer: {
    flex: 1,
  },
  tokenFontStyle: {
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.LIGHT,
    color: Colors.WHITE,
  },
  walletContainer: {
    backgroundColor: Colors.CHARCOAL,
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(16),
    padding: Constant.CHANGE_BY_MOBILE_DPI(15),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(10),
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    paddingTop: Constant.CHANGE_BY_MOBILE_DPI(17),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  nameFontStyle: {
    fontSize: Fonts.FONT_SIZE_13,
    fontFamily: Fonts.LIGHT,
    color: Colors.WHITE,
  },
  dateFontStyle: {
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.LIGHT,
    color: Colors.STAR_DUST,
    includeFontPadding: true,
  },
  sblxFontStyle: {
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.VIVID_GREEN,
  },
  priceFontStyle: {
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.LIGHT,
    color: Colors.STAR_DUST,
    includeFontPadding: true,
  },
  marginRight: {
    marginRight: Constant.CHANGE_BY_MOBILE_DPI(18),
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(5),
  },
  contentContainerStyle: {},
  alignRight: {
    alignItems: 'flex-end',
  },
  widthStyle: {
    width: Constant.SCREEN_WIDTH / 2.19,
  },
  copyMainCotnainer: {
    flex: 2.5,
  },
  btnStyle: {
    height: CHANGE_BY_MOBILE_DPI(48),
    backgroundColor: Colors.PURPLE,
    borderRadius: 100,
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontSize: scale(14),
    color: 'white',
    fontFamily: Fonts.BOLD,
  },
  bottomView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0, //Here is the trick
  },
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
  paymentContainer: {
    marginTop: CHANGE_BY_MOBILE_DPI(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentTitle: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_14,
  },
  transactionContainer: {
    marginTop: CHANGE_BY_MOBILE_DPI(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
  },
  transactionTitle: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_14,
    textAlign: 'center',
    lineHeight: CHANGE_BY_MOBILE_DPI(22),
  },
  supportTitle: {
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_14,
    textAlign: 'center',
    lineHeight: CHANGE_BY_MOBILE_DPI(22),
    marginTop: CHANGE_BY_MOBILE_DPI(20),
  },
  buttonContainer: {marginBottom: 20},
  safeAreaView: {
    height: 200,
    width: 200,
  },
  webViewStyle: {
    marginTop: 20,
  },
});

export default styles;
