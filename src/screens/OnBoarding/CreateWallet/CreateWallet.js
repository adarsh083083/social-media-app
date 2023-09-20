import React from 'react';
import Gradient from '../../../components/Gradient/Gradient';
import Header from '../../../components/Header/Header';
import IMAGES from '../../../global/images';
import {Image, Text, View} from 'react-native';
import {PURPLE} from '../../../global/colors';
import {styles} from './styles';

const CreateWallet = () => {
  return (
    <Gradient>
      <Header image={IMAGES.socialBloxLogo} title="Wallet" />
      <View style={styles.loaderContainer}>
        {/* <LoadingSpinner /> */}
        <Image
          tintColor={PURPLE}
          source={IMAGES.LOADER}
          style={styles.loaderImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>Creating your wallet...</Text>
        <Text style={styles.textStyle}>
          It will take a few seconds to create your wallet,
        </Text>
        <Text style={styles.textStyle}>please have a moment.</Text>
      </View>
    </Gradient>
  );
};

export default CreateWallet;
