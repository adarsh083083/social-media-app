import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Gradient from '../../components/Gradient/Gradient';
import IMAGES from '../../global/images';
import {useNavigation, useRoute} from '@react-navigation/native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {Colors} from '../../global';
import styles from './FollowerListStyle';
import {useDispatch} from 'react-redux';
import {DeleteFollowerThunkById} from '../../redux/asyncThunks/auth.asyncThunk';
import {setScreenLoader} from '../../redux/slices/auth.slices';

const FollowersList = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const routes = useRoute();
  const userData = routes?.params?.followerData.data;
  const followerId = userData[0]?._id;

  const handleDeleteFollower = () => {
    dispatch(setScreenLoader(true));
    dispatch(DeleteFollowerThunkById({followerId: followerId}))
      .unwrap()
      .then(res => {
        if (res) {
          dispatch(setScreenLoader(false));
        }
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
          <View style={styles.mainContainer}>
            <View style={styles.txtWrapper}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.8}
                style={styles.backBtn}>
                <Image source={IMAGES.BackArrow} style={styles.backArrow} />
              </TouchableOpacity>
              <Text style={styles.mainHeading}>Followers</Text>
            </View>

            <FlatList
              data={userData}
              renderItem={({item}) => (
                <View style={styles.card}>
                  <Image source={IMAGES.BackArrow} style={styles.userPic} />
                  <View>
                    <Text style={styles.subHeading}>{item?.displayName}</Text>
                    <Text style={styles.para}>{item?.username}</Text>
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btnStyle}
                    onPress={() => handleDeleteFollower()}>
                    <Text style={styles.para}>Delete</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        }
      />
    </View>
  );
};

export default FollowersList;
