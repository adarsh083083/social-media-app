import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import IMAGES from '../../global/images';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../global';

const HeaderComp = ({ title, subTitle }) => {
  const navigation = useNavigation()
  const goToSetting = () => {
    navigation.navigate(ScreenNames.SETTING_SCREEN)
  }
  return (
    <View style={styles.header}>
      <View style={styles.headerTitleStyle}>
        <View style={styles.headerNameStyle}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerSubTitle}>{subTitle}</Text>
          {typeof reportedTitle != 'undefined' && (
            <View>
              <Text style={styles.reportedTitle}>{reportedTitle}</Text>
            </View>
          )}
        </View>
        <TouchableOpacity onPress={goToSetting}>
          <Image source={IMAGES.Settings} style={styles.settingStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComp;
