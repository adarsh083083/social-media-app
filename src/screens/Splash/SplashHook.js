import { Animated } from 'react-native';
import React from 'react';
import { ScreenNames } from '../../global/index';
import { CommonActions, useNavigation } from '@react-navigation/native';

const SplashHook = () => {
  // variable
  const navigation = useNavigation();
  const socialBloxOpacity = React.useRef(new Animated.Value(1)).current;

  // Dispatch Navigation
  const resetStackAndGoToOnBoarding = CommonActions.reset({
    index: 0,
    routes: [{ name: ScreenNames.ON_BOARDING }], // Write screen name to navigate
  });

  // Animation Function
  const startSplashAnimation = () => {
    Animated.timing(socialBloxOpacity, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start(async ({ finished }) => {
      if (finished) {
        navigation.dispatch(resetStackAndGoToOnBoarding);
      }
    });
  };

  React.useEffect(() => {
    startSplashAnimation();
  }, []);

  // UseEffect
  React.useEffect(() => {
    startSplashAnimation();
  }, []);

  return {
    startSplashAnimation,
  };
};

export { SplashHook };
