import { View, Image, FlatList, Text } from 'react-native';
import React, { useState } from 'react';
import STATIC_DATA from '../../../global/arrays';
import ItemReactions from './ItemReactions';
import IMAGES from '../../../global/images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../../global';

const ItemChallenges = ({ item }) => {
  const navigation = useNavigation()
  const [selectedItem, setSelectedItem] = useState(0);
  const handleItemPress = index => {
    setSelectedItem(index);
  };
  const navigateToPrivateProfile = () => {
    navigation.navigate(ScreenNames.PRIVATE_PROFILE_SCREEN)
  }
  return (
    <TouchableOpacity onPress={navigateToPrivateProfile} style={styles.challengeContainer}>
      <View style={styles.challengeInnerContainer}>
        <View>
          <Image
            resizeMode="contain"
            source={item.challenges}
            style={styles.challengeImage}
          />
          <View style={styles.challengeOuterContainer}>
            <View style={styles.voteContainer}>
              <View style={styles.rocketContainer}>
                <Image source={IMAGES.Rocket} style={styles.rocketImage} />
                <Text style={styles.rocketTitle}>8</Text>
              </View>
              <View style={styles.graphContainer}>
                <Image source={IMAGES.Down_Graph} style={styles.graphImage} />
                <Text style={styles.titleGraph}>8</Text>
              </View>
            </View>
            <View style={styles.muteContainer}>
              <TouchableOpacity>
                <Image
                  resizeMode="contain"
                  source={IMAGES.Mute}
                  style={styles.muteImage}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={STATIC_DATA.reactions_data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <ItemReactions
                item={item}
                index={index}
                onPress={() => handleItemPress(index)}
                isSelected={selectedItem === index}
              />
            );
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ItemChallenges;
