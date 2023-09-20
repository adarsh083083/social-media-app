import {View, Text, FlatList} from 'react-native';
import React from 'react';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import Gradient from '../../../components/Gradient/Gradient';
import Header from '../../../components/Header/Header';
import IMAGES from '../../../global/images';
import {seedPrase} from '../../../global/listData';
import AppButton from '../../../components/AppButton/AppButton';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {Colors, ScreenNames} from '../../../global';
import ImportWalletItem from './ImportWalletItem';
const ImportWallet = () => {
  const navigation = useNavigation();
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
                title="Import wallet"
                onPress={() => navigation.goBack()}
              />
              <View style={styles.listContainer}>
                <FlatList
                  numColumns={3}
                  data={seedPrase}
                  renderItem={({item}) => <ImportWalletItem item={item} />}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                onPress={() => navigation.navigate(ScreenNames.PHARSEINFO)}
                btnStyle={styles.btnStyle}
                btnTextStyle={styles.btnTextStyle2}
                btnText="Import wallet"
              />
            </View>
          </View>
        }
      />
    </View>
  );
};

export default ImportWallet;
