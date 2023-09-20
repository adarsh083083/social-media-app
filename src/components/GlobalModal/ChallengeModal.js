import React, { useState } from 'react';
import {
  FlatList,
  ImageBackground,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './ChallengeModalStyle';
import IMAGES from '../../global/images';
import HeaderModal from '../HeaderModal/HeaderModal';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import { Colors, Fonts } from '../../global';
import MyTextInput from '../TextInput/MyTextInput';
import CrossImage from '../../assets/svgs/addIcon.svg';
import AppButton from '../AppButton/AppButton';
import ItemAddRequirement from '../../screens/CreateChallenge/AddRequirements/ItemAddRequirement';
const ChallengeModal = ({ onCancel }) => {
  const [visible, setVisible] = useState(true);

  return (
    <Modal
      onRequestClose={onCancel}
      visible={visible}
      transparent={true}
      animationType="slide">
      <ImageBackground source={IMAGES.ModalBg} style={styles.modalBackground}>
        <HeaderModal
          backArrowVisibility={true}
          title={'Create a challenge'}
          closeVisibility={true}
          onPress={() => setVisible(!visible)}
        />
        <View style={styles.titleHeader}>
          <Text style={styles.titleYourChallange}>You challenge</Text>
          <Text style={styles.titleName}>Michael</Text>
        </View>
        <View style={styles.inputContainer}>
          <MyTextInput
            title={'Name of your challenge'}
            titleStyle={styles.titleStyle}
            label={<Text style={{ color: Colors.WHITE }}>Challenge name</Text>}
            mode="flat"
            activeUnderlineColor={Colors.GREY}
            textColor={'white'}
            style={styles.input}
            cursorColor={Colors.WHITE}
          />
        </View>
        <View style={styles.inputContainer}>
          <MyTextInput
            title={'Name of your challenge'}
            titleStyle={styles.titleStyle}
            label={
              <Text style={{ color: Colors.WHITE }}>Write a description</Text>
            }
            mode="flat"
            activeUnderlineColor={Colors.GREY}
            textColor={'white'}
            textAlignVertical={'top'}
            numberOfLines={10}
            maxHeight={100}
            style={styles.input}
            cursorColor={Colors.WHITE}
          />
        </View>
        <View style={styles.flatlistContainer}>
          <FlatList
            ListHeaderComponent={() => {
              return (
                <View>
                  <Text style={styles.listHeaderTitle}>Requirements</Text>
                </View>
              );
            }}
            data={[1]}
            renderItem={({ item }) => <ItemAddRequirement item={item} />}
          />
        </View>
        <View style={styles.bottomContainer}>
          <AppButton
            // onPress={addRequirement}
            btnStyle={styles.btnStyle}
            btnTextStyle={styles.btnTextStyle2}
            btnText="Next"
          />
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default ChallengeModal;
