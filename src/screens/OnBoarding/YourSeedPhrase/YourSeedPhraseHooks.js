import {ScreenNames} from '../../../global/index';
import {useNavigation} from '@react-navigation/native';

const YourSeedPhraseHooks = () => {
  const dispatch =use
  const navigation = useNavigation();
  const goToYourSeedPhraseHooks = () => {
    navigation.navigate(ScreenNames.VERIFY_SEED_PHRASE);

  };

  return {
    goToYourSeedPhraseHooks,
  };
};

export {YourSeedPhraseHooks};
