import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import FormData from 'form-data';

import React, {useState} from 'react';
import Gradient from '../../components/Gradient/Gradient';
import Header from '../../components/Header/Header';
import IMAGES from '../../global/images';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import AppButton from '../../components/AppButton/AppButton';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {Colors, ScreenNames} from '../../global';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import {UploadProfileImageThunk} from '../../redux/asyncThunks/auth.asyncThunk';

const ChooseProfile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // const {
  //   _handleSelectProfile,
  //   optionVisible,
  //   profilePath,
  //   profilePicture,
  //   setOptionVisible,
  // } = ChooseProfileHooks();
  const [optionVisible, setOptionVisible] = useState(false);
  const [profilePath, setProfilePath] = useState(IMAGES.ProfilePlaceholder);
  const [profilePicture, setProfilePicture] = useState({isSelected: false});
  const _handleSelectProfile = async type => {
    let pickerType =
      type == 'GALLERY' ? ImagePicker.openPicker : ImagePicker.openCamera;
    pickerType({
      mediaType: 'photo',
      cropping: true,
      width: 250,
      height: 250,
      cropperCircleOverlay: true,
    })
      .then(image => {
        const fileName = image.path.split('/').pop();

        const file = {
          uri: image?.path,
          type: image?.mime,
          name: fileName,
        };

        if (image) {
          setProfilePath({uri: image?.path});
          setProfilePicture({
            isSelected: true,
            name: fileName,
            uri: image?.path,
            type: image?.mime,
          });
          const data = new FormData();

          if (image) {
            data.append('media', {
              uri: image?.path,
              name: fileName,
              type: image?.mime,
            });
          } else {
            return;
          }
          setOptionVisible(false);
          dispatch(UploadProfileImageThunk(data))
            .unwrap()
            .then(res => {
              if (res) {
                Alert.alert('Profile Picture upload successfully');
              }
            })
            .catch(err => {
              console.log(err, 'error');
            });
        }
      })
      .catch(err => {
        console.log(err, 'err');
      });
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
            <Header
              backArrowVisibility
              image={IMAGES.socialBloxLogo}
              title="Profile picture"
            />
            <View style={styles.profileContainer}>
              <TouchableOpacity
                onPress={() => setOptionVisible(true)}
                activeOpacity={0.8}
                style={styles.profileWrapper}>
                <Image source={profilePath} style={styles.profileCircle} />
                <Image source={IMAGES.AddIcon} style={styles.profileAdd} />
              </TouchableOpacity>
              <Text style={styles.profileText}>
                Set a profile picture that gives people an idea who you are
              </Text>
            </View>
            <View style={styles.btnContainer}>
              {profilePicture.isSelected ? (
                <AppButton
                  btnStyle={styles.btnStyle}
                  btnTextStyle={styles.btnTextStyle}
                  btnText="Next"
                  onPress={() => navigation.navigate(ScreenNames.PHARSEINFO)}
                />
              ) : (
                <AppButton
                  btnStyle={styles.btnStyle}
                  btnTextStyle={styles.btnTextStyle}
                  btnText="Skip"
                  onPress={() => navigation.navigate(ScreenNames.WALLET_SCREEN)}
                />
              )}
            </View>
          </View>
        }
      />
      <Modal
        visible={optionVisible}
        transparent={true}
        onRequestClose={() => setOptionVisible(false)}>
        <View style={styles.modalWrapper}>
          <Pressable
            style={styles.closeBtn}
            onPress={() => setOptionVisible(false)}
          />
          <View style={styles.btnWrapper}>
            <AppButton
              btnText="Open Camera"
              btnStyle={styles.modalBtnStyle}
              btnTextStyle={styles.btnTxt}
              onPress={() => _handleSelectProfile('CAMERA')}
            />
            <AppButton
              btnText="Open Gallery"
              btnStyle={styles.modalBtnStyle}
              btnTextStyle={styles.btnTxt}
              onPress={() => _handleSelectProfile('GALLERY')}
            />
            <AppButton
              btnText="Cancel"
              btnStyle={styles.modalBtnStyle}
              btnTextStyle={styles.btnCloseTxt}
              onPress={() => setOptionVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default ChooseProfile;
