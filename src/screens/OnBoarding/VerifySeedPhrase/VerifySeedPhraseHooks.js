import { useDispatch } from 'react-redux';
import { ScreenNames } from '../../../global/index';
import { useNavigation } from '@react-navigation/native';
import { allScreensChecked } from '../../../redux/slices/auth.slices';

const VerifySeedPhraseHooks = () => {

  const dispatch=useDispatch()

  const navigation = useNavigation();
  const goToVerifySeedPhrase = () => {
    navigation.navigate(ScreenNames.VERIFY_SEED_PHRASE);
  };
  const navigateToBottomTab = () => {
    dispatch(allScreensChecked())
    navigation.navigate(ScreenNames.BOTTOM_TABS)
  }

  return {
    goToVerifySeedPhrase,
    navigateToBottomTab
  };
};

export { VerifySeedPhraseHooks };
