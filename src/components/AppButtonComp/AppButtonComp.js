import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const AppButtonComp = ({
  btnText,
  btnEditStyle = {},
  onPress = () => {},
  btnEditTextStyle = {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{...styles.btnEditStyle, ...btnEditStyle}}>
      <Text style={{...styles.btnEditTextStyle, ...btnEditTextStyle}}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButtonComp;
