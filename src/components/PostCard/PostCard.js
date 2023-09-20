import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {Colors, Constant, Fonts, ScreenNames} from '../../global';
import MenuSvg from '../../assets/svgs/MenuBarSvg.svg';
import LikeSvg from '../../assets/svgs/LikeSvg.svg';
import DisLikeSvg from '../../assets/svgs/DislikeSvg.svg';
import CommentSvg from '../../assets/svgs/CommentSvg.svg';
import EmojiSelectorSvg from '../../assets/svgs/EmojiSvg.svg';
import BottomModal from '../BottomModal/BottomModal';
// import EmojiModal from 'react-native-emoji-modal';
import IMAGES from '../../global/images';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
const PostCard = ({item, index, postLike, postDisLike}) => {
  let userItem = item?.post;

  const navigation = useNavigation();
  const [emojiModalVisibility, setEmojiModalVisibility] = useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [emojiDataCount, setEmojiDataCount] = React.useState([]);
  const [showOption, setShowOption] = useState(false);
  const toggleOption = () => setShowOption(!showOption);
  const openEmojiPicker = () => {
    toggleModal();
  };
  const toggleEmojiModal = () => setEmojiModalVisibility(!emojiModalVisibility);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const renderEmoji = (item, index) => {
    return (
      <TouchableOpacity
        onPress={toggleEmojiModal}
        style={styles.emojiContainer}>
        <Text style={styles.emojiFontStyle}>{item}</Text>
      </TouchableOpacity>
    );
  };
  const handleEmojiSelected = selectedEmoji => {
    setEmojiDataCount([...emojiDataCount, selectedEmoji]);
    toggleModal();
  };
  const navigateToComment = () => {
    navigation.navigate(ScreenNames.COMMENT_SCREEN, {postId: userItem?._id});
  };
  const likePost = () => {
    postLike(userItem?._id);
  };
  const disLikePost = () => {
    postDisLike(userItem?._id);
  };
  const menuModal = () => {
    return (
      <View style={styles.optionContainer}>
        <TouchableOpacity
          onPress={toggleOption}
          activeOpacity={0.8}
          style={[styles.optionItem, styles.borderBottom]}>
          <Text style={styles.para}>Share</Text>
          <Image source={IMAGES.ShareIcon} style={styles.optionIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={toggleOption}
          style={styles.optionItem}>
          <Text style={styles.para}>Remove</Text>
          <Image source={IMAGES.DeleteIcon} style={styles.optionIcon} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.cardMainContainer}>
      <View style={styles.mainFlexDirectionContainer}>
        <View style={styles.subFlexDirectionContainer}>
          <View style={styles.profileImage}>
            <Image
              source={
                userItem?.user?.image != null
                  ? {uri: userItem?.user?.image}
                  : require('../../assets/images/profile_picture.png')
              }
              style={styles.postImageStyle}
            />
          </View>
          <View style={styles.marginLeftContainer}>
            <Text style={styles.nameFontStyle}>
              {userItem?.user?.displayName}
            </Text>
            <Text style={styles.userNameFontStyle}>
              {userItem?.user?.username}.{' '}
              {moment(userItem.createdAt).format('MM')} m
            </Text>
          </View>
        </View>
        <TouchableOpacity
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          onPress={toggleOption}>
          <MenuSvg />
        </TouchableOpacity>
      </View>
      <Text style={styles.descriptionFontStyle}>{userItem.text}</Text>
      <View style={styles.imageSection}>
        {
          // userItem?.slice(-3) == 'png' &&
          <View style={styles.imageContainer}>
            <Image
              source={{uri: userItem?.media}}
              style={styles.postImageStyle}
            />
          </View>
        }
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.marginHorizontalContainer}>
        <View style={styles.likeAndDislikeContainer}>
          <TouchableOpacity onPress={likePost}>
            <LikeSvg />
          </TouchableOpacity>
          <Text style={styles.likeCountFontStyle}>{userItem?.likes}</Text>
          <TouchableOpacity onPress={disLikePost}>
            <DisLikeSvg />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={navigateToComment}
          style={styles.commentContainer}>
          <CommentSvg />
          <Text style={styles.commentFontStyle}>{userItem?.comments}</Text>
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
      {/* {modalVisible &&
                <View style={styles.emojiContainer1}>
                    <View style={styles.emojiWidthContainer}>
                        <EmojiModal
                            onClose={toggleModal}
                            style={{
                                backgroundColor: Colors.BG_COLOR, // Set your background color here
                                flex: 1,
                            }}
                            onEmojiSelected={handleEmojiSelected}
                            emojiStyle={{
                                fontSize: Constant.CHANGE_BY_MOBILE_DPI(24), // Set the font size of emojis
                                color: Colors.BLACK, // Set the text color of emojis
                                fontFamily: Fonts.SEMIBOLD
                            }}
                        />
                    </View>
                </View>
            } */}

      {/* menu Modal */}
      {showOption && menuModal()}
      {/* bottom Sheet Modal  */}
      <BottomModal
        visibility={emojiModalVisibility}
        toggle={toggleEmojiModal}
      />
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  imageStyle: {
    height: Constant.CHANGE_BY_MOBILE_DPI(32),
    width: Constant.CHANGE_BY_MOBILE_DPI(32),
  },
  notificationContainer: {
    height: Constant.CHANGE_BY_MOBILE_DPI(32),
    width: Constant.CHANGE_BY_MOBILE_DPI(32),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GUN_METAL,
  },
  topTabContainer: {
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    backgroundColor: Colors.GUN_METAL,
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
    padding: Constant.CHANGE_BY_MOBILE_DPI(4),
  },
  topTabSubContainer: {
    backgroundColor: Colors.DARK_JUNGLE_METAL,
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),

    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(16),
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  topTabFontStyle: {
    fontSize: Fonts.FONT_SIZE_15,
    fontFamily: Fonts.REGULAR,
    color: Colors.WHITE,
  },
  imageContainer: {
    height: Constant.CHANGE_BY_MOBILE_DPI(192),
    width: Constant.SCREEN_WIDTH - 40,
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(15),
  },
  postImageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(15),
  },
  profileImage: {
    height: Constant.CHANGE_BY_MOBILE_DPI(43),
    width: Constant.CHANGE_BY_MOBILE_DPI(43),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
  },
  marginLeftContainer: {
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  nameFontStyle: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    color: Colors.WHITE,
    fontFamily: Fonts.MEDIUM,
  },
  userNameFontStyle: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(14),
    color: Colors.MONSON,
    fontFamily: Fonts.LIGHT,
  },
  mainFlexDirectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  subFlexDirectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionFontStyle: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    color: Colors.WHITE,
    fontFamily: Fonts.LIGHT,
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  likeAndDislikeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(3),
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(7),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
    backgroundColor: Colors.GUN_METAL,
  },
  marginHorizontalContainer: {
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  likeCountFontStyle: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(13),
    color: Colors.WHITE,
    fontFamily: Fonts.MEDIUM,
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(10),
    includeFontPadding: true,
  },
  commentContainer: {
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
    backgroundColor: Colors.GUN_METAL,
    padding: Constant.CHANGE_BY_MOBILE_DPI(3),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(7),
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  commentFontStyle: {
    fontSize: Fonts.FONT_SIZE_12,
    color: Colors.WHITE,
    fontFamily: Fonts.LIGHT,
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(5),
    includeFontPadding: true,
    top: 1,
  },
  emojiContainer: {
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
    backgroundColor: Colors.GUN_METAL,
    padding: Constant.CHANGE_BY_MOBILE_DPI(3),
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(10),
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(5),
  },
  cardMainContainer: {
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(30),
  },
  contentContainerMArginVretical: {
    marginVertical: Constant.CHANGE_BY_MOBILE_DPI(20),
    paddingBottom: Constant.CHANGE_BY_MOBILE_DPI(70),
  },
  emojiContainer1: {
    zIndex: 100,
    position: 'absolute',
    bottom: Constant.CHANGE_BY_MOBILE_DPI(20),
    // alignSelf: 'center'
  },
  emojiWidthContainer: {
    width: Constant.SCREEN_WIDTH,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emojiFontStyle: {
    fontSize: Constant.CHANGE_BY_MOBILE_DPI(16),
    color: Colors.WHITE,
    fontFamily: Fonts.BOLD,
  },
  PlusContainer: {
    height: Constant.CHANGE_BY_MOBILE_DPI(56),
    width: Constant.CHANGE_BY_MOBILE_DPI(56),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(100),
    backgroundColor: Colors.PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  positionContainer: {
    position: 'absolute',
    bottom: Constant.CHANGE_BY_MOBILE_DPI(70),
    right: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  postContainer: {},
  optionContainer: {
    position: 'absolute',
    top: Constant.CHANGE_BY_MOBILE_DPI(55),
    right: Constant.CHANGE_BY_MOBILE_DPI(20),
    backgroundColor: Colors.DARK_GRAY,
    zIndex: 2,
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(14),
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    columnGap: Constant.CHANGE_BY_MOBILE_DPI(40),
  },
  optionIcon: {
    width: Constant.CHANGE_BY_MOBILE_DPI(20),
    height: Constant.CHANGE_BY_MOBILE_DPI(20),
    resizeMode: 'contain',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBlockColor: Colors.BLASTIC_SEA,
  },
  para: {
    color: Colors.GREY_COLOR,
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.REGULAR,
    textAlign: 'center',
  },
});
