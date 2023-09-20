import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import styles from './styles';
  
export const CountryCodeList = ({ onPress, searchData }) => {
    const renderCountryCode = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => onPress(item)} style={styles.marginVertical}>
                <Text style={styles.dailCodeFontStyle}>{item?.dial_code}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.countryCodeContainer}>
            <FlatList data={searchData}
                showsVerticalScrollIndicator={false}
                renderItem={renderCountryCode} />
        </View>
    )
}

