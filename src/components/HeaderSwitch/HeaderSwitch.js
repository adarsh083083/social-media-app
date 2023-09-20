import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Colors} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import styles from './styles';

const HeaderSwitch = ({
  navigation,
  selectionMode,
  roundCorner,
  option1,
  option2,
  onSelectSwitch,
  selectionColor,
  imageLogo,
  imageNotification,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);

  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View style={styles.switchContainer}>
      <View style={styles.switchInnerContainer}>
        <Image
          resizeMode="center"
          source={imageLogo}
          style={styles.logoStyle}
        />

        <View
          style={[
            styles.switchMainContainer,
            {
              backgroundColor: selectionColor,
              borderRadius: getRoundCorner ? 25 : 0,
            },
          ]}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => updatedSwitchData(1)}
            style={[
              styles.followersContainer,
              {
                backgroundColor:
                  getSelectionMode == 1 ? selectionColor : Colors.BG_COLOR,
                borderRadius: getRoundCorner ? 25 : 0,
              },
            ]}>
            <Text
              style={{
                color:
                  getSelectionMode == 1
                    ? Colors.TEXT_COLOR_70
                    : Colors.TEXT_COLOR_70,
              }}>
              {option1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            TouchableOpacity
            activeOpacity={1}
            onPress={() => updatedSwitchData(2)}
            style={[
              styles.interestContainer,
              {
                backgroundColor:
                  getSelectionMode == 2 ? selectionColor : Colors.BG_COLOR,
                borderRadius: getRoundCorner ? 25 : 0,
              },
            ]}>
            <Text
              style={{
                color:
                  getSelectionMode == 2
                    ? Colors.TEXT_COLOR_44
                    : Colors.TEXT_COLOR_70,
              }}>
              {option2}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.notifyContainer}>
          <Image
            resizeMode="center"
            source={imageNotification}
            style={styles.logoNoti}
          />
        </View>
      </View>
    </View>
  );
};
export default HeaderSwitch;
