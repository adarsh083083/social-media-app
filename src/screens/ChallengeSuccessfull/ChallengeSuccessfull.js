import { View, Text, Image } from 'react-native';
import React from 'react';
import Gradient from '../../components/Gradient/Gradient';
import IMAGES from '../../global/images';
import AppButton from '../../components/AppButton/AppButton';
import { styles } from './styles';
import { ScreenNames } from '../../global';
import { useNavigation } from '@react-navigation/native';

const ChallengeSuccessfull = () => {
  const navigation = useNavigation()
  const navigateToSignInWithEmail = () => {
    navigation.navigate(ScreenNames.CREATE_ACCOUNT_WITH_EMAIL_SCREEN)
  }

  return (
    <Gradient>
      <View style={styles.innerContainer}>
        <Text style={styles.textStyle}>Challenge accepted!</Text>
      </View>
      <View style={styles.imageStyle}>
        <Image style={styles.success} source={IMAGES.Success} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.btnContainer}>
          <AppButton
            btnStyle={styles.btnStyle}
            btnTextStyle={styles.btnTextStyle}
            btnText="Upload your proof"
          />
        </View>
        <View>
          <AppButton
            onPress={navigateToSignInWithEmail}
            btnStyle={styles.btnStyle2}
            btnTextStyle={styles.btnTextStyle2}
            btnText="Do this later"
          />
        </View>
      </View>
    </Gradient>
  );
};

export default ChallengeSuccessfull;
