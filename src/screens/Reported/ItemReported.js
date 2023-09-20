import {View, Text} from 'react-native';
import React from 'react';
import VideoComp from '../../components/Video/VideoComp';
import ImageComp from '../../components/Image/ImageComp';
import IMAGES from '../../global/images';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import ProfileBlock from '../../components/ProfileBlock/ProfileBlock';
const ItemReported = ({item, index}) => {
  switch (index) {
    case 1:
      return (
        <View>
          <ImageComp imageProfile={IMAGES.ProfilePicture} />
        </View>
      );
    case 2:
      // Handle the second index condition here
      return (
        <View
          style={
            index % 2
              ? {bottom: CHANGE_BY_MOBILE_DPI(150)}
              : {bottom: CHANGE_BY_MOBILE_DPI(0)}
          }>
          <VideoComp
            video={IMAGES.Challenges}
            imageRocket={IMAGES.Rocket}
            titleRocket={'8'}
            graphImage={IMAGES.Down_Graph}
            graphTitle={'2'}
            imageMute={IMAGES.Mute}
            btnStyle={{width: 200, height: 200}}
          />
        </View>
      );
    case 3:
      // Handle the third index condition here
      return (
        <View
          style={
            index % 3
              ? {bottom: CHANGE_BY_MOBILE_DPI(130)}
              : {bottom: CHANGE_BY_MOBILE_DPI(0)}
          }>
          <ProfileBlock
            profilePic={IMAGES.ProfilePicture}
            profileTitle={'Michael'}
            profileEmail={'@michielipenburg'}
          />
        </View>
      );
    default:
      return (
        <View>
          <VideoComp
            video={IMAGES.Challenges}
            imageRocket={IMAGES.Rocket}
            titleRocket={'8'}
            graphImage={IMAGES.Down_Graph}
            graphTitle={'2'}
            imageMute={IMAGES.Mute}
            btnStyle={{width: 200, height: 200}}
          />
        </View>
      );
  }
  // Render other items here
};
export default ItemReported;
