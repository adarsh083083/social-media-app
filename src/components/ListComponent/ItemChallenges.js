import {View, Image, FlatList, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import STATIC_DATA from '../../global/arrays';
import ItemReactions from './ItemReactions';
import styles from '../../screens/Auth/Profile/ProfileStyles';
import IMAGES from '../../global/images';
const ItemChallenges = ({item}) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const handleItemPress = index => {
    setSelectedItem(index);
  };
  return (
    <View style={styles.challengeContainer}>
      <View style={styles.challengeInnerContainer}>
        <Image
          resizeMode="contain"
          source={item?.posts[1]?.media}
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
      <View style={styles.listContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={STATIC_DATA.reactions_data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => {
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
    </View>
  );
};

export default ItemChallenges;
