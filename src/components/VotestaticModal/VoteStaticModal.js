import React, {useState} from 'react';
import {Alert, Modal, Text, Pressable, View, Image} from 'react-native';
import IMAGES from '../../global/images';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from './styles';
import VoteStaticList from './VoteStaticList';

const VoteStaticModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  //this is flateList data
  const data = [
    {id: '1', image: IMAGES.Up_Arrow, name: '100', tag: '@82,64%'},
    {id: '2', image: IMAGES.Down_Arrow, name: '100', tag: '@82,64%'},
  ];

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // here you can also call for close modal
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.boxStyle}>
              <View style={styles.emojiStyle}>
                <View>
                  <Image style={styles.smile} source={IMAGES.Up_Arrow} />
                </View>
                <View style={styles.rateStyle}>
                  <Text style={styles.textStyle}>79</Text>
                </View>
                <View>
                  <Image style={styles.smile} source={IMAGES.Down_Arrow} />
                </View>
              </View>
            </View>
            <View style={styles.borderContainer}>
              <View style={styles.borderStyle} />
            </View>

            <View style={styles.listContainer}>
              <FlatList
                data={data}
                renderItem={({item}) => <VoteStaticList item={item} />}
                keyExtractor={item => item.id}
              />
            </View>
            {/* setModalVisible(!modalVisible) you can use as per your req. for close the modal  */}
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
      {/* you can you this setModalVisble(true) for show modal */}
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

export default VoteStaticModal;
//here is modal comp. you can where you want
{
  /* <View>
  <BottomModal />
</View>; */
}
