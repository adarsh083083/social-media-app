import {StyleSheet} from 'react-native';
import {DIMENSIONS} from '../../styles';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Constant, Colors, Fonts} from '../../global';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  btnTextStyle: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    fontFamily: Fonts.BOLD,
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(24),
  },
  btnStyle: {
    backgroundColor: '#ac3df5',
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
  },
  btnContainer: {
    marginBottom: moderateScale(30),
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileWrapper: {
    width: Constant.CHANGE_BY_MOBILE_DPI(200),
    height: Constant.CHANGE_BY_MOBILE_DPI(200),
    alignItems: 'center',
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  profileCircle: {
    width: '100%',
    height: '100%',
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(200),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  profileAdd: {
    position: 'absolute',
    bottom: Constant.CHANGE_BY_MOBILE_DPI(2),
    right: Constant.CHANGE_BY_MOBILE_DPI(10),
    width: Constant.CHANGE_BY_MOBILE_DPI(40),
    height: Constant.CHANGE_BY_MOBILE_DPI(40),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(200),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  profileText: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    color: Colors.WHITE,
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    textAlign: 'center',
    lineHeight: Constant.CHANGE_BY_MOBILE_DPI(26),
    fontFamily: Fonts.LATO,
  },
  modalWrapper: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'flex-end',
  },
  closeBtn: {
    position: 'absolute',
    top: Constant.CHANGE_BY_MOBILE_DPI(0),
    left: Constant.CHANGE_BY_MOBILE_DPI(0),
    width: '100%',
    height: '100%',
  },
  btnWrapper: {
    backgroundColor: Colors.EBONY_CLAY,
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(10),
    gap: Constant.CHANGE_BY_MOBILE_DPI(2),
    borderTopLeftRadius: Constant.CHANGE_BY_MOBILE_DPI(30),
    borderTopRightRadius: Constant.CHANGE_BY_MOBILE_DPI(30),
  },
  modalBtnStyle: {
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(0),
  },
  btnTxt: {
    color: Colors.MEDIUM_GRAY,
    textAlign: 'left',
  },
  btnCloseTxt: {
    color: Colors.RED_COLOR,
    textAlign: 'left',
  },
});

export default styles;
