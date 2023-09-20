
import { ScreenNames } from '../../../global/index';
import { useNavigation } from '@react-navigation/native';

const SignInHooks = () => {
    // variable
    const navigation = useNavigation();

    // Function
    // This function use to navigate Otp Screen
    const goToRegister = () => {
        navigation.navigate(ScreenNames.REGISTER, { flag: 3 })
    }

    return {
        goToRegister
    };
};


export { SignInHooks }
