import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { Colors, ScreenNames } from '../../global';
import Gradient from '../../components/Gradient/Gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import IMAGES from '../../global/images';
import AppButton from '../../components/AppButton/AppButton';
import { UploadChallengeProofHooks } from './UploadChallengeProofHooks';
import PostComments from '../../components/PostComments/PostComments';

const UploadChallengeProof = () => {
  const navigation = useNavigation();

  const {
    _handleOpenCamera,
    _handleOpenGallery,
    _handleSelectMedia,
    _handleProofSelect,
    mediaList,
    selectedMedia,
    selectedMediaUrl,
    selectedProofIDs,
  } = UploadChallengeProofHooks();

  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar
        barColor={Colors.PRIMARY_COLOR}
        isLightBar={true}
        isTopSpace={true}
      />
      <Gradient
        children={
          <View style={styles.container}>
            <View style={styles.mediaScreen}>
              <FlatList
                data={mediaList}
                numColumns={3}
                ListHeaderComponent={
                  <>
                    <View style={styles.txtWrapper}>
                      <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.8}
                        style={styles.backBtn}>
                        <Image
                          source={IMAGES.BackArrow}
                          style={styles.backArrow}
                        />
                      </TouchableOpacity>
                      <Text style={styles.mainHeading}>Upload Proof</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={[styles.para, { width: '60%' }]}>
                        SocialBlox can only access selected photos and videos
                      </Text>
                      <AppButton btnStyle={styles.btnStyle} btnText="Manage" />
                    </View>
                    <View
                      style={[
                        styles.row,
                        {
                          marginTop: 20,
                          justifyContent: 'flex-start',
                          paddingHorizontal: 0,
                        },
                      ]}>
                      <TouchableOpacity
                        onPress={() => _handleOpenCamera(1)}
                        activeOpacity={0.8}
                        style={styles.cardStyle}>
                        <Image
                          source={IMAGES.CameraCard}
                          style={styles.imageStyle}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => _handleOpenCamera(2)}
                        activeOpacity={0.8}
                        style={styles.cardStyle}>
                        <Image
                          source={IMAGES.AddCard}
                          style={styles.imageStyle}
                        />
                      </TouchableOpacity>
                    </View>
                  </>
                }
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => _handleProofSelect(item)}
                    style={styles.cardStyle}>
                    {selectedProofIDs.includes(item) && (
                      <View style={styles.fixedCard}>
                        <Image
                          source={IMAGES.PurpleCheck}
                          style={styles.checkImg}
                        />
                      </View>
                    )}
                    <Image
                      source={IMAGES.ChallengeFrame}
                      style={styles.imageStyle}
                    />
                  </TouchableOpacity>
                )}
              />
            </View>
            <AppButton
              onPress={() =>
                navigation.navigate(ScreenNames.UPPLOAD_CHALLENGE_PROOF_STATUS)
              }
              style={styles.fixBtn}
              btnText="Add your proof"
            />
          </View>
        }
      />
    </View>
  );
};

export default UploadChallengeProof;
