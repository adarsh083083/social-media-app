import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { Colors, Constant, ScreenNames } from '../../global';
import Gradient from '../../components/Gradient/Gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import IMAGES from '../../global/images';
import SearchComp from '../../components/SearchComp/SearchComp';

const SearchScreen = () => {
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
            <View style={styles.header}>
              <Text style={styles.mainHeading}>Search</Text>
            </View>
            <View style={{ alignSelf: 'center', paddingBottom: 10 }}>
              <SearchComp
                searchImage={IMAGES.SearchIcon}
                value={''}
                onChangeText={() => { }}
                placeholder="Search"
                placeholderTextColor={Colors.WHITE}
                showClearIcon={true}
                onClearText={() => { }}
              />
            </View>
            <FlatList
              contentContainerStyle={{ paddingBottom: Constant.CHANGE_BY_MOBILE_DPI(70) }}
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(ScreenNames.PRIVATE_PROFILE_SCREEN)
                  }
                  activeOpacity={0.8}
                  style={styles.listContainer}>
                  <Image
                    resizeMode="contain"
                    source={IMAGES.UserProfile}
                    style={styles.profileImage}
                  />
                  <View>
                    <Text style={styles.titleName}>Michiel</Text>
                    <Text style={styles.titleProfile}>@michielipenburg</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        }
      />
    </View>
  );
};

export default SearchScreen;
