import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import IMAGES from '../../global/images';

const PostComments = ({item}) => {
  const [showOption, setShowOption] = useState();
  return (
    <View style={styles.commentWrapper}>
      <View style={styles.headerWrapper}>
        {item?.user?.map((item, index) => (
          <View style={styles.commentHeader}>
            <Image source={IMAGES.UserProfile} style={styles.commentUser} />
            <View>
              <Text style={styles.commentName}>{item?.username}</Text>
              <Text style={styles.commentInfo}>
                {item?.displayName} <View style={styles.dotStyle} /> 3 d
              </Text>
            </View>
          </View>
        ))}
        <TouchableOpacity
          onPress={() => setShowOption(!showOption)}
          activeOpacity={0.8}
          style={styles.moreIcon}>
          <Image source={IMAGES.MoreIcon} style={styles.imageStyle} />
        </TouchableOpacity>

        {showOption && (
          <View style={styles.optionWrapper}>
            <TouchableOpacity activeOpacity={0.8} style={styles.optionList}>
              <Text style={styles.commentName}>Edit Comment</Text>
              <Image source={IMAGES.EditComment} style={styles.optionIcon} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.optionList}>
              <Text style={styles.commentName}>Report</Text>
              <Image source={IMAGES.ReportIcon} style={styles.optionIcon} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <Text numberOfLines={4} style={styles.commentTxt}>
        {item?.comment}
      </Text>
    </View>
  );
};

export default PostComments;
