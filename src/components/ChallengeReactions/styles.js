import {StyleSheet} from 'react-native';
import {Colors} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {FONT_SIZE_10, FONT_SIZE_13} from '../../global/fonts';

const styles = StyleSheet.create({
  selectedListItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: CHANGE_BY_MOBILE_DPI(40),
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(10),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(8),
    marginVertical: CHANGE_BY_MOBILE_DPI(8),
    height: CHANGE_BY_MOBILE_DPI(40),
    borderWidth: 0.7,
    fontSize: FONT_SIZE_10,
    paddingHorizontal: CHANGE_BY_MOBILE_DPI(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PURPLE,
    flexDirection: 'row',
  },
  itemSelected: {
    color: Colors.WHITE,
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemSelectedText: {
    fontSize: CHANGE_BY_MOBILE_DPI(14),
    color: Colors.WHITE,
  },
  reactionContainer: {flexDirection: 'row', bottom: CHANGE_BY_MOBILE_DPI(8)},
  imageLeft: {
    width: CHANGE_BY_MOBILE_DPI(20),
    height: CHANGE_BY_MOBILE_DPI(20),
  },
  titleChallenge: {
    color: Colors.WHITE,
    fontWeight: '700',
    lineHeight: CHANGE_BY_MOBILE_DPI(24),
    fontSize: FONT_SIZE_13,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(8),
  },
  imageRight: {
    width: CHANGE_BY_MOBILE_DPI(20),
    height: CHANGE_BY_MOBILE_DPI(20),
  },
});
export default styles;
