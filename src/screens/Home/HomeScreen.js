import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './HomeStyle';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { Colors, Constant, Fonts, ScreenNames } from '../../global/index';
import Gradient from '../../components/Gradient/Gradient';
import { HomeHooks } from './HomeHooks';
import NotificationSvg from '../../assets/svgs/Notification.svg';
import PlusSvg from '../../assets/svgs/PlussSvg.svg';
import { useNavigation } from '@react-navigation/native';
import LoadingSpinner from '../../components/LoadingSpiner/LoadingSpiner';
//

const HomeScreen = () => {
  const navigation = useNavigation();
  const {
    renderTopTab,
    postData,
    renderPost,
    handleEmojiSelected,
    selectedTab,
    internetComponent,
    swtichFollowingData
  } = HomeHooks();
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
            <View style={styles.headerContainer}>
              <Image
                source={require('../../assets/images/SocialBloxicon.png')}
                style={styles.imageStyle}
              />
              <View style={styles.topTabContainer}>
                <FlatList
                  data={['Following', 'Interests']}
                  horizontal
                  renderItem={renderTopTab}
                />
              </View>
              <View>
                <TouchableOpacity style={styles.notificationContainer}>
                  <NotificationSvg
                    height={Constant.CHANGE_BY_MOBILE_DPI(15)}
                    width={Constant.CHANGE_BY_MOBILE_DPI(15)}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {
              swtichFollowingData && (
                <View style={styles.postContainer}>
                  <FlatList
                    data={swtichFollowingData}
                    contentContainerStyle={
                      styles.contentContainerMArginVretical
                    }
                    ListEmptyComponent={() => (
                      <View style={styles.alignContainer}>{internetComponent()}</View>
                    )}
                    renderItem={renderPost}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
              )
            }
            <View style={styles.positionContainer}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate(ScreenNames.CREATE_POST)}
                style={styles.PlusContainer}>
                <PlusSvg />
              </TouchableOpacity>
            </View>



          </View>
        }
      />
    </View>
  );
};

export default HomeScreen;
