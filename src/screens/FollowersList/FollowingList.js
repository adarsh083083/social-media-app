import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Gradient from '../../components/Gradient/Gradient';
import IMAGES from '../../global/images';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './FollowerListStyle';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {Colors} from '../../global';

const FollowingList = ({}) => {
  const navigation = useNavigation();
  const routes = useRoute();
  const folowingData = routes?.params?.followingData?.data;

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
              <Text style={styles.mainHeading}>Following</Text>
            </View>

            <FlatList
              data={folowingData}
              renderItem={({item}) => (
                <View style={styles.card}>
                  <Image source={IMAGES.BackArrow} style={styles.userPic} />
                  <View>
                    <Text style={styles.subHeading}>{item?.displayName}</Text>
                    <Text style={styles.para}>{item?.username}</Text>
                  </View>

                  <TouchableOpacity activeOpacity={0.8} style={styles.btnStyle}>
                    <Text style={styles.para}>Unfollow</Text>
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

export default FollowingList;
