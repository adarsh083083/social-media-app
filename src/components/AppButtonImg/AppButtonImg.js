import {  Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Copied from '../../assets/svgs/Copy.svg';
 
const AppButtonImg = ({
  btnText,
  btnStyle = {},
  onPress = () => {},
  goBack,
  backArrowVisibility,
  btnTextStyle = {},
  image,
  imageStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{...styles.btnStyle, ...btnStyle}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{...styles.btnTextStyle, ...btnTextStyle}}>{btnText}</Text>
        {backArrowVisibility && (
          <TouchableOpacity onPress={goBack} style={styles.backArrowContainer}>
            <BackArrowSvg />
          </TouchableOpacity>
        )}
        {!!image ? (
          <Copied width={14} height={14} style={{marginStart: 10}} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default AppButtonImg;
