import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import Gradient from '../../components/Gradient/Gradient';
import IMAGES from '../../global/images';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {Colors} from '../../global';
import AppButton from '../../components/AppButton/AppButton';
import {CreatePostHooks} from './CreatePostHooks';
import GIFModal from './GIFModal';
import LocationModal from './LocationModal';

const CreatePost = () => {
  const navigation = useNavigation();
  const {
    _handleSelectFile,
    _handleModalVisible,
    _removeSelectedFile,
    _handleMediaChange,
    postMediaPath,
    postMedia,
    showGIFModal,
    showLocationModal,
    selectedGif,
    selectedLocation,
    selectedVideo,
  } = CreatePostHooks();
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar
        barColor={Colors.PRIMARY_COLOR}
        isLightBar={true}
        isTopSpace={true}
      />
      <Gradient
        children={
          <View style={styles.flexWrapper}>
            <View style={styles.px20}>
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => navigation.pop()}
                  activeOpacity={0.8}>
                  <Text style={styles.subHeading}>Cancel</Text>
                </TouchableOpacity>
                <AppButton
                  btnStyle={styles.btnStyle}
                  btnText="Post"
                  onPress={() => {}}
                />
              </View>
              <ScrollView>
                <View style={styles.profileContainer}>
                  <Image
                    source={IMAGES.UserProfile}
                    style={styles.profileIcon}
                  />
                  <View>
                    <Text style={styles.subHeading}>Michiel</Text>
                    <View style={styles.visibleBtn}>
                      <Image
                        source={IMAGES.LockIcon}
                        style={styles.visibleIcon}
                      />
                      <Text style={styles.para}>Only visible to followers</Text>
                    </View>
                  </View>
                </View>

                <TextInput
                  style={styles.textInput}
                  multiline={true}
                  placeholder="what's on your mind?"
                  placeholderTextColor={Colors.LIGHT_GRAY}
                />
                {postMediaPath && (
                  <View>
                    <TouchableOpacity
                      onPress={() => _removeSelectedFile()}
                      style={styles.clsoeIcon}
                      activeOpacity={0.8}>
                      <Image
                        source={IMAGES.ClsoeIcon}
                        style={{
                          width: '100%',
                          height: '100%',
                          resizeMode: 'contain',
                        }}
                      />
                    </TouchableOpacity>
                    <Image source={postMediaPath} style={styles.postImage} />
                  </View>
                )}

                {selectedGif && (
                  <View>
                    <TouchableOpacity
                      onPress={() => _removeSelectedFile()}
                      style={styles.clsoeIcon}
                      activeOpacity={0.8}>
                      <Image
                        source={IMAGES.ClsoeIcon}
                        style={{
                          width: '100%',
                          height: '100%',
                          resizeMode: 'contain',
                        }}
                      />
                    </TouchableOpacity>
                    <Image source={selectedGif} style={styles.postImage} />
                  </View>
                )}

                {selectedLocation && (
                  <View style={[styles.header, {justifyContent: 'flex-start'}]}>
                    <Image
                      source={IMAGES.AddLocation}
                      style={[
                        styles.addPostIcons,
                        {marginRight: 10, tintColor: Colors.PURPLE},
                      ]}
                    />
                    <Text style={[styles.subHeading, {color: Colors.PURPLE}]}>
                      {selectedLocation}
                    </Text>
                  </View>
                )}
              </ScrollView>
            </View>

            <View style={styles.optionContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => _handleSelectFile(1)}>
                <Image source={IMAGES.AddImage} style={styles.addPostIcons} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => _handleModalVisible('GIF')}>
                <Image source={IMAGES.AddGif} style={styles.addPostIcons} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => _handleSelectFile(2)}>
                <Image source={IMAGES.AddVideo} style={styles.addPostIcons} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => _handleModalVisible('GPS')}>
                <Image
                  source={IMAGES.AddLocation}
                  style={styles.addPostIcons}
                />
              </TouchableOpacity>
            </View>
          </View>
        }
      />
      <GIFModal
        showGIFModal={showGIFModal}
        _handleModalVisible={() => _handleModalVisible('GIF')}
        _handleMediaChange={_handleMediaChange}
      />

      <LocationModal
        showLocationModal={showLocationModal}
        _handleModalVisible={() => _handleModalVisible('GPS')}
        _handleMediaChange={_handleMediaChange}
      />
    </View>
  );
};

export default CreatePost;
