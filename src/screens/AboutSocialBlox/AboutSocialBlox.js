import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Gradient from '../../components/Gradient/Gradient';
import IMAGES from '../../global/images';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {Colors} from '../../global';
import {aboutSocialBloxHooks} from './aboutSocialBloxHooks';

const AboutSocialBlox = () => {
  const navigation = useNavigation();
  const {aboutContent} = aboutSocialBloxHooks();
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar
        barColor={Colors.PRIMARY_COLOR}
        isLightBar={true}
        isTopSpace={true}
      />
      <Gradient
        children={
          <View style={styles.mainContainer}>
            <View style={styles.txtWrapper}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.8}
                style={styles.backBtn}>
                <Image source={IMAGES.BackArrow} style={styles.backArrow} />
              </TouchableOpacity>
              <Text style={styles.mainHeading}>About SocialBlox</Text>
            </View>
            <FlatList
              data={aboutContent}
              renderItem={({item}) => (
                <View style={styles.card}>
                  <Text style={styles.subHeading}>{item.title}</Text>
                  <Text style={styles.para}>{item.desc}</Text>
                </View>
              )}
            />
          </View>
        }
      />
    </View>
  );
};

export default AboutSocialBlox;
