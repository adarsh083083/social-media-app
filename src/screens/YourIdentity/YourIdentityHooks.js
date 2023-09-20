import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CountryCode, ScreenNames } from '../../global/index';
import { CommonActions, useNavigation } from '@react-navigation/native';

const YourIdentityHooks = () => {
    const navigation = useNavigation();
    const [termsAndConditionVisibilty, setTermsAndConditionVisibilty] = React.useState(false)
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
    const goToAuthenticator = () => {
        navigation.navigate(ScreenNames.AUTHENTICATOR_APP)
    }
    return {
        toggleCheckBox, setToggleCheckBox, goToAuthenticator
    };
};


export { YourIdentityHooks }
