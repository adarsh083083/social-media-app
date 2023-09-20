// ImageComp.js
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import IMAGES from '../../global/images';
import AppButton from '../AppButton/AppButton';
import styles from './styles';

const ImageComp = ({ imageProfile, index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfoContainer}>
        <View style={styles.profileImageContainer}>
          <Image source={imageProfile} style={styles.profileImage} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Michiel</Text>
            <Text style={styles.profileSubtitle}>Michiel</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={IMAGES.MoreIcon} style={styles.moreIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.descriptionText}>
          Proud to see our name shining
          <Text style={styles.linkText}> - at FC Emmen Football Club</Text>
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={IMAGES.Ground}
          style={styles.groundImage}
        />
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
    </View>
  );
};

export default ImageComp;
