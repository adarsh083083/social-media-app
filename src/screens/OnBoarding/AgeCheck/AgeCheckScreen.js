// Import necessary components and libraries
import { View, Text } from 'react-native';
import React from 'react';
import Gradient from '../../../components/Gradient/Gradient';
import Header from '../../../components/Header/Header';
import IMAGES from '../../../global/images';
import { styles } from './styles';
import AppButton from '../../../components/AppButton/AppButton';
import { ScreenNames } from '../../../global';
import { useNavigation } from '@react-navigation/native';

// Define a functional component AgeCheckScreen
const AgeCheckScreen = () => {
  //HERE is the Navigation hook
  const navigation = useNavigation();
  return (
    <Gradient>
      {/* Render the Gradient component */}
      <View>
        <Header image={IMAGES.socialBloxLogo} title="Age Check" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>You must be over 16 years of</Text>
        <Text style={styles.textStyle}> age to view the content on this </Text>
        <Text style={styles.textStyle}> platform.</Text>
      </View>
      {/* Render AppButton components for age confirmation */}
      <View style={styles.buttonContainer}>
        <AppButton
          btnText="I am older than 16"
          onPress={() => navigation.navigate(ScreenNames.WALLET_CREATED)}
        />
        <View style={styles.downButton}>
          <AppButton
            btnStyle={styles.btnStyle}
            btnText="I am younger than 16"
            onPress={() => navigation.navigate(ScreenNames.CREATE_WALLET)}
          />
        </View>
      </View>
    </Gradient>
  );
};
export default AgeCheckScreen;
