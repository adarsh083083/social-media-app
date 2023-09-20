import React from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import IMAGES from '../../global/images';

const SearchComp = ({
  searchImage,
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  showClearIcon,
  onClearText,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image source={searchImage} style={styles.searchIcon} />
        <View style={styles.inputWrapper}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={styles.input}
          />
          {showClearIcon && (
            <TouchableOpacity onPress={onClearText}>
              <Image
                resizeMode="contain"
                source={IMAGES.Clear}
                style={styles.clearIcon}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default SearchComp;
