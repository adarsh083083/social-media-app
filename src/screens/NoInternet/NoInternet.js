import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
// import AppButton from '../../components/AppButton.js/AppButton';
import styles from './styles';
import Gradient from '../../components/Gradient/Gradient';
import IMAGES from '../../global/images';

const NoInternet = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden />
      <Gradient
        children={
          <View style={styles.mainContainer}>
            <View style={styles.alignContainer}>
              <Image
                resizeMode="center"
                source={IMAGES.SocialLogo}
                style={styles.logoStyle}
              />
            </View>

            <View>
              <Text style={styles.mainHeading}>
                Error with loading your feed
              </Text>
              <Text style={styles.para}>
                You don't have connection to the socialblox servers, there may
                be an issue with the servers or your internet connection
              </Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.btnStyle}>
              <Text style={styles.btnTextStyle}>Retry again</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

export default NoInternet;
