import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../../global/index';

const AuthenticatorAppHooks = () => {
  const navigation = useNavigation();
  const goToAuthenticatorManually = () => {
    navigation.navigate(ScreenNames.AUTHENTICATOR_MANUALLY);
  };
  return {
    goToAuthenticatorManually,
  };
};

export {AuthenticatorAppHooks};
