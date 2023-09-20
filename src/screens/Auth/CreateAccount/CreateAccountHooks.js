import {Animated, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {CommonActions, useNavigation} from '@react-navigation/native';
import {CountryCode, ScreenNames} from '../../../global';
const CreateAccountHooks = () => {
  const navigation = useNavigation();
  const [countryCodeVisibility, setCountryCodeVisibility] =
    React.useState(false);
  const [countryCode, setCountryCode] = React.useState('');
  const [searchData, setSearchData] = React.useState('');
  const [selectedSearchData, setSelectedSearchData] = React.useState('');
  const toggleCountryCode = () => {
    setCountryCodeVisibility(!countryCodeVisibility);
  };
  const onChangeSearchText = text => {
    setCountryCode(text);
    let filter = CountryCode?.COUNTRY_CODE.filter(e =>
      e?.dial_code?.includes(text),
    );
    setSearchData(filter);
  };

  const goToOtp = () => {
    navigation.navigate(ScreenNames.REGISTER, {flag: 2});
  };
  React.useEffect(() => {
    if (countryCode.length != 0) {
      setCountryCodeVisibility(true);
    }
  }, [countryCode]);
  return {
    toggleCountryCode,
    countryCodeVisibility,
    countryCode,
    onChangeSearchText,
    setCountryCode,
    searchData,
    selectedSearchData,
    setSelectedSearchData,
    goToOtp,
    setSearchData,
  };
};
export {CreateAccountHooks};
