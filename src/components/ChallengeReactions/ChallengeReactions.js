import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Colors} from '../../global';
import styles from './styles';

const ChallengeReactions = ({
  imageLeft,
  isSelected,
  title,
  onPress,
  imageRight = {},
}) => {
  return (
    <View style={styles.reactionContainer}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.selectedListItem,
          {
            backgroundColor: isSelected
              ? Colors.PURPLE_COLOR
              : Colors.DARK_GRAY,
          },
        ]}>
        {imageLeft && (
          <Image
            resizeMode="contain"
            source={imageLeft}
            style={styles.imageLeft}
          />
        )}
        <Text style={styles.titleChallenge}>{title}</Text>
        {imageRight ? (
          <Image
            resizeMode="contain"
            source={imageRight}
            style={styles.imageRight}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default ChallengeReactions;
