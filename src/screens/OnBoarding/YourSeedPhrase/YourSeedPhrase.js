import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './YourSeedPhraseStyles';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import Gradient from '../../../components/Gradient/Gradient';
import { Colors } from '../../../global';
import Header from '../../../components/Header/Header';
import IMAGES from '../../../global/images';
import { seedPrase } from '../../../global/listData';
import AppButton from '../../../components/AppButton/AppButton';
import { YourSeedPhraseHooks } from './YourSeedPhraseHooks';

import { useNavigation, useRoute } from '@react-navigation/native';
import ItemYourSeed from '../../../components/ListComponent/ItemYourSeed';
const YourSeedPhrase = () => {
  const navigation = useNavigation();
  const { goToYourSeedPhraseHooks } = YourSeedPhraseHooks();

  const route = useRoute();
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
            <View>
              <Header
                backArrowVisibility={true}
                imageBack={IMAGES.BackArrow}
                onPress={() => navigation.goBack()}
              />
              <View style={styles.titleContainer}>
                <Text style={styles.titleSeedStyle}>Your seed phrase</Text>
                <Text style={styles.titleAttention}>
                  Attention: SocialBlox has automatically created a crypto
                  wallet for you but we don't have access to it. Write down this
                  seed phrase to access it in the future.
                </Text>

                <View style={styles.titleContainer}>
                  {typeof route.params.flag != 'null' && (
                    <Text style={styles.titleAttention}>
                      Attention: SocialBlox has automatically created a crypto
                      wallet for you but we don't have access to it. Write down
                      this seed phrase to access it in the future.
                    </Text>
                  )}
                </View>
                <View style={styles.listContainer}>
                  <FlatList
                    numColumns={3}
                    data={seedPrase}
                    renderItem={({ item }) => <ItemYourSeed item={item} />}
                    keyExtractor={item => item.id}
                  />
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <AppButton
                  onPress={goToYourSeedPhraseHooks}
                  btnStyle={styles.btnStyle2}
                  btnTextStyle={styles.btnTextStyle2}
                  btnText="OK, I wrote this down"
                />
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
};
export default YourSeedPhrase;
