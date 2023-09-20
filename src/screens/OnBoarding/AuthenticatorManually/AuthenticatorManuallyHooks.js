import {useNavigation} from '@react-navigation/native';
import { ScreenNames } from '../../../global';
 
const AuthenticatorManuallyHooks = () => {
  const navigation = useNavigation();
  const goToAuthenticatorOtp = () => {
    navigation.navigate(ScreenNames.AUTHENTICATOR_ACCOUNT);
  };
  return {
    goToAuthenticatorOtp,
  };
};

export {AuthenticatorManuallyHooks};
