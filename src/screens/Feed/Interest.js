import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import HeaderSwitch from '../../components/HeaderSwitch/HeaderSwitch';
import {Colors} from '../../global';
import IMAGES from '../../global/images';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import styles from './InterestStyles';
import Gradient from '../../components/Gradient/Gradient';
import AppButton from '../../components/AppButton/AppButton';
import {InterestHooks} from './InterestHooks';

const Interest = () => {
  const onSelectSwitch = index => {};
  const {goToChooseInterest} = InterestHooks();
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
            <View style={styles.flexContainer}>
              <View style={styles.headerContainer}>
                <View style={styles.switchContainer}>
                  <HeaderSwitch
                    backArrowVisibility={true}
                    imageLogo={IMAGES.SocialLogo}
                    imageNotification={IMAGES.Notification}
                    selectionMode={1}
                    roundCorner={true}
                    option1={'Following'}
                    option2={'Interests'}
                    onSelectSwitch={onSelectSwitch}
                    selectionColor={Colors.DARK_GRAY}
                  />
                </View>
              </View>
            </View>
            <View style={styles.interestContainer}>
              <Image source={IMAGES.Interest} style={styles.interestImage} />
              <AppButton
                onPress={goToChooseInterest}
                btnStyle={styles.btnStyle2}
                btnTextStyle={styles.btnTextStyle2}
                btnText="Choose your interests"
              />
              <View style={styles.addContainer}>
                <TouchableOpacity style={styles.addButtonStyle}>
                  <Image source={IMAGES.AddIcon} style={styles.addIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default Interest;
