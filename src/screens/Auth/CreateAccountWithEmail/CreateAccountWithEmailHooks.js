import {ScreenNames} from '../../../global/index';
import {useNavigation} from '@react-navigation/native';

const CreateAccountWithEmailHooks = () => {
    // Variable
    const navigation = useNavigation();

    // Function
    // This function navigate to OtpScreen
    const goToRegister = () => {
        navigation.navigate(ScreenNames.REGISTER)
    }


    // This function navigate to SignUp
    const goToSignUp = () => {
        navigation.navigate(ScreenNames.CREATE_ACCOUNT_SCREEN)
    }
    return {
        goToSignUp,
        goToRegister
    };
};

export {CreateAccountWithEmailHooks};
