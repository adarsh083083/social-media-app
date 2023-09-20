import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {Colors, Constant, ScreenNames} from '../../global';
import Gradient from '../../components/Gradient/Gradient';
import {useNavigation} from '@react-navigation/native';
import GlobalModal from '../../components/GlobalModal/GlobalModal';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import {useDispatch, useSelector} from 'react-redux';
import {
  DeleteUserAccountThunk,
  LogoutThunk,
} from '../../redux/asyncThunks/auth.asyncThunk';
import {persistor} from '../../redux/store';
import {clearData} from '../../redux/slices/auth.slices';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [visibility, setVisibility] = React.useState(false);
  const [walletVisibility, setWalletVisibility] = React.useState(false);

  const openWalletModal = () => {
    setWalletVisibility(!walletVisibility);
  };
  const dispatch = useDispatch();
  const navigateToEditProfile = () => {
    navigation.navigate(ScreenNames.EDIT_PROFILE_SCREEN);
  };
  const toggle = () => {
    setVisibility(!visibility);
  };
  const navigateToNotification = () => {
    navigation.navigate(ScreenNames.NOTIFICATIONPREFERENCE);
  };
  const navigateToSetting = () => {
    navigation.navigate(ScreenNames.SECURITYOPTIONS);
  };
  const navigateToInterset = () => {
    navigation.navigate(ScreenNames.ABOUTSOCIALBLOX);
  };
  const navigateToOnboarding = () => {
    navigation.navigate(ScreenNames.ON_BOARDING);
  };

  const handlelogdOut = () => {
    dispatch(LogoutThunk());
  };

  const deleteUserAccount = () => {
    dispatch(DeleteUserAccountThunk()).unwrap().then(res=>{
      if(res){
        navigateToOnboarding()
      }
      console.log(res,'dfdsfds')
    })
  };

  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar
        barColor={Colors.PRIMARY_COLOR}
        isLightBar={true}
        isTopSpace={true}
      />
      <Gradient
        children={
          <View style={styles.container}>
            <GlobalHeader headerName={'Settings'} rightSvg={null} />
            <View style={styles.subContainer}>
              <TouchableOpacity
                onPress={navigateToEditProfile}
                style={styles.option}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="user-o" size={20} color="#fff" />
                  <Text style={styles.optionText}>Edit Profile</Text>
                </View>
                <View>
                  <Icon name="chevron-right" size={16} color="#fff" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={openWalletModal}
                activeOpacity={0.8}
                style={styles.option}>
                <View style={{flexDirection: 'row'}}>
                  <EntypoIcon name="wallet" size={20} color="#fff" />
                  <Text style={styles.optionText}>Wallet</Text>
                </View>
                <View>
                  <Icon name="chevron-right" size={16} color="#fff" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate(ScreenNames.NOTIFICATION_PREFERENCE)
                }
                style={styles.option}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="bell-o" size={20} color="#fff" />
                  <Text style={styles.optionText}>Notifications</Text>
                </View>
                <View>
                  <Icon name="chevron-right" size={16} color="#fff" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="lock" size={20} color="#fff" />
                  <Text style={styles.optionText}>Privacy</Text>
                </View>
                <View>
                  <Icon name="chevron-right" size={16} color="#fff" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate(ScreenNames.SECURITY_OPTIONS)
                }
                style={styles.option}>
                <View style={{flexDirection: 'row'}}>
                  <IoniconsIcon
                    name="shield-checkmark-outline"
                    size={20}
                    color="#fff"
                  />
                  <Text style={styles.optionText}>Security</Text>
                </View>
                <View>
                  <Icon name="chevron-right" size={16} color="#fff" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="question-circle-o" size={20} color="#fff" />
                  <Text style={styles.optionText}>Help center</Text>
                </View>
                <View>
                  <Icon name="chevron-right" size={16} color="#fff" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate(ScreenNames.ABOUT_SOCIAL_BLOX)
                }
                style={styles.option}>
                <View style={{flexDirection: 'row'}}>
                  <AntDesignIcon
                    name="exclamationcircleo"
                    size={20}
                    color="#fff"
                  />
                  <Text style={styles.optionText}>About SocialBlox</Text>
                </View>
                <View>
                  <Icon name="chevron-right" size={16} color="#fff" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.option}
                onPress={() => handlelogdOut()}>
                <View style={{flexDirection: 'row'}}>
                  <MaterialIconsIcon name="logout" size={20} color="#fff" />
                  <Text style={styles.optionText}>Sign-out</Text>
                </View>
                <View>
                  <Icon name="chevron-right" size={16} color="#fff" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.option}
                onPress={() => deleteUserAccount()}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="trash-o" size={20} color="#fff" />
                  <Text style={styles.optionText}>Delete your account</Text>
                </View>
                <View>
                  <Icon name="chevron-right" size={16} color="#fff" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
      <GlobalModal
        visibility={walletVisibility}
        toggleModal={openWalletModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(30),
  },
  container: {
    flex: 1,
    backgroundColor: '#272A2E',
  },
  header: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(24),
    fontWeight: 'bold',
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
    textAlign: 'center',
    color: '#fff',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(20),
    borderColor: '#ccc',
  },
  optionText: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    fontWeight: '500',
    color: '#fff',
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
});

export default SettingsScreen;
