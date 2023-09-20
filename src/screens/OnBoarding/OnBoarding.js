import React from 'react';
import Gradient from '../../components/Gradient/Gradient';
import Header from '../../components/Header/Header';
import IMAGES from '../../global/images';
import {useNavigation} from '@react-navigation/native';
import {View, Image} from 'react-native';
import styles from './styles';
import AppButton from '../../components/AppButton/AppButton';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {Colors, Constant, ScreenNames} from '../../global';
import Carousel from 'react-native-reanimated-carousel';
import STATIC_DATA from '../../global/arrays';
import {SCREEN_WIDTH} from '../../global/constant';
const OnBoarding = () => {
  const navigation = useNavigation();
  const renderBanner = ({item}) => {
    return (
      <View style={styles.homeBannerConntainer}>
        <View style={styles.onBoardingImageContainer}>
          <Image style={styles.ImageStyle} resizeMode="cover" source={item} />
        </View>
      </View>
    );
  };

  const goToSignIn = () => {
    navigation.navigate(ScreenNames.SIGN_IN_SCREEN);
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
              <View style={{marginTop: Constant.CHANGE_BY_MOBILE_DPI(24)}}>
                <Header
                  image={IMAGES.socialBloxLogo}
                  title="SocialBlox"
                  onPress={() => navigation.goBack()}
                />
              </View>
            </View>
            {STATIC_DATA.carousel_data && (
              <Carousel
                style={styles.alignItemCenter}
                width={SCREEN_WIDTH}
                height={SCREEN_WIDTH}
                autoPlay={true}
                data={STATIC_DATA.carousel_data}
                scrollAnimationDuration={1000}
                renderItem={renderBanner}
              />
            )}
            <View style={styles.buttonContainer}>
              <View style={styles.btnContainer}>
                <AppButton
                  onPress={goToSignIn}
                  btnStyle={styles.btnStyle}
                  btnTextStyle={styles.btnTextStyle}
                  btnText="Sign in"
                />
              </View>
              <View style={styles.bottomView}>
                <AppButton
                  btnStyle={styles.btnStyle2}
                  btnTextStyle={styles.btnTextStyle2}
                  btnText="Create account"
                  onPress={() =>
                    navigation.navigate(
                      ScreenNames.CREATE_ACCOUNT_WITH_EMAIL_SCREEN,
                    )
                  }
                />
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default OnBoarding;
