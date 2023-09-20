import React from 'react';
import Gradient from '../../../components/Gradient/Gradient';
import Header from '../../../components/Header/Header';
import IMAGES from '../../../global/images';
import { Image, Text, View } from 'react-native';
import { Colors } from '../../../global';
import AppButton from '../../../components/AppButton/AppButton';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const WalletCreated = () => {
  return (
    <Gradient>
      <View style={styles.innerContainer}>
        <Header image={IMAGES.socialBloxLogo} title="Wallet" />
        <View style={styles.imageContainer}>
          <Image source={IMAGES.SUCCESS_ALERT} style={styles.imageStyle} />
        </View>
        <View style={styles.textTitle}>
          <Text style={styles.textStyle}>Wallet created</Text>
          <Text style={styles.tokenText}>
            0x62fF7070121c9D383fcC269f5f9967D8a240A729
          </Text>
        </View>

        <View style={styles.btnStyle}>
          <AppButton btnText="Check out your seed phrase" />
        </View>
        <View style={styles.buttonStyle}>
          <AppButton
            btnStyle={{ backgroundColor: Colors.GRAY }}
            btnText="Continue"
          />
        </View>
      </View>
    </Gradient>
  );
};

export default WalletCreated;
