import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { Colors, ScreenNames } from '../../global';
import Gradient from '../../components/Gradient/Gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import IMAGES from '../../global/images';
import VideoPlayer from 'react-native-video';
import AppButton from '../../components/AppButton/AppButton';

const SBLXInstructions = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar
        barColor={Colors.PRIMARY_COLOR}
        isLightBar={true}
        isTopSpace={true}
      />
      <Gradient
        children={
          <View style={styles.container}>
            <View style={styles.txtWrapper}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.8}
                style={styles.backBtn}>
                <Image source={IMAGES.BackArrow} style={styles.backArrow} />
              </TouchableOpacity>
              <Text style={styles.mainHeading}>Knaken</Text>
            </View>

            {/* <VideoPlayer
              source={{
                uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              }}
              style={styles.instructionVideo}
              controls={true}
              resizeMode="contain"
              paused={false}
              repeat={true}
            /> */}
            <Image source={IMAGES.VideoThumb} style={styles.instructionVideo} />

            <AppButton btnText="Go to Knaken" onPress={() => { }} />
          </View>
        }
      />
    </View>
  );
};

export default SBLXInstructions;
