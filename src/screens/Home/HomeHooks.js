import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {Colors, ScreenNames} from '../../global/index';
import {useNavigation} from '@react-navigation/native';
import {styles} from './HomeStyle';
import PostCard from '../../components/PostCard/PostCard';
import IMAGES from '../../global/images';
import AppButton from '../../components/AppButton/AppButton';
import {
  DisLikePost,
  GetInterestFeed,
  LikePost,
  getFollowingFeed,
  getInterestFeed,
} from '../../redux/asyncThunks/auth.asyncThunk';

import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {setScreenLoader} from '../../redux/slices/auth.slices';

const HomeHooks = () => {
  const {screenLoader} = useSelector(state => state.authSlice);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(false);
  const [feedFollowing, setFeedFollowing] = React.useState(null);
  const [feedInterest, setFeedInterest] = React.useState(null);
  let swtichFollowingData = selectedTab == false ? feedFollowing : feedInterest;
  console.log(feedInterest,"here is the feed interest")
  const postData = [
    {
      name: 'Michiel',
      userName: '@michielipenburg',
      userImage: '',
      date: '6 m',
      description: 'Proud to see our name shining . ',
      type: 0,
    },
    {
      name: 'Ben',
      userName: '@developerben',
      userImage: '',
      date: '8 u',
      description:
        'Just found out about the NFT-hype. What a time to be alive. ',
      type: 0,
    },
    {
      name: 'Michiel',
      userName: '@michielipenburg',
      userImage: '',
      date: '8 u',
      description: `SocialBlox is moving at lightning speed.
            Shoutout to all participants of the seed round. http://SocialBlox.io is ready to move
            SocialBlox uses blockchain to transform social media.
            We will be track sponsor of the Amsterdam world series blockchain expo.`,
      type: 0,
    },
  ];
  const renderTopTab = ({item, index}) => {
    const onpress = () => {
      selectedTab == false ? setSelectedTab(true) : setSelectedTab(false);
    };
    return (
      <TouchableOpacity
        onPress={onpress}
        style={[
          styles.topTabSubContainer,
          {
            backgroundColor:
              selectedTab == index
                ? Colors.DARK_JUNGLE_METAL
                : Colors.GUN_METAL,
          },
        ]}>
        <Text style={styles.topTabFontStyle}>{item}</Text>
      </TouchableOpacity>
    );
  };
  const getFeedFollowingListing = () => {
    dispatch(setScreenLoader(true));
    dispatch(getFollowingFeed())
      .unwrap()
      .then(res => {
        console.log(res, 'response');
        if (res?.data?.statusCode == '200') {
          setFeedFollowing(res?.data?.data);
          dispatch(setScreenLoader(false));
        }
      })
      .catch(err => {
        dispatch(setScreenLoader(false));
        console.log(err, 'error');
      });
  };
  const getFeedInerestListing = async () => {
    let body = {
      interest: ['game'],
    };
    dispatch(GetInterestFeed(body))
      .unwrap()
      .then(res => {
        console.log('res=dddddddddddddddddddddd==>>', res);
        if (res?.data?.statusCode == '200') {
          setFeedInterest(res?.data?.data);
        }
      })
      .catch(err => {
        console.log(err, 'error');
      });
  };
  const internetComponent = () => {
    const goToChooseInterest = () => {
      navigation.navigate(ScreenNames.CHOOSE_INTREST);
    };
    return (
      <View style={styles.interestContainer}>
        <Image source={IMAGES.Interest} style={styles.interestImage} />
        <AppButton
          onPress={goToChooseInterest}
          btnStyle={styles.btnStyle2}
          btnTextStyle={styles.btnTextStyle2}
          btnText="Choose your interests"
        />
      </View>
    );
  };

  const postLike = postId => {
    dispatch(LikePost(postId))
      .unwrap()
      .then(res => {
        if (res?.data?.statusCode == '200') {
          console.log('like success', res.data);
        }
      })
      .catch(err => {
        console.log(err, 'error');
      });
  };

  const postDisLike = postId => {
    dispatch(DisLikePost(postId))
      .unwrap()
      .then(res => {
        if (res?.data?.statusCode == '200') {
          console.log('dislike success', res.data);
        }
      })
      .catch(err => {
        console.log(err, 'error');
      });
  };

  const renderPost = ({item, index}) => {
    return (
      <PostCard
        item={item}
        index={index}
        postLike={postLike}
        postDisLike={postDisLike}
      />
    );
  };
  React.useEffect(() => {
    getFeedFollowingListing();
    getFeedInerestListing();
  }, []);
  return {
    postData,
    renderPost,
    renderTopTab,
    selectedTab,
    internetComponent,
    swtichFollowingData,
  };
};
export {HomeHooks};
