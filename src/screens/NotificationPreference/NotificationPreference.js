import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Gradient from '../../components/Gradient/Gradient';
import Header from '../../components/Header/Header';
import IMAGES from '../../global/images';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import AppButton from '../../components/AppButton/AppButton';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {Colors, ScreenNames} from '../../global';
import {notificationPreferenceHooks} from './notificationPreferenceHooks';

const NotificationPreference = () => {
  const navigation = useNavigation();
  const {notificationState, toggleNotification} = notificationPreferenceHooks();

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
            <FlatList
              data={notificationState}
              // stickyHeaderIndices={[0]}
              ListHeaderComponent={
                <View style={styles.txtWrapper}>
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.8}
                    style={styles.backBtn}>
                    <Image source={IMAGES.BackArrow} style={styles.backArrow} />
                  </TouchableOpacity>
                  <Text style={styles.mainHeading}>Notifications</Text>
                </View>
              }
              ListFooterComponent={
                <View style={styles.footerArea}>
                  <Text style={styles.footerPara}>
                    We only want to get access for notifications to give you the
                    best experience for the app. This is not nessecary to use
                    the app!
                  </Text>
                  <AppButton
                    btnStyle={styles.btnStyle}
                    btnTextStyle={styles.btnTextStyle}
                    btnText="Save"
                    onPress={() => {}}
                  />
                </View>
              }
              renderItem={({item, index}) => (
                <View style={styles.notificationCard}>
                  <View style={styles.w90}>
                    <Text style={styles.subHeading}>{item.title}</Text>
                    <Text style={styles.para}>{item.para}</Text>
                  </View>
                  <Switch
                    trackColor={{
                      false: Colors.BLASTIC_SEA,
                      true: Colors.PURPLE_COLOR,
                    }}
                    thumbColor={item.state ? Colors.WHITE : Colors.WHITE}
                    ios_backgroundColor={Colors.PURPLE_COLOR}
                    onValueChange={() => toggleNotification(index)}
                    value={item.state}
                  />
                </View>
              )}
            />
          </View>
        }
      />
    </View>
  );
};

export default NotificationPreference;
