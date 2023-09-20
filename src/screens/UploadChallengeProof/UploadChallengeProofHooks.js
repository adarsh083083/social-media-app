import {View, Text} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

const UploadChallengeProofHooks = () => {
  const [mediaList, setMediaList] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ]);
  const [selectedMedia, setSelectedMedia] = useState({});
  const [selectedMediaUrl, setSelectedMediaUrl] = useState('');
  const [selectedProofIDs, setSelectedProofIDs] = useState([1, 2, 3, 4, 5, 6]);

  const _handleProofSelect = async id => {
    setSelectedProofIDs(prevSelectedProofIDs => {
      if (prevSelectedProofIDs.includes(id)) {
        return prevSelectedProofIDs.filter(proofID => proofID !== id);
      } else {
        return [...prevSelectedProofIDs, id];
      }
    });
  };

  const _handleOpenCamera = async type => {
    const pickerType =
      type == 1 ? ImagePicker.openCamera : ImagePicker.openPicker;

    pickerType({
      mediaType: 'photo',
      cropping: false,
      width: 1280,
      height: 720,
    })
      .then(image => {
        if (image) {
          setSelectedMediaUrl({uri: image.path});
          setSelectedMedia({
            isSelected: true,
            name: `profile-pic-${new Date()}`,
            uri: image.path,
            type: image.mime,
          });
        }
      })
      .catch(err => {});
  };
  const _handleOpenGallery = async () => {};
  const _handleSelectMedia = async () => {};
  return {
    _handleOpenCamera,
    _handleOpenGallery,
    _handleSelectMedia,
    _handleProofSelect,
    mediaList,
    selectedMedia,
    selectedMediaUrl,
    selectedProofIDs,
  };
};

export {UploadChallengeProofHooks};
