import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './CommentStyle';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {Colors} from '../../global';
import Gradient from '../../components/Gradient/Gradient';
import {CommentHooks} from './CommentHooks';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import IMAGES from '../../global/images';
import PostComments from '../../components/PostComments/PostComments';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  EditCommentByIdThunk,
  GetCommentByIdThunk,
  PostCommentByIdThunk,
} from '../../redux/asyncThunks/auth.asyncThunk';
import {setScreenLoader} from '../../redux/slices/auth.slices';

const CommentScreen = () => {
  const {
    renderTopTab,
    postData,
    renderPost,
    modalVisible,
    toggleModal,
    handleEmojiSelected,
    commentVisibility,
    setCommentText,
    commentText,
    send,
    selectComment,
  } = CommentHooks();
  const [commentData, setCommentData] = useState();
  console.log(commentData, 'MYcomment data');
  const routes = useRoute();
  const postId = routes?.params?.postId;
  console.log(postId, 'here is the post id');
  const dispatch = useDispatch();
  const handlePostCommnet = () => {
    dispatch(setScreenLoader(true));
    dispatch(PostCommentByIdThunk({comment: commentText, postId}))
      .unwrap()
      .then(res => {
        handleGetCommnet();
        if (res) {
          dispatch(setScreenLoader(false));
          setCommentText('');
        }
      })
      .catch(err => {
        dispatch(setScreenLoader(false));
      });
    dispatch(setScreenLoader(false));
  };

  const handleGetCommnet = () => {
    dispatch(setScreenLoader(true));
    dispatch(GetCommentByIdThunk({postId}))
      .unwrap()
      .then(res => {
        if (res) {
          setCommentData(res?.data?.data);
          dispatch(setScreenLoader(false));
        }
      })
      .catch(err => {
        dispatch(setScreenLoader(false));
      });
    dispatch(setScreenLoader(false));
  };
  useEffect(() => {
    handleGetCommnet();
  }, []);

  // const handleEditComment=()=>{
  //   dispatch(setScreenLoader(true));
  //   dispatch(EditCommentByIdThunk())
  //     .unwrap()
  //     .then(res => {
  //       if (res) {
  //         setCommentData(res?.data?.data);
  //         dispatch(setScreenLoader(false));
  //       }
  //     })
  //     .catch(err => {
  //       dispatch(setScreenLoader(false));
  //     });
  //   dispatch(setScreenLoader(false));
  // }

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
            <GlobalHeader headerName={'Comments'} />
            {commentData && (
              <View style={styles.postContainer}>
                <FlatList
                  data={commentData}
                  contentContainerStyle={styles.contentContainerMArginVretical}
                  renderItem={({item}) => <PostComments item={item} />}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            )}

            {/* {commentVisibility && ( */}
            <View style={styles.positionInputContainer}>
              <View style={styles.inputContainer}>
                <View style={styles.imageMarginTop}>
                  <Image
                    style={styles.imageStyle}
                    source={IMAGES.ProfilePicture}
                  />
                </View>
                <View style={styles.flexContainer}>
                  <TextInput
                    placeholder="Add a comment"
                    placeholderTextColor={Colors.WHITE}
                    spellCheck={true}
                    onChangeText={setCommentText}
                    multiline
                    style={styles.inputStyle}>
                    {commentText}
                  </TextInput>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    handlePostCommnet(), send;
                  }}
                  style={styles.buttonMarginTop}>
                  <Text style={styles.commentButtonFontStyle}>
                    {selectComment == -1 ? 'Send' : 'Save'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* )} */}
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
          </View>
        }
      />
    </View>
  );
};

export default CommentScreen;
