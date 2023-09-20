import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenNames } from '../global/index';
import ChallengeApproved from '../screens/ChallengeApproved/ChallengeApproved';
import CreateAccountScreen from '../screens/Auth/CreateAccount/CreateAccountScreen';
import ChallengeDisapproved from '../screens/ChallengeApproved/ChallengeDisapproved';
import BottomTabs from './BottomTabs/BottomTabs';
import AddSblx from '../screens/AddSblx/AddSblx';
import ChooseProfile from '../screens/ChooseProfile/ChooseProfile';
import VerifySeedPhrase from '../screens/OnBoarding/VerifySeedPhrase/VerifySeedPhrase';
import AuthenticatorApp from '../screens/OnBoarding/AuthenticatorApp/AuthenticatorApp';
import AuthenticatorManually from '../screens/OnBoarding/AuthenticatorManually/AuthenticatorManually';
import AuthenticatorAccount from '../screens/OnBoarding/AuthenticatorAccount/AuthenticatorAccount';
import YourIdentityScreen from '../screens/YourIdentity/YourIdentityScreen';
import WalletScreen from '../screens/Wallet/WalletScreen';
import BackUpCodeScreen from '../screens/BackUpCode/BackUpCodeScreen';
import NoAuthenticator from '../screens/NoAuthenticator/NoAuthenticator';
import AuthenticatorCreds from '../screens/AuthenticatorCreds/AuthenticatorCreds';
import BlockInactiveAccount from '../screens/BlockInactiveAccount/BlockInactiveAccount';
import AgeCheckScreen from '../screens/AgeCheck/AgeCheckScreen';
import ImportWallet from '../screens/Auth/ImportWallet/ImportWallet';
import EnterBackUpCodeScreen from '../screens/EnterBackUpCode/EnterBackUpCodeScreen';
import AuthenticatorOtp from '../screens/OnBoarding/AuthenticatorOtp/AuthenticatorOtp';
import PrivateProfileScreen from '../screens/PrivateProfile/PrivateProfileScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import EditProfileScreen from '../screens/EditProfile/EditProfileScreen';
import NotificationPreference from '../screens/NotificationPreference/NotificationPreference';
import AboutSocialBlox from '../screens/AboutSocialBlox/AboutSocialBlox';
import ChooseIntrest from '../screens/ChooseIntrest/ChooseIntrest';
import FollowersList from '../screens/FollowersList/FollowersList';
import SecurityOptions from '../screens/SecurityOptions/SecurityOptions';
import CreatePost from '../screens/CreatePost/CreatePost';
import InAppBrowsers from '../screens/AddSblx/InAppBrowsers';
import Interest from '../screens/Feed/Interest';
import Reported from '../screens/Reported/Reported';
import ChallengeDetails from '../screens/ChallengeDetails/ChallengeDetails';
import AcceptChalenge from '../screens/AcceptChalenge/AcceptChalenge';
import NotAcceptChalenge from '../screens/NotAcceptChanlenge/NotAcceptChanlenge';
import ChallengeSuccessfull from '../screens/ChallengeSuccessfull/ChallengeSuccessfull';
import UploadChallengeProof from '../screens/UploadChallengeProof/UploadChallengeProof';
import UploadChallengeProofStatus from '../screens/UploadChallengeProofStatus/UploadChallengeProofStatus';
import CreateChallenge from '../screens/CreateChallenge/CreateChallenge/CreateChallenge';
import AddRequirements from '../screens/CreateChallenge/AddRequirements/AddRequirements';
import ReChallenge from '../screens/ReChallenge/ReChallenge';
import ChallengeAccepted from '../screens/ChallengeAccepted/ChallengeAccepted';
import ProfileScreen from '../screens/Auth/Profile/ProfileScreen';
import CommentScreen from '../screens/Comment/CommentScreen';
import LoadingSpinner from '../components/LoadingSpiner/LoadingSpiner';
import { useSelector } from 'react-redux';
import FollowingList from '../screens/FollowersList/FollowingList';
enableScreens();
const Stack = createStackNavigator();
const MainStack = () => {
  const { screenLoader } = useSelector(state => state.authSlice);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={ScreenNames.BOTTOM_TABS}>
          <Stack.Screen name={ScreenNames.BOTTOM_TABS} component={BottomTabs} />
          <Stack.Screen
            name={ScreenNames.CHALLENGE_APPROVED}
            component={ChallengeApproved}
          />
          <Stack.Screen
            name={ScreenNames.CHALLENGE_DISAPPROVED}
            component={ChallengeDisapproved}
          />
          <Stack.Screen name={ScreenNames.ADD_SBLX} component={AddSblx} />
          <Stack.Screen
            name={ScreenNames.VERIFY_SEED_PHRASE}
            component={VerifySeedPhrase}
          />
          <Stack.Screen
            name={ScreenNames.CHOOSEPROFILE}
            component={ChooseProfile}
          />
          <Stack.Screen
            name={ScreenNames.AUTHENTICATOR_APP}
            component={AuthenticatorApp}
          />
          <Stack.Screen
            name={ScreenNames.AUTHENTICATOR_MANUALLY}
            component={AuthenticatorManually}
          />
          <Stack.Screen
            name={ScreenNames.AUTHENTICATOR_ACCOUNT}
            component={AuthenticatorAccount}
          />
          <Stack.Screen
            name={ScreenNames.CREATE_ACCOUNT_SCREEN}
            component={CreateAccountScreen}
          />
          <Stack.Screen
            name={ScreenNames.YOUR_IDENTITY_SCREEN}
            component={YourIdentityScreen}
          />
          <Stack.Screen
            name={ScreenNames.WALLET_SCREEN}
            component={WalletScreen}
          />
          <Stack.Screen
            name={ScreenNames.BACKUP_CODE_SCREEN}
            component={BackUpCodeScreen}
          />
          <Stack.Screen
            name={ScreenNames.NOAUTHENTICATOR}
            component={NoAuthenticator}
          />
          <Stack.Screen
            name={ScreenNames.AUTHENTICATORCREDS}
            component={AuthenticatorCreds}
          />
          <Stack.Screen
            name={ScreenNames.BLOCKINACTIVEACCOUNT}
            component={BlockInactiveAccount}
          />
          <Stack.Screen name={ScreenNames.PROFILE} component={ProfileScreen} />
          <Stack.Screen
            name={ScreenNames.AGE_CHECK_SCREEN}
            component={AgeCheckScreen}
          />
          <Stack.Screen
            name={ScreenNames.IMPORT_WALLET}
            component={ImportWallet}
          />
          <Stack.Screen
            name={ScreenNames.ENTER_BACKUP_CODE_SCREEN}
            component={EnterBackUpCodeScreen}
          />
          <Stack.Screen
            name={ScreenNames.AUTHENTICATOR_OTP}
            component={AuthenticatorOtp}
          />
          <Stack.Screen
            name={ScreenNames.PRIVATE_PROFILE_SCREEN}
            component={PrivateProfileScreen}
          />
          <Stack.Screen
            name={ScreenNames.SETTING_SCREEN}
            component={SettingsScreen}
          />
          <Stack.Screen
            name={ScreenNames.EDIT_PROFILE_SCREEN}
            component={EditProfileScreen}
          />
          <Stack.Screen
            name={ScreenNames.NOTIFICATION_PREFERENCE}
            component={NotificationPreference}
          />
          <Stack.Screen
            name={ScreenNames.ABOUT_SOCIAL_BLOX}
            component={AboutSocialBlox}
          />
          <Stack.Screen
            name={ScreenNames.CHOOSE_INTREST}
            component={ChooseIntrest}
          />
          <Stack.Screen
            name={ScreenNames.FOLLOWERS_LIST}
            component={FollowersList}
          />
          <Stack.Screen
            name={ScreenNames.FOLLOWING_LIST}
            component={FollowingList}
          />
          <Stack.Screen
            name={ScreenNames.SECURITY_OPTIONS}
            component={SecurityOptions}
          />
          <Stack.Screen name={ScreenNames.CREATE_POST} component={CreatePost} />
          <Stack.Screen
            name={ScreenNames.IN_APP_BROWSERS}
            component={InAppBrowsers}
          />
          <Stack.Screen name={ScreenNames.INTEREST} component={Interest} />
          <Stack.Screen name={ScreenNames.REPORTED} component={Reported} />
          <Stack.Screen
            name={ScreenNames.CHALLENGE_DETAILS}
            component={ChallengeDetails}
          />
          <Stack.Screen
            name={ScreenNames.ACCEPT_CHALENGE}
            component={AcceptChalenge}
          />
          <Stack.Screen
            name={ScreenNames.NOT_ACCEPT_CHALENGE}
            component={NotAcceptChalenge}
          />
          <Stack.Screen
            name={ScreenNames.CHALLENGE_SUCCESSFULL}
            component={ChallengeSuccessfull}
          />
          <Stack.Screen
            name={ScreenNames.UPLOAD_CHALLENGE_PROOF}
            component={UploadChallengeProof}
          />
          <Stack.Screen
            name={ScreenNames.UPPLOAD_CHALLENGE_PROOF_STATUS}
            component={UploadChallengeProofStatus}
          />
          <Stack.Screen
            name={ScreenNames.CREATE_CHALLENGE}
            component={CreateChallenge}
          />
          <Stack.Screen
            name={ScreenNames.ADD_REQUIREMENTS}
            component={AddRequirements}
          />
          <Stack.Screen name={ScreenNames.RE_CHALLENGE} component={ReChallenge} />
          <Stack.Screen
            name={ScreenNames.CHALLENGE_ACCEPTED}
            component={ChallengeAccepted}
          />
          <Stack.Screen
            name={ScreenNames.COMMENT_SCREEN}
            component={CommentScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {
        screenLoader &&
        <LoadingSpinner />
      }
    </>
  );
};
export default MainStack;