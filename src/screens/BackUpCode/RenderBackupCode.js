import {Text, View} from 'react-native';
import {styles} from './BackUpCodeStyle';

export const RenderBackupCode = ({item, index}) => {
  return (
    <View style={styles.marginContainer}>
      <Text style={styles.backUpCodeFontStyle}>{item?.value}</Text>
    </View>
  );
};
