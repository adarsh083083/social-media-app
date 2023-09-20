import React, { useState } from 'react';
import { Alert, Modal, Text, Pressable, View, Image } from 'react-native';
import IMAGES from '../../global/images';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from './styles';
import BottomModalList from './BottomModalList';

const BottomModal = ({ visibility, toggle }) => {

  //this is flateList data
  const data = [
    { id: '1', image: IMAGES.ProImage, name: 'Dev', tag: '@developerben · 3 m' },
  ];

  const renderEmojiListing = ({ item, index }) => {
    return (
      <BottomModalList item={item} toggle={toggle} />
    )
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibility}
      onRequestClose={toggle}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.emojiStyle}>
            <View>
              <Image style={styles.smile} source={IMAGES.Smile} />
            </View>
            <View style={styles.rateStyle}>
              <Text style={styles.textStyle}>4</Text>
            </View>
          </View>
          <View style={styles.borderContainer}>
            <View style={styles.borderStyle} />
          </View>

          <View style={styles.listContainer}>
            {
              data &&
              <FlatList
                data={data}
                renderItem={renderEmojiListing}
                keyExtractor={item => item.id}
              />
            }
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default BottomModal;
