// VideoComp.js
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import AppButton from '../AppButton/AppButton';

const VideoComp = ({
  video,
  imageRocket,
  titleRocket,
  graphImage,
  graphTitle,
  imageMute,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image resizeMode="contain" source={video} style={styles.video} />
        <View style={styles.infoContainer}>
          <View style={styles.rocketContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                resizeMode="contain"
                source={imageRocket}
                style={styles.rocketImage}
              />
              <Text style={styles.rocketTitle}>{titleRocket}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image
                resizeMode="contain"
                source={graphImage}
                style={styles.graphImage}
              />
              <Text style={styles.graphTitle}>{graphTitle}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.muteIconContainer}>
            <View style={styles.muteIconBackground}>
              <Image source={imageMute} style={styles.muteIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          // onPress={() => navigation.navigate(ScreenNames.ADD_SBLX)}
          btnStyle={styles.btnStyle}
          btnTextStyle={styles.btnTextStyle2}
          btnText="Remove"
        />
        <AppButton
          // onPress={goToRegister}
          btnStyle={styles.btnStyle2}
          btnTextStyle={styles.btnTextStyle2}
          btnText="Allow"
        />
      </View>
    </View>
  );
};

export default VideoComp;
