import React from 'react';
import {CurrencyCode, ScreenNames} from '../../global/index';
import {useNavigation} from '@react-navigation/native';
const AddBlxHooks = () => {
  const navigation = useNavigation();
  const [currencyCodeVisiblity, setCurrencyCodeVisibility] =
    React.useState(false);
  const [currencyCode, setCurrencyCode] = React.useState('');
  const [searchData, setSerachData] = React.useState('');
  const [selectedSearchData, setSelectedSearchData] = React.useState('');
  const toggleCurrencyCode = () => {
    setCurrencyCodeVisibility(!currencyCodeVisiblity);
  };
  const onChangeSearchText = text => {
    setCurrencyCode(text);
    const filter = CurrencyCode?.CURRENCY_CODE?.filter(e =>
      e?.currency?.includes(text),
    );

    setSerachData(filter);
  };

  const goToOtp = () => {
    navigation.navigate(ScreenNames.REGISTER, {flag: 2});
  };
  React.useEffect(() => {
    if (currencyCode.length != 0) {
      setCurrencyCodeVisibility(true);
    }
  }, [currencyCode]);
  return {
    toggleCurrencyCode,
    currencyCodeVisiblity,
    currencyCode,
    onChangeSearchText,
    setCurrencyCode,
    searchData,
    selectedSearchData,
    setSelectedSearchData,
    goToOtp,
  };
};
export {AddBlxHooks};
