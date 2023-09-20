import {StyleSheet} from 'react-native';
import {Colors, Constant, Fonts} from '../../global';

export const styles = StyleSheet.create({
  headerStyle: {
    height: 32,
    width: 32,
  },
  innerContainer: {
    height: 144,
    backgroundColor: '#2D2F32',
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(38),
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(16),
    padding: Constant.CHANGE_BY_MOBILE_DPI(16),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(16),
  },

  textStyle: {
    fontWeight: '900',
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(13),
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(24),
    color: Colors.WHITE,
  },
  chalange: {
    fontWeight: '900',
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(13),
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(24),
    color: '#87888A',
  },
  titleText: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    fontWeight: '900',
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(24),
    color: Colors.WHITE,
  },
  innerTextStyle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: Colors.WHITE,
  },
  innerTextStyle1: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: Colors.WHITE,
    alignSelf: 'center',
  },
  boxStyle: {
    flexDirection: 'row',
  },
  textBox: {
    flexDirection: 'row',
  },
  imageContainer: {
    flexDirection: 'row',
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(26),
  },
  topImage: {
    borderRadius: 50,
    borderWidth: 3,
    height: 58,
    width: 58,
    borderColor: '#AC3DF5',
    backgroundColor: 'white',
    position: 'absolute',
    top: 15,
    left: 16,
  },
  user2: {
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    width: Constant.CHANGE_BY_MOBILE_DPI(48),
    padding: Constant.CHANGE_BY_MOBILE_DPI(2),
  },
  bottomImage: {
    borderWidth: 3,
    borderRadius: 40,
    height: Constant.CHANGE_BY_MOBILE_DPI(37),
    width: Constant.CHANGE_BY_MOBILE_DPI(37),
    borderColor: '#AC3DF5',
  },
  timerText: {
    color: Colors.WHITE,
  },
  user1: {
    height: Constant.CHANGE_BY_MOBILE_DPI(32),
    width: Constant.CHANGE_BY_MOBILE_DPI(32),
  },
  logoContainer: {
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoView: {
    flexDirection: 'row',
  },
  logoStyle: {
    height: Constant.CHANGE_BY_MOBILE_DPI(24),
    width: Constant.CHANGE_BY_MOBILE_DPI(24),
  },
  valueStyle: {
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(8),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  valueStyle2: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    fontWeight: '500',
    lineHeight: 32,
    color: Colors.WHITE,
  },
  valueText: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    fontWeight: '500',
    lineHeight: 32,
    color: '#999A9C',
  },
  introStyle: {
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(17),
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(16),
  },
  reqHeader: {
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(16),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(17),
  },
  titleStyle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '900',
    color: Colors.WHITE,
  },
  timer: {
    justifyContent: 'center',
    backgroundColor: '#424446',
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(8),
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(4),
    borderRadius: 32,
    marginRight: Constant.CHANGE_BY_MOBILE_DPI(8),
  },
  innerText: {
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(8),
  },
  textTipStyle: {
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(16),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(30),
  },
  btnStyle: {
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(30),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(24),
  },
  dot: {
    color: Colors.WHITE,
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginRight: Constant.CHANGE_BY_MOBILE_DPI(4),
  },
  dotStyle: {
    flexDirection: 'row',
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(24),
  },
  btnContainer: {
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(15),
  },
  btnStyle: {
    backgroundColor: '#ac3df5',
    height: 48,
  },
  btnStyle2: {
    backgroundColor: '#36343d',
    height: 48,
  },
  btnTextStyle: {
    fontSize: 16,
    fontFamily: Fonts.BOLD,
    lineHeight: 24,
  },
  btnTextStyle2: {
    fontSize: 16,
    fontFamily: Fonts.BOLD,
    lineHeight: 24,
  },
});
