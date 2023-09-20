import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import Gradient from '../../../components/Gradient/Gradient';
import { Colors, ScreenNames } from '../../../global';
import styles from './AuthenticatorAccountStyles';
import IMAGES from '../../../global/images';
import Header from '../../../components/Header/Header';
import MyTextInput from '../../../components/TextInput/MyTextInput';
import { useNavigation } from '@react-navigation/native';
import Clipboard from '@react-native-community/clipboard';
import AppButton from '../../../components/AppButton/AppButton';

const AuthenticatorAccount = () => {
  const navigation = useNavigation();
  const secretKey = 'GEYTEMZRGIZTCMRTGEZDGMRRIZTCMRTGEZDGMRR';
  const [secret, setSecret] = useState(secretKey);
  const goToOtp = () => {
    navigation.navigate(ScreenNames.REGISTER, { flag: 1 });
  };
  const copyToClipboard = () => {
    Clipboard.setString('GEYTEMZRGIZTCMRTGEZDGMRRIZTCMRTGEZDGMRR');
  };
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
              <Header
                backArrowVisibility={true}
                imageBack={IMAGES.BackArrow}
                title="Authenticator App"
                image={IMAGES.socialBloxLogo}
                onPress={() => navigation.goBack()}
              />

              <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>
                  To set up an authenticator app as 2FA you must copy and paste
                  your account and key into an authenticator app and continue.
                </Text>
              </View>
              <View style={styles.inputContainer}>
                <MyTextInput
                  title="Account:"
                  cursorColor={Colors.WHITE}
                  titleStyle={styles.titleSecret}
                  placeholder="Account"
                  placeholderTextColor={Colors.WHITE}
                  mode="flat"
                  activeUnderlineColor={Colors.GREY}
                  textColor={'white'}
                  style={styles.inputField}
                />
                <TouchableOpacity style={styles.btnCopyStyle}>
                  <Image source={IMAGES.Copied} style={styles.imageCopied} />
                </TouchableOpacity>
              </View>
              <View style={styles.inputContainerOne}>
                <View style={styles.copyContainer}>
                  <MyTextInput
                    title="Secret:"
                    cursorColor={Colors.WHITE}
                    titleStyle={styles.titleSecret}
                    // label={<Text style={styles.labelSecret}>Secret</Text>}
                    mode="flat"
                    activeUnderlineColor={Colors.GREY}
                    textColor={'white'}
                    placeholder="Secret"
                    placeholderTextColor={Colors.WHITE}
                    style={styles.inputField2} // Add margin to the right
                    value={secret}
                    numberOfLines={2}
                    editable={false}
                  />
                  <TouchableOpacity
                    onPress={copyToClipboard}
                    style={styles.btnCopyStyle}>
                    <Image source={IMAGES.Copied} style={styles.imageCopied} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.bottomView}>
              <View style={styles.btnVerify}>
                <AppButton
                  onPress={() =>
                    navigation.navigate(ScreenNames.AUTHENTICATOR_OTP)
                  }
                  btnStyle={styles.btnStyle}
                  btnTextStyle={styles.btnTextStyle2}
                  btnText="Continue"
                />
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default AuthenticatorAccount;
