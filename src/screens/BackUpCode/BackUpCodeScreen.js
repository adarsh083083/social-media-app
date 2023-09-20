import { FlatList, PermissionsAndroid, Platform, ScrollView, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from './BackUpCodeStyle';
import Header from '../../components/Header/Header';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { Colors, Constant } from '../../global';
import Gradient from '../../components/Gradient/Gradient';
import IMAGES from '../../global/images';
import AppButton from '../../components/AppButton/AppButton';
import MyTextInput from '../../components/TextInput/MyTextInput';
import CheckBox from '@react-native-community/checkbox';
import { BackUpCodeHooks } from './BackUpCodeHooks';
import STATIC_DATA from '../../global/arrays';
import { useRoute } from '@react-navigation/native';
import { RenderBackupCode } from './RenderBackupCode';
import ViewShot from 'react-native-view-shot';

const BackUpCodeScreen = () => {
  const { toggleCheckBox, setToggleCheckBox, goToProfile } = BackUpCodeHooks();
  const route = useRoute();
  const Code = route?.params?.code || {};
  const BackupCode = Code?.backupCodes;

  const viewShotRef = useRef(null);
  //This function is for screenshot
  const captureScreenshot = async () => {
    if (viewShotRef.current) {
      try {
        const uri = await viewShotRef.current.capture();
        console.log('Screenshot captured:', uri);
      } catch (error) {
        console.error('Error capturing or saving screenshot:', error);
      }
    }
  };

  return (
    <ViewShot
      ref={viewShotRef}
      options={{ format: 'jpg', quality: 0.9 }}
      style={styles.mainContainer}>
      <FocusAwareStatusBar
        barColor={Colors.PRIMARY_COLOR}
        isLightBar={true}
        isTopSpace={true}
      />
      <Gradient
        children={
          <View style={styles.mainContainer}>
            <View style={styles.flexContainer}>
              <View>
                <Header
                  backArrowVisibility={true}
                  image={IMAGES.socialBloxLogo}
                  title="Backup codes"
                  onPress={() => navigation.goBack()}
                />
              </View>
              <Text style={styles.yourIdentityDescriptionStyle}>
                If you lose your phone or can’t recieve a code via text message
                or an authentication app, then you can use these codes to get
                back into your account. Store them in a safe place.
              </Text>
              <Text style={styles.yourIdentityDescriptionStyle}>
                Each code can only be used once. You can also get new codes if
                you’re worried this set has been stolen, or if you’ve already
                used most of them.
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList
                  data={Code.backupCodes}
                  scrollEnabled={false}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => <RenderBackupCode item={item} />}
                />
              </ScrollView>
            </View>
            <View style={styles.bottomContainer}>
              <View style={styles.checkBoxContainer}>
                <CheckBox
                  style={styles.checkboxAndroid}
                  boxType={'square'}
                  value={toggleCheckBox}
                  onValueChange={setToggleCheckBox}
                  tintColors={{
                    true: Colors.PURPLE,
                    false: Colors.WHITE,
                  }}
                  onTintColor={Colors.WHITE}
                  onFillColor={Colors.WHITE}
                  hideBox={false}
                // onCheckColorr={Colors.WHITE}
                />
                <Text style={styles.termsAndConditionFontStyle}>
                  Please confirm that you’ve store the backup codes in a safe
                  place.
                </Text>
              </View>
              <AppButton
                onPress={captureScreenshot}
                btnStyle={styles.btnStyle}
                btnTextStyle={styles.btnTextStyle2}
                btnText="Add screenshot to gallery"
              />
              <AppButton
                onPress={goToProfile}
                btnStyle={styles.btnStyle2}
                btnTextStyle={styles.btnTextStyle2}
                btnText="Next"
              />
            </View>
          </View>
        }
      />
    </ViewShot>
  );
};

export default BackUpCodeScreen;
