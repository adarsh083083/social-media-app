import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import Gradient from '../../components/Gradient/Gradient';
import IMAGES from '../../global/images';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {Colors} from '../../global';
import {chooseIntrestHooks} from './chooseIntrestHooks';
import AppButton from '../../components/AppButton/AppButton';

const ChooseIntrest = () => {
  const navigation = useNavigation();
  const {toggleSelectIntrest, selectedIntrest, intrestContent} =
    chooseIntrestHooks();
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
            <View style={styles.txtWrapper}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.8}
                style={styles.backBtn}>
                <Image source={IMAGES.BackArrow} style={styles.backArrow} />
              </TouchableOpacity>
              <Text style={styles.mainHeading}>Interests</Text>
            </View>
            <ScrollView>
              <Text style={styles.bigHeading}>What are you interested in?</Text>
              <View style={styles.intressContainer}>
                <Text style={[styles.subHeading, styles.pl20]}>Trending</Text>
                <FlatList
                  data={intrestContent}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    width: (140 * intrestContent.length) / 2,
                    flexWrap: 'wrap',
                  }}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[
                        selectedIntrest.includes(item.idItem)
                          ? styles.activeCard
                          : styles.card,
                      ]}
                      onPress={() => toggleSelectIntrest(item.idItem)}>
                      <Image source={IMAGES.AddIcon} style={styles.icon} />
                      <Text style={styles.para}>item title {item.idItem}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>

              <View style={styles.intressContainer}>
                <Text style={[styles.subHeading, styles.pl20]}>Crypto</Text>
                <FlatList
                  data={intrestContent}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    width: (140 * intrestContent.length) / 2,
                    flexWrap: 'wrap',
                  }}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[
                        selectedIntrest.includes(item.idItem)
                          ? styles.activeCard
                          : styles.card,
                      ]}
                      onPress={() => toggleSelectIntrest(item.idItem)}>
                      <Image source={IMAGES.AddIcon} style={styles.icon} />
                      <Text style={styles.para}>item title {item.idItem}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </ScrollView>
            <AppButton
              btnStyle={styles.btnStyle}
              btnText="Save"
              onPress={() => {}}
            />
          </View>
        }
      />
    </View>
  );
};

export default ChooseIntrest;
