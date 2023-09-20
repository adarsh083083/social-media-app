import {View} from 'react-native';
import React, {useState} from 'react';
import ChallengeReactions from '../ChallengeReactions/ChallengeReactions';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';

const ItemReactions = ({item, index}) => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState();

  const goToCommentPage = () => {
    navigation.navigate(ScreenNames.COMMENT_SCREEN);
  };

  const handleSelectedItem = item => {
    setSelectedItem(prev => {
      if (prev === item.id) {
        return null;
      }
      return item.id;
    });
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <ChallengeReactions
        imageLeft={item.up}
        title={item.title}
        isSelected={selectedItem === item.id}
        imageRight={index === 0 ? item.down : {}}
        onPress={() =>
          index == 1 ? goToCommentPage() : handleSelectedItem(item)
        }
      />
    </View>
  );
};

export default ItemReactions;
