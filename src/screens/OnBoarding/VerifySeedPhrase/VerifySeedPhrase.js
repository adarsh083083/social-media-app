import { View, FlatList, Text } from 'react-native';
import React from 'react';
import styles from '../../OnBoarding/VerifySeedPhrase/VerifySeedPhraseStyles';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import Gradient from '../../../components/Gradient/Gradient';
import { Colors } from '../../../global';
import Header from '../../../components/Header/Header';
import IMAGES from '../../../global/images';
import { seedPrase } from '../../../global/listData';
import AppButton from '../../../components/AppButton/AppButton';
// import {VerifySeedPhraseHooks} from '../../Auth/CreateAccountWithEmail/CreateAccountWithEmailHooks';
import ItemVerifySeed from '../../../components/ListComponent/ItemVerifySeed';
import { VerifySeedPhraseHooks } from './VerifySeedPhraseHooks';

const VerifySeedPhrase = () => {
  const { navigateToBottomTab } = VerifySeedPhraseHooks(); 
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
                onPress={() => navigation.goBack()}
              />
              <View>
                <Text style={styles.titleVerifyStyle}>Verify seed phrase</Text>
              </View>
              <View style={styles.listContainer}>
                <FlatList
                  numColumns={3}
                  data={seedPrase}
                  renderItem={({ item }) => <ItemVerifySeed item={item} />}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
            <View style={styles.verfiyBtn}>
              <AppButton
                onPress={navigateToBottomTab}
                btnStyle={styles.btnStyle}
                btnTextStyle={styles.btnTextStyle2}
                btnText="Verify Seed Phrases"
              />
            </View>
          </View>
        }
      />
    </View>
  );
};

export default VerifySeedPhrase;
