import {ImageBackground, View} from 'react-native';
import React, {useState} from 'react';
import Gradient from '../../../components/Gradient/Gradient';
import styles from './styles';
import {Colors} from '../../../global';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import GlobalModal from '../../../components/GlobalModal/GlobalModal';
import IMAGES from '../../../global/images';
import {useNavigation} from '@react-navigation/native';
const CreateChallenge = () => {
  const navigation = useNavigation();
  const [visibility, setVisibility] = useState(false);
  const toggle = () => {
    setVisibility(!visibility);
  };

  const [searchValue, setSearchValue] = useState('');
  const closeModal = () => {
    setVisibility(false);
  };
  const handleSearch = text => {
    setSearchValue(text);
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
            <View style={styles.flexContainer}>
              <ImageBackground
                source={IMAGES.ModalBg}
                style={styles.backgroundImage}>
                <View style={styles.modalContainer}>
                  <GlobalModal
                    CreateChallange={true}
                    visibility={visibility}
                    toggleModal={toggle}
                    Title="Create a challenge"
                    onChangeText={handleSearch}
                    TitleSearch="Who do you want to challenge?"
                    closeModal={closeModal}
                  />
                </View>
              </ImageBackground>
            </View>
          </View>
        }
      />
    </View>
  );
};
export default CreateChallenge;
