import {StyleSheet} from 'react-native';
import {Colors} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const styles = StyleSheet.create({
  logoNoti: {
    width: CHANGE_BY_MOBILE_DPI(20),
    height: CHANGE_BY_MOBILE_DPI(20),
    alignSelf: 'center',
  },
  notifyContainer: {
    width: CHANGE_BY_MOBILE_DPI(38),
    height: CHANGE_BY_MOBILE_DPI(38),
    borderRadius: CHANGE_BY_MOBILE_DPI(19),
    justifyContent: 'center',
    backgroundColor: Colors.BLACK_PRIMARY,
  },
  logoStyle: {
    width: CHANGE_BY_MOBILE_DPI(38),
    height: CHANGE_BY_MOBILE_DPI(38),
  },
  switchContainer: {flex: 1, flexDirection: 'row'},
  switchInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  switchMainContainer: {
    height: CHANGE_BY_MOBILE_DPI(40),
    width: CHANGE_BY_MOBILE_DPI(199),
    backgroundColor: Colors.BLACK,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  followersContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  interestContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
