
import { Alert } from 'react-native';
import { ScreenNames } from '../../global/index';
import { useNavigation } from '@react-navigation/native';

const PrivateProfileHooks = () => {
    // Variable
    const navigation = useNavigation();

    // Function
    // This function navigate to OtpScreen
    const goToRegister = () => {
        Alert.alert('Alert', 'Development under progress')
    }
    const goBack = () => {
        navigation.goBack()
    }
    return {
        goBack,
        goToRegister
    };
};


export { PrivateProfileHooks }
