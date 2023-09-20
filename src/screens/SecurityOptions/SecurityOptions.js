import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import Gradient from '../../components/Gradient/Gradient';
import IMAGES from '../../global/images';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { Colors } from '../../global';
import AppButton from '../../components/AppButton/AppButton';

const SecurityOptions = () => {
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
          <View style={styles.mainContainer}>
            <View style={styles.txtWrapper}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.8}
                style={styles.backBtn}>
                <Image source={IMAGES.BackArrow} style={styles.backArrow} />
              </TouchableOpacity>
              <Text style={styles.mainHeading}>Security</Text>
            </View>

            <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer}>
              <View style={styles.w90}>
                <Text style={styles.subHeading}>Edit phone number</Text>
                <Text style={styles.para}>
                  Phone number can be used to login or as 2FA
                </Text>
              </View>
              <Image source={IMAGES.AngleRight} style={styles.OptionIcon} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer}>
              <View style={styles.w90}>
                <Text style={styles.subHeading}>Edit your e-mail</Text>
                <Text style={styles.para}>
                  E-mail can be used to login or as 2FA
                </Text>
              </View>
              <Image source={IMAGES.AngleRight} style={styles.OptionIcon} />
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

export default SecurityOptions;
