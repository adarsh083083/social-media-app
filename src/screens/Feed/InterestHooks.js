import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../global';

const InterestHooks = () => {
  const navigation = useNavigation();
  const goToChooseInterest = () => {
    navigation.navigate(ScreenNames.CHOOSE_INTREST);
  };
  return {
    goToChooseInterest,
  };
};

export {InterestHooks};
