import {ScreenNames} from '../../../global/index';
import {useNavigation} from '@react-navigation/native';

const AuthenticatorAccountHooks = () => {
  const navigation = useNavigation();
  const goToAuthenticatorAccount = () => {
    navigation.navigate(ScreenNames.AUTHENTICATOR_ACCOUNT);
  };
  return {
    goToAuthenticatorAccount,
  };
};

export {AuthenticatorAccountHooks};
