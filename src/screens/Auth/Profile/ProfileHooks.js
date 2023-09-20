import {ScreenNames} from '../../../global/index';
import {useNavigation} from '@react-navigation/native';

const ProfileHooks = () => {
  const navigation = useNavigation();
  const goToEditProfileScreen = () => {
    navigation.navigate(ScreenNames.EDIT_PROFILE_SCREEN);
  };
  return {
    goToEditProfileScreen,
  };
};

export {ProfileHooks};
