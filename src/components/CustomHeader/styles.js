import {StyleSheet} from 'react-native';
import {Colors, Constant} from '../../global';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: Constant.CHANGE_BY_MOBILE_DPI(60),
    backgroundColor: '#25272A',
  },
  backButton: {
    position: 'absolute',
    left: Constant.CHANGE_BY_MOBILE_DPI(16),
    zIndex: 1,
  },
  title: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(20),
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.WHITE,
  },
  placeholderView: {
    flex: 1, // This view takes up remaining space for centering
  },
});

export default styles;
