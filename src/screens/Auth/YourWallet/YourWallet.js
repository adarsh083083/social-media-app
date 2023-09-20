import {View, Image, Text, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import {Colors, ScreenNames} from '../../../global';
import IMAGES from '../../../global/images';
import AppButton from '../../../components/AppButton/AppButton';
import Header from '../../../components/Header/Header';
import Gradient from '../../../components/Gradient/Gradient';
import styles from './styles';
const YourWallet = () => {
  const navigation = useNavigation();
  const goToHome = () => {
    navigation.navigate(ScreenNames.BOTTOM_TABS);
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
              <ScrollView>
                <Header
                  imageBack={IMAGES.BackArrow}
                  title="Your Wallet"
                  image={IMAGES.socialBloxLogo}
                  onPress={() => navigation.goBack()}
                />
                <View style={styles.titleContainer}>
                  <Text style={styles.titleStyle}>Import your Wallet</Text>
                  <Text style={styles.detailFontStyle}>
                    We advise you to import your wallet to use all
                  </Text>
                  <Text style={styles.detailFontStyle}>
                    the features in the app. To import your wallet
                  </Text>
                  <Text style={styles.detailFontStyle}>
                    you have to verify your seed phrase
                  </Text>
                </View>
                <View style={styles.btnVerify}>
                  <AppButton
                    onPress={() =>
                      navigation.navigate(ScreenNames.IMPORT_WALLET)
                    }
                    btnStyle={styles.btnStyle}
                    btnTextStyle={styles.btnTextStyle2}
                    btnText="Import wallet"
                  />
                  <AppButton
                    btnStyle={styles.btnStyle2}
                    btnTextStyle={styles.btnTextStyle2}
                    btnText="Do this later"
                    onPress={goToHome}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default YourWallet;
