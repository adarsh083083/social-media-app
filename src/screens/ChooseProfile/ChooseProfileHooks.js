import {View, Text} from 'react-native';
import React, {useState} from 'react';
import IMAGES from '../../global/images';
import ImagePicker from 'react-native-image-crop-picker';

const ChooseProfileHooks = () => {
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
        if (image) {
          setProfilePath({uri: image.path});
          setProfilePicture({
            isSelected: true,
            name: `profile-pic-${new Date()}`,
            uri: image.path,
            type: image.mime,
          });
          setOptionVisible(false);
        }
      })
      .catch(err => {});
  };

  return {
    _handleSelectProfile,
    optionVisible,
    profilePath,
    profilePicture,
    setOptionVisible,
  };
};

export {ChooseProfileHooks};
