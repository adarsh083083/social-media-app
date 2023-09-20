
import { ScreenNames } from '../../global/index';
import { useNavigation } from '@react-navigation/native';

const AgeCheckHooks = () => {
    const navigation = useNavigation();
    const goToYourIdentify = () => {
        navigation.navigate(ScreenNames.YOUR_IDENTITY_SCREEN)
    }
    return {
        goToYourIdentify
    };
};


export { AgeCheckHooks }
