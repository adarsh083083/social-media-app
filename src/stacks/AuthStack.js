import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenNames} from '../global/index';
import CreateAccountScreen from '../screens/Auth/CreateAccount/CreateAccountScreen';
import CreateAccountWithEmailScreen from '../screens/Auth/CreateAccountWithEmail/CreateAccountWithEmailScreen';
import SignInScreen from '../screens/Auth/SignIn/SignInScreen';
import OtpVerification from '../screens/Auth/SignIn/OtpVerification';
import WalletScreen from '../screens/Wallet/WalletScreen';
import YourWallet from '../screens/Auth/YourWallet/YourWallet';
import ImportWallet from '../screens/Auth/ImportWallet/ImportWallet';
import LoginPhoneOtpVerify from '../screens/Auth/LoginPhoneOtpVerify/LoginPhoneOtpVerify';
import Register from '../screens/Auth/Register/Register';
import AgeCheckScreen from '../screens/AgeCheck/AgeCheckScreen';
import YourIdentityScreen from '../screens/YourIdentity/YourIdentityScreen';
import AuthenticatorAccount from '../screens/OnBoarding/AuthenticatorAccount/AuthenticatorAccount';
import AuthenticatorOtp from '../screens/OnBoarding/AuthenticatorOtp/AuthenticatorOtp';
import BackUpCodeScreen from '../screens/BackUpCode/BackUpCodeScreen';
import ChooseProfile from '../screens/ChooseProfile/ChooseProfile';
import CreateWallet from '../screens/Auth/CreateWallet/CreateWallet';
import PharseInfo from '../screens/PhraseInfo/PharseInfo';
import VerifySeedPhrase from '../screens/OnBoarding/VerifySeedPhrase/VerifySeedPhrase';
import CreateAccountOtpVerify from '../screens/Auth/CreateAccountOtpVerify/CreateAccountOtpVerify';
import SplashScreen from '../screens/Splash/SplashScreen';
import OnBoarding from '../screens/OnBoarding/OnBoarding';
import AuthenticatorApp from '../screens/OnBoarding/AuthenticatorApp/AuthenticatorApp';
import AuthenticatorManually from '../screens/OnBoarding/AuthenticatorManually/AuthenticatorManually';
import SignWithPhone from '../screens/Auth/SigninWithPhone/SigninWithPhone';
import BottomTabs from './BottomTabs/BottomTabs';
import {useSelector} from 'react-redux';
import LoadingSpinner from '../components/LoadingSpiner/LoadingSpiner';
import CommentScreen from '../screens/Comment/CommentScreen';

const Stack = createStackNavigator();
const AuthStack = () => {
  const {screenLoader} = useSelector(state => state.authSlice);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={ScreenNames.SPLASH_SCREEN}>
          <Stack.Screen
            name={ScreenNames.SPLASH_SCREEN}
            component={SplashScreen}
          />
          <Stack.Screen name={ScreenNames.ON_BOARDING} component={OnBoarding} />
          <Stack.Screen
            name={ScreenNames.CREATE_ACCOUNT_SCREEN}
            component={CreateAccountScreen}
          />
          <Stack.Screen
            name={ScreenNames.SIGN_IN_SCREEN}
            component={SignInScreen}
          />
          <Stack.Screen
            name={ScreenNames.OTP_VERIFICATION}
            component={OtpVerification}
          />
          <Stack.Screen
            name={ScreenNames.WALLET_SCREEN}
            component={WalletScreen}
          />
          <Stack.Screen
            name={ScreenNames.CREATE_ACCOUNT_WITH_EMAIL_SCREEN}
            component={CreateAccountWithEmailScreen}
          />
          <Stack.Screen name={ScreenNames.YOUR_WALLET} component={YourWallet} />
          <Stack.Screen
            name={ScreenNames.IMPORT_WALLET}
            component={ImportWallet}
          />
          <Stack.Screen
            name={ScreenNames.SIGNIN_WITH_PHONE}
            component={SignWithPhone}
          />
          <Stack.Screen
            name={ScreenNames.LOGIN_PHONE_OTP_VERIFY}
            component={LoginPhoneOtpVerify}
          />
          <Stack.Screen name={ScreenNames.REGISTER} component={Register} />
          <Stack.Screen
            name={ScreenNames.AGE_CHECK_SCREEN}
            component={AgeCheckScreen}
          />
          <Stack.Screen
            name={ScreenNames.YOUR_IDENTITY_SCREEN}
            component={YourIdentityScreen}
          />
          <Stack.Screen
            name={ScreenNames.AUTHENTICATOR_APP}
            component={AuthenticatorApp}
          />
          <Stack.Screen
            name={ScreenNames.AUTHENTICATOR_ACCOUNT}
            component={AuthenticatorAccount}
          />
          <Stack.Screen
            name={ScreenNames.AUTHENTICATOR_OTP}
            component={AuthenticatorOtp}
          />
          <Stack.Screen
            name={ScreenNames.AUTHENTICATOR_MANUALLY}
            component={AuthenticatorManually}
          />
          <Stack.Screen
            name={ScreenNames.BACKUP_CODE_SCREEN}
            component={BackUpCodeScreen}
          />
          <Stack.Screen
            name={ScreenNames.CHOOSEPROFILE}
            component={ChooseProfile}
          />
          <Stack.Screen
            name={ScreenNames.CREATE_WALLET}
            component={CreateWallet}
          />
          <Stack.Screen name={ScreenNames.PHARSEINFO} component={PharseInfo} />
          <Stack.Screen
            name={ScreenNames.VERIFY_SEED_PHRASE}
            component={VerifySeedPhrase}
          />
          <Stack.Screen
            name={ScreenNames.CREATE_ACCOUNT_OTP_VERIFY}
            component={CreateAccountOtpVerify}
          />
          <Stack.Screen name={ScreenNames.BOTTOM_TABS} component={BottomTabs} />
          <Stack.Screen
            name={ScreenNames.COMMENT_SCREEN}
            component={CommentScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {screenLoader && <LoadingSpinner />}
    </>
  );
};
export default AuthStack;
