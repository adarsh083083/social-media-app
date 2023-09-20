import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const MyTextInput = ({
  titleStyle,
  title,
  numberOfLines,
  maxHeight,
  ...otherProps
}) => {
  const inputStyle = {
    maxHeight: maxHeight, // Set the maximum height
  };
  return (
    <View>
      <Text style={titleStyle}>{title}</Text>
      <TextInput
        multiline={numberOfLines > 1}
        numberOfLines={numberOfLines}
        style={inputStyle}
        {...otherProps}
      />
    </View>
  );
};

export default MyTextInput;
