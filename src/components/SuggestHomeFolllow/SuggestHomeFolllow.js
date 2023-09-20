import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import Gradient from '../../components/Gradient/Gradient';
import IMAGES from '../../global/images';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Colors } from '../../global';
import FocusAwareStatusBar from '../FocusAwareStatusBar';
import AppButton from '../AppButton/AppButton';

const SuggestHomeFolllow = () => {
  const navigation = useNavigation();
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
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
              ListHeaderComponent={
                <View style={{ paddingVertical: 20, marginBottom: 40 }}>
                  <Text style={styles.subHeading}>This is your feed</Text>
                  <Text style={styles.para}>
                    See all the content from the people you follow
                  </Text>
                </View>
              }
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Image source={IMAGES.BackArrow} style={styles.userPic} />
                  <View>
                    <Text style={[styles.subHeading, { textAlign: 'left' }]}>
                      Mike
                    </Text>
                    <Text style={styles.para}>@mickbughere</Text>
                  </View>
                  <AppButton
                    btnStyle={styles.btnStyle}
                    btnTextStyle={styles.btnTextStyle}
                    btnText="Follow"
                    onPress={() => { }}
                  />
                </View>
              )}
            />
          </View>
        }
      />
    </View>
  );
};

export default SuggestHomeFolllow;
