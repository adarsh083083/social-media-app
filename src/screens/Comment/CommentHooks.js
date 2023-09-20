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
import {styles} from './CommentStyle';
import MenuSvg from '../../assets/svgs/MenuBarSvg.svg';
import LikeSvg from '../../assets/svgs/LikeSvg.svg';
import DisLikeSvg from '../../assets/svgs/DislikeSvg.svg';
import CommentSvg from '../../assets/svgs/CommentSvg.svg';
import EmojiSelectorSvg from '../../assets/svgs/EmojiSvg.svg';
import EditProfileScreen from '../EditProfile/EditProfileScreen';

const CommentHooks = () => {
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
  const [emojiDataCount, setEmojiDataCount] = React.useState([]);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedTab, setSelectedTab] = useState(-1);
  const [commentVisibility, setCommentVisibility] = React.useState(false);
  const [editCommentVisibility, setEditCommentVisibility] =
    React.useState(false);
  const [commentText, setCommentText] = React.useState('');
  const [selectComment, setSelectComment] = React.useState(-1);

  const comentListData = [
    {
      name: 'Ben',
      userName: '@developerben',
      userImage: '',
      date: '8 u',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt facilisis libero, quis iaculis nunc mollis at.',
      type: 0,
    },
    {
      name: 'Ben',
      userName: '@developerben',
      userImage: '',
      date: '8 u',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt facilisis libero, quis iaculis nunc mollis at.',
      type: 0,
    },
    {
      name: 'Ben',
      userName: '@developerben',
      userImage: '',
      date: '8 u',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt facilisis libero, quis iaculis nunc mollis at.',
      type: 0,
    },
  ];

  const renderTopTab = ({item, index}) => {
    const onpress = () => {
      selectedTab == -1 ? setSelectedTab(index) : setSelectedTab(-1);
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

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleEmojiSelected = selectedEmoji => {
    // Do something with the selected emoji, e.g., store it in state or perform an action.
    // if (condition) {
    setEmojiDataCount([...emojiDataCount, selectedEmoji]);
    // } else {
    //     let removeEmoji
    //     setEmojiDataCount
    // }
    toggleModal();
  };
  const renderEmoji = (item, index) => {
    return (
      <View style={styles.emojiContainer}>
        <Text style={styles.emojiFontStyle}>{item}</Text>
      </View>
    );
  };
  const openComment = () => {
    setCommentVisibility(!commentVisibility);
  };
  const editComment = index => {
    setSelectComment(index);
    setEditCommentVisibility(!editCommentVisibility);
  };
  const openEmojiPicker = () => {
    toggleModal();
  };
  const send = () => {
    setSelectComment(-1);
    setCommentText('');
  };

  const renderComment = ({item, index}) => {
    return (
      <View>
        <View
          style={{
            ...styles.commentMainContainer,
            backgroundColor: index == selectComment && Colors.WHITE + 10,
          }}>
          <View style={styles.mainFlexDirectionContainer}>
            <View style={styles.subFlexDirectionContainer}>
              <View style={styles.profileImage}>
                <Image
                  source={require('../../assets/images/profile_picture.png')}
                  style={styles.postImageStyle}
                />
              </View>
              <View style={styles.marginLeftContainer}>
                <Text style={styles.nameFontStyle}>{item.name}</Text>
                <Text style={styles.userNameFontStyle}>
                  {item.userName}.{item.date}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
              onPress={() => editComment(-1)}>
              <MenuSvg />
            </TouchableOpacity>
          </View>
          <Text style={styles.descriptionFontStyle}>{item.description}</Text>
        </View>
        {editCommentVisibility && (
          <View style={styles.editCommentPositoinContainer}>
            <View style={styles.editContainer}>
              <Text
                onPress={() => editComment(index)}
                style={styles.editCommentFontStyle}>
                Edit Commet
              </Text>
              <Text style={styles.reportFontStyle}>Report</Text>
            </View>
          </View>
        )}
      </View>
    );
  };
  const renderPost = ({item, index}) => {
    return (
      <View style={{...styles.cardMainContainer}}>
        <View style={styles.mainFlexDirectionContainer}>
          <View style={styles.subFlexDirectionContainer}>
            <View style={styles.profileImage}>
              <Image
                source={require('../../assets/images/profile_picture.png')}
                style={styles.postImageStyle}
              />
            </View>
            <View style={styles.marginLeftContainer}>
              <Text style={styles.nameFontStyle}>{item.name}</Text>
              <Text style={styles.userNameFontStyle}>
                {item.userName}.{item.date}
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.descriptionFontStyle}>{item.description}</Text>
        <View style={styles.imageSection}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/backGroundImage.png')}
              style={styles.postImageStyle}
            />
          </View>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.marginHorizontalContainer}>
          <View style={styles.likeAndDislikeContainer}>
            <TouchableOpacity>
              <LikeSvg />
            </TouchableOpacity>
            <Text style={styles.likeCountFontStyle}>210</Text>
            <TouchableOpacity>
              <DisLikeSvg />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={openComment}
            style={styles.commentContainer}>
            <CommentSvg />
            <Text style={styles.commentFontStyle}>{'8'}</Text>
          </TouchableOpacity>
          <View style={styles.horizontalContainer}>
            {emojiDataCount.map(renderEmoji)}
          </View>
          {/* <Text style={styles.emojiFontStyle}>{emojiDataCount[0]}</Text> */}
          <TouchableOpacity
            onPress={openEmojiPicker}
            style={styles.emojiContainer}>
            <EmojiSelectorSvg />
          </TouchableOpacity>
        </ScrollView>
        {commentVisibility && (
          <FlatList
            contentContainerStyle={styles.contentStyle1}
            data={comentListData}
            renderItem={renderComment}
          />
        )}
      </View>
    );
  };
  return {
    postData,
    renderPost,
    renderTopTab,
    modalVisible,
    toggleModal,
    handleEmojiSelected,
    commentVisibility,
    commentText,
    setCommentText,
    send,
    selectComment,
  };
};

export {CommentHooks};
