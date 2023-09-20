import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import {Colors, Constant, ScreenNames} from '../../../global';
import Gradient from '../../../components/Gradient/Gradient';
import IMAGES from '../../../global/images';
import AppButton from '../../../components/AppButton/AppButton';
import AppButtonImg from '../../../components/AppButtonImg/AppButtonImg';
import AppButtonComp from '../../../components/AppButtonComp/AppButtonComp';
import STATIC_DATA from '../../../global/arrays';
import HeaderComp from '../../../components/HeaderComp/HeaderComp';
import ItemChallenges from '../../../components/ListComponent/ItemChallenges';
import {ProfileHooks} from './ProfileHooks';
import styles from './ProfileStyles';
import GlobalModal from '../../../components/GlobalModal/GlobalModal';
import {useDispatch, useSelector} from 'react-redux';
import {
  GetFollowerListThunk,
  GetFollowingListThunk,
  UserPostAndProfileThunk,
} from '../../../redux/asyncThunks/auth.asyncThunk';
import {setScreenLoader} from '../../../redux/slices/auth.slices';
const ProfileScreen = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(0);
  const [walletVisibility, setWalletVisibility] = React.useState(false);
  const [userProfileDetails, setUserProfileDetails] = useState();
  console.log(userProfileDetails, 'userProfile datail');
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.authSlice);
  const UserData = useSelector(state => state.userProfileDetails?.Userdata);
  console.log(UserData, 'mmmmmmmmmmmmmmmm ');

  const userId = user?.data?._id;
  const openWalletModal = () => {
    setWalletVisibility(!walletVisibility);
  };
  const handleItemPress = index => {
    setSelectedItem(index);
  };
  const {goToEditProfileScreen} = ProfileHooks();
  const navigateToFollowers = ({followerData}) => {
    navigation.navigate(ScreenNames.FOLLOWERS_LIST, {followerData});
  };
  const navigateToFollowing = ({followingData}) => {
    navigation.navigate(ScreenNames.FOLLOWING_LIST, {followingData});
  };

  const modifyData = {
    _id: userId,
  };
  console.log(modifyData, 'modify data');
  //Here we are  calling usere post and profile details;
  const UserPostAndProfileDetails = () => {
    dispatch(UserPostAndProfileThunk(modifyData))
      .unwrap()
      .then(res => {
        if (res) {
          setUserProfileDetails(res?.data?.data);
        }
      });
  };

  useEffect(() => {
    UserPostAndProfileDetails();
  }, []);

  //APi calling for Get the Follower List
  const handleFollowerList = () => {
    dispatch(setScreenLoader(true));
    dispatch(GetFollowerListThunk())
      .unwrap()
      .then(res => {
        navigateToFollowers({
          followerData: res?.data,
        });
        dispatch(setScreenLoader(false));
      });
    dispatch(setScreenLoader(false));
  };
  //APi calling for Get the FollowingList
  const handleFollowingList = () => {
    dispatch(setScreenLoader(true));
    dispatch(GetFollowingListThunk())
      .unwrap()
      .then(res => {
        navigateToFollowing({
          followingData: res?.data,
        });
        dispatch(setScreenLoader(false));
      });
    dispatch(setScreenLoader(false));
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.mainContainer}>
              <View style={styles.flexContainer}>
                <HeaderComp
                  title={UserData[0]?.displayName}
                  subTitle={UserData[0]?.username}
                  image={IMAGES.Settings}
                  onPress={() =>
                    navigation.navigate(ScreenNames.SETTING_SCREEN)
                  }
                />

                <View style={styles.cardContainer}>
                  <View style={styles.socialBloxContainer}>
                    <View style={styles.copiedContainer}>
                      <Image
                        resizeMode="contain"
                        source={IMAGES.socialBloxLogo}
                        style={styles.socialBloxLogo}
                      />
                      <View>
                        <Text style={styles.titleCopied}>43445552.94</Text>
                        <Text style={styles.title}>$844.69</Text>
                      </View>
                      <AppButtonImg
                        image={IMAGES.Copied}
                        btnStyle={styles.btnStyle}
                        btnText={'0xBA...0A2A'}
                        btnTextStyle={styles.btnTextStyle}
                      />
                    </View>
                  </View>
                  <AppButton
                    onPress={openWalletModal}
                    btnStyle={styles.btnStyle2}
                    btnTextStyle={styles.btnTextStyle2}
                    btnText="Your Wallet"
                  />
                </View>
                <View>
                  <View style={styles.marginContainer}>
                    <View style={styles.flexDirectionContainer}>
                      <Image
                        source={require('../../../assets/images/profilePlaceholder.png')}
                        style={styles.imageStyle}
                      />
                      <View style={styles.marginLeft}>
                        <View style={styles.flexDirectionContainer}>
                          <Text style={styles.followerFontStyle}>
                            {UserData[0]?.followersCount}{' '}
                          </Text>
                          <TouchableOpacity
                            onPress={() => handleFollowerList()}>
                            <Text style={styles.followerSmallFontStyle}>
                              {' '}
                              Followers{' '}
                            </Text>
                          </TouchableOpacity>
                          <View style={styles.dot}></View>
                          <Text style={styles.followerFontStyle}>
                            {' '}
                            {UserData[0]?.followingCount}
                          </Text>
                          <TouchableOpacity
                            onPress={() => handleFollowingList()}>
                            <Text style={styles.followerSmallFontStyle}>
                              {' '}
                              Following
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.flexDirectionContainer}>
                          <Text style={styles.followerFontStyle}>
                            {UserData[0]?.postsCount}{' '}
                          </Text>
                          <Text style={styles.followerSmallFontStyle}>
                            {' '}
                            Posts{' '}
                          </Text>
                          <View style={styles.dot}></View>
                          <Text style={styles.followerFontStyle}>
                            {' '}
                            {UserData[0]?.completedChallengesCount}{' '}
                          </Text>
                          <Text style={styles.followerSmallFontStyle}>
                            {' '}
                            Completed challenges
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.introContainer}>
                    <Text style={styles.introTitle}>{UserData[0]?.bio}</Text>

                    <View style={styles.editButtonContainer}>
                      <AppButtonComp
                        onPress={goToEditProfileScreen}
                        btnStyle={styles.btnEditStyle}
                        btnTextStyle={styles.btnEditTextStyle}
                        btnText="Edit Profile"
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <FlatList
                  data={UserData}
                  contentContainerStyle={{
                    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(70),
                  }}
                  renderItem={({item, index}) => {
                    return (
                      <ItemChallenges
                        item={item}
                        onPress={() => handleItemPress(index)}
                        isSelected={selectedItem === index}
                      />
                    );
                  }}
                />
              </View>
            </View>
            <GlobalModal
              visibility={walletVisibility}
              toggleModal={openWalletModal}
            />
          </ScrollView>
        }
      />
    </View>
  );
};

export default ProfileScreen;
