import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  StatusBar,
} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../global';
import styles from './styles';
import IMAGES from '../../global/images';

const LocationModal = ({
  showLocationModal,
  _handleModalVisible,
  _handleMediaChange,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showLocationModal}
      onRequestClose={() => _handleModalVisible('GPS')}>
      <StatusBar
        backgroundColor="#000000"
        translucent={true}
        barStyle="light-content"
      />
      <View style={internalStyle.modalWrapper}>
        <Image
          source={require('../../assets/images/modalBG.png')}
          style={internalStyle.backgroundImage}
        />
        <View style={internalStyle.modalContainer}>
          <View style={internalStyle.row}>
            <TouchableOpacity onPress={() => _handleModalVisible('GPS')}>
              <Text style={styles.para}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.subHeading}>Search location</Text>
            <TouchableOpacity>
              <Text style={styles.para}>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={internalStyle.inputWrapper}>
            <Image
              source={IMAGES.SearchIcon}
              style={internalStyle.searchIcon}
            />
            <TextInput
              style={internalStyle.inputField}
              placeholderTextColor={Colors.WHITE}
              placeholder="Search locations"
            />
          </View>

          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  _handleMediaChange(3, 'New delhi, india ' + item);
                  _handleModalVisible('GPS');
                }}
                activeOpacity={0.8}
                style={internalStyle.gifCard}>
                <Text style={styles.subHeading}>New delhi, india</Text>
                <Text style={styles.para}>india east globe</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LocationModal;

const internalStyle = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
  },
  modalContainer: {
    height: '90%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputWrapper: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.DARK_GRAY,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  inputField: {
    width: '94%',
    color: Colors.WHITE,
    fontSize: Fonts.FONT_SIZE_12,
  },
  gifCard: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 5,
  },
});
