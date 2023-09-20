import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Colors} from '../../../global';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import Gradient from '../../../components/Gradient/Gradient';
import ChallengeModal from '../../../components/GlobalModal/ChallengeModal';

const AddRequirements = () => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    showModal();
  }, []);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
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
              <ChallengeModal
                goBack
                visible={modalVisible}
                onCancel={hideModal}
                closeVisibility={true}
              />
            </View>
          </View>
        }
      />
    </View>
  );
};

export default AddRequirements;
