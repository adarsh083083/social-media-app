import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {FlatList} from 'react-native';

const CurrencyCodeList = ({onPress, searchData}) => {
  const renderCurrencyCode = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPress(item)}
        style={styles.marginVertical}>
        <Text style={styles.dailCodeFontStyle}>{item?.dial_code}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.curr}>
      <FlatList
        data={searchData}
        showsVerticalScrollIndicator={false}
        renderItem={renderCurrencyCode}
      />
    </View>
  );
};

export default CurrencyCodeList;
