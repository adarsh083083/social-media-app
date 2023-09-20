// ProfileBlock.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import AppButton from '../AppButton/AppButton';
import styles from './styles';

const ProfileBlock = ({ profilePic, profileTitle, profileEmail }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.profileInfoContainer}>
          <Image source={profilePic} style={styles.profileImage} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileTitle}>{profileTitle}</Text>
            <Text style={styles.profileEmail}>{profileEmail}</Text>
          </View>
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

export default ProfileBlock;
