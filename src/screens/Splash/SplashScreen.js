import React from 'react';
import {Image, Text, View} from 'react-native';
import {Colors} from '../../global/index';
import {styles} from './SplashStyles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import Gradient from '../../components/Gradient/Gradient';
import {SplashHook} from './SplashHook';
import IMAGES from '../../global/images';

const SplashScreen = () => {
  const {onLoad} = SplashHook();
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar
        barColor={Colors.PRIMARY_COLOR}
        isLightBar={true}
        isTopSpace={true}
      />
      <Gradient
        children={
          <View style={styles.alignContainer}>
            <Image source={IMAGES.socialBloxLogo} style={styles.imageStyle} />
          </View>
        }
      />
    </View>
  );
};
export default SplashScreen;
