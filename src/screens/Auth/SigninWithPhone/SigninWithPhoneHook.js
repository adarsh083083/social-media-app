import React from 'react'

import { CommonActions, useNavigation } from '@react-navigation/native';
import { CountryCode, ScreenNames } from '../../../global';
const SigninWithPhoneHook = () => {
    const navigation = useNavigation();

    // State
    const [countryCodeVisibility, setCountryCodeVisibility] = React.useState(false)
    const [countryCode, setCountryCode] = React.useState('')
    const [searchData, setSearchData] = React.useState('')
    const [selectedSearchData, setSelectedSearchData] = React.useState('')

    // Function
    // This Function use to toggle country modal 
    const toggleCountryCode = () => {
        setCountryCodeVisibility(!countryCodeVisibility)
    }

    //  This function use to set the countrycode input text
    const onChangeSearchText = (text) => {
        setCountryCode(text)
        let filter = CountryCode?.COUNTRY_CODE.filter(e => e?.dial_code?.includes(text))
        setSearchData(filter)
    }

    // This function navigate to OtpScreen
    const goToOtp = () => {
        navigation.navigate(ScreenNames.REGISTER, { flag: 2 })
    }

    // UseEffect
    React.useEffect(() => {
        if (countryCode.length != 0) {
            setCountryCodeVisibility(true)
        }
    }, [countryCode])

    return {
        toggleCountryCode, countryCodeVisibility, countryCode,
        onChangeSearchText, setCountryCode, searchData, selectedSearchData, setSelectedSearchData,
        goToOtp, setSearchData
    };
};
export { SigninWithPhoneHook }