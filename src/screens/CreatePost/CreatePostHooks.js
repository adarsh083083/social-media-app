import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

const CreatePostHooks = () => {
  const [postMediaPath, setPostMediaPath] = useState('');
  const [postMedia, setPostMedia] = useState({});
  const [showGIFModal, setShowGIFModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedGif, setSelectedGif] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedVideo, setSelectedVideo] = useState('');

  const _handleModalVisible = type => {
    if (type == 'GIF') {
      setShowGIFModal(!showGIFModal);
    } else {
      setShowLocationModal(!showLocationModal);
    }
  };

  const _handleMediaChange = (action, payload) => {
    if (action == 1) {
      setSelectedGif(payload);
    } else {
      setSelectedLocation(payload);
    }
  };

  const _handleSelectFile = async type => {
    const mediaType = type == 1 ? 'photo' : 'video';
    ImagePicker.openPicker({
      mediaType: mediaType,
      cropping: false,
      width: 250,
      height: 250,
    })
      .then(image => {
        if (image) {
          setPostMediaPath({uri: image.path});
          setPostMedia({
            name: `profile-pic-${new Date()}`,
            uri: image.path,
            type: image.mime,
          });
        }
      })
      .catch(err => {});
  };

  const _removeSelectedFile = async () => {
    setPostMediaPath('');
    setPostMedia({});
  };
  return {
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
  };
};
export {CreatePostHooks};
