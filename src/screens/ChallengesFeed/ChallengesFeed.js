import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {Colors, ScreenNames} from '../../global';
import Gradient from '../../components/Gradient/Gradient';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import IMAGES from '../../global/images';
import ItemChallenges from '../../components/ListComponent/ItemChallenges';
import STATIC_DATA from '../../global/arrays';
import AppButton from '../../components/AppButton/AppButton';
import PlusSvg from '../../assets/svgs/PlussSvg.svg';

const ChallengesFeed = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(0);
  const handleItemPress = index => {
    setSelectedItem(index);
  };

  const goToChallengeApprove = () => {
    navigation.navigate(ScreenNames.CHALLENGE_APPROVED);
  };
  const goToChallengeDisApprove = () => {
    navigation.navigate(ScreenNames.CHALLENGE_DISAPPROVED);
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
          <View style={styles.contentContainer}>
            <View style={styles.header}>
              <Text style={styles.mainHeading}>Challenges</Text>
              <TouchableOpacity activeOpacity={0.8} style={styles.headerIcon}>
                <Image
                  source={IMAGES.ChallengeNotification}
                  style={styles.imageStyle}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.positionContainer}>
              <View style={styles.PlusContainer}>
                <PlusSvg />
              </View>
            </View>

            <FlatList
              data={STATIC_DATA.profile_data}
              ListHeaderComponent={
                <>
                  <FlatList
                    data={[1, 2, 3, 4, 5]}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate(ScreenNames.CHALLENGE_DETAILS)
                        }
                        activeOpacity={0.8}
                        style={[
                          styles.cardStyle1,
                          index == 0 && {marginLeft: 20},
                        ]}>
                        <Image
                          source={IMAGES.ChallengeFrame}
                          style={styles.imageStyle1}
                        />
                        <View style={styles.cardStyle1Txt}>
                          <Text style={styles.subHeading}>
                            Jump with a jumping rope for 2 minutes
                          </Text>
                          <Text style={styles.para}>
                            Completed 4{item} times
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  />

                  <Text style={styles.subHeading2}>You have 2 challenges</Text>

                  <View style={styles.challgeRequestCard}>
                    <View style={styles.infoCard}>
                      <View style={styles.w80}>
                        <Text style={styles.challengersInfo}>
                          Albertus{' '}
                          <Text style={{color: Colors.MEDIUM_GRAY}}>did</Text>{' '}
                          Michiel's{' '}
                          <Text style={{color: Colors.MEDIUM_GRAY}}>
                            challenge
                          </Text>
                        </Text>
                        <Text style={styles.subHeading}>
                          Jump with a jumping rope for 2 minutes without
                          stopping
                        </Text>
                        <View style={styles.amoutRow}>
                          <Image
                            source={IMAGES.socialBloxLogo}
                            style={styles.logoIcon}
                          />
                          <Text style={styles.subHeading}>
                            84.56 <Text style={styles.grayPara}>$65.34</Text>
                          </Text>
                        </View>
                      </View>
                      <View>
                        <TouchableOpacity style={styles.profileSmall}>
                          <Image
                            source={IMAGES.UserProfile}
                            style={styles.imageStyle}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.profileBig}>
                          <Image
                            source={IMAGES.UserProfile}
                            style={styles.imageStyle}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.btnWrapper}>
                      <AppButton
                        btnStyle={styles.btnStyle}
                        btnText="Accept"
                        onPress={goToChallengeApprove}
                      />
                      <AppButton
                        btnStyle={styles.btnStyle2}
                        btnText="Reject"
                        btnTextStyle={styles.btnTxt2}
                        onPress={goToChallengeDisApprove}
                      />
                    </View>
                  </View>
                  <Text style={styles.subHeading2}>Top Challenges</Text>
                </>
              }
              renderItem={({item, index}) => {
                return (
                  <ItemChallenges
                    item={item}
                    onPress={() => handleItemPress(index)}
                    isSelected={selectedItem === index}
                  />
                );
              }}
            />
          </View>
        }
      />
    </View>
  );
};

export default ChallengesFeed;
