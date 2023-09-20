import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {Colors, ScreenNames} from '../../global';
import Gradient from '../../components/Gradient/Gradient';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import IMAGES from '../../global/images';
import AppButton from '../../components/AppButton/AppButton';

const UploadChallengeProofStatus = () => {
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
            <View style={styles.fixedCard}>
              <View>
                <Image source={IMAGES.CheckWhite} style={styles.checkImg} />
                <Text style={styles.mainHeading}>
                  You've successfully submitted your proof!
                </Text>
                <Text style={styles.subHeading}>
                  The blockchain will process your proof, it may take a few
                  minutes before the upload is publicly available
                </Text>
              </View>
              <AppButton btnStyle={styles.btnStyle} btnText="Continue" />
            </View>
            <Image source={IMAGES.ChallengeFrame} style={styles.imageStyle} />
          </View>
        }
      />
    </View>
  );
};

export default UploadChallengeProofStatus;
