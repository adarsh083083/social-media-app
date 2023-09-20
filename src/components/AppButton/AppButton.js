import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {TouchableHighlight} from 'react-native-gesture-handler';
import { Constant } from '../../global';

const AppButton = ({
  btnText,
  btnStyle = {},
  onPress = () => {},
  img,
  btnTextStyle = {},
}) => {
  return (
    <TouchableHighlight
      style={{marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(16)}}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={{...styles.btnStyle, ...btnStyle}}>
        <Text style={{...styles.btnTextStyle, ...btnTextStyle}}>{btnText}</Text>
      </TouchableOpacity>
    </TouchableHighlight>
  );
};

export default AppButton;
