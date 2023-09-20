import { View, Image, Text } from 'react-native';
import React from 'react';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { Colors, ScreenNames } from '../../global';
import IMAGES from '../../global/images';
import { useNavigation } from '@react-navigation/native';
import AppButton from '../../components/AppButton/AppButton';
import Header from '../../components/Header/Header';
import Gradient from '../../components/Gradient/Gradient';
import CheckSvg from '../../assets/svgs/socialblox_success.svg'
import styles from './WalletScreenStyles';
const WalletScreen = () => {
  const navigation = useNavigation();
  const goToYourSeedPharse = () => {
    navigation.navigate(ScreenNames.YOUR_SEED_PHRASE, { flag: 1 })
  }
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
                imageBack={IMAGES.BackArrow}
                title="Wallet"
                image={IMAGES.socialBloxLogo}
                onPress={() => navigation.goBack()}
              />
              <View style={styles.imageContainer}>
                <CheckSvg />
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.titleStyle}>
                  Wallet created
                </Text>
                <Text style={styles.detailFontStyle}>
                  0x62fF7070121c9D383fcC269f5f9967D8a240A729
                </Text>
              </View>
              <View style={styles.btnVerify}>
                <AppButton
                  onPress={goToYourSeedPharse}
                  btnStyle={styles.btnStyle}
                  btnTextStyle={styles.btnTextStyle2}
                  btnText="Check out your seed phrase"
                />
                <AppButton
                  onPress={goToYourSeedPharse}
                  btnStyle={styles.btnStyle2}
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

export default WalletScreen;
