import * as React from 'react';
import {StatusBar, Platform, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../global';

const FocusAwareStatusBar = ({
  barColor = Colors.PRIMARY_COLOR,
  barStyle = 'default',
  isLightBar = false,
  isTopSpace = true,
}) => {
  // This hook provides the safe area insets
  const insets = useSafeAreaInsets();

  // useIsFocused() hook show screen is focus or not
  const isFocused = useIsFocused();

  // Show the which operating system the app is running on, either 'android' for Android or 'ios' for iOS
  const isAndroid = Platform.OS === 'android';
  return isAndroid ? (
    isFocused ? (
      <>
        <StatusBar
          backgroundColor={!isTopSpace ? '#00000000' : barColor}
          translucent={true}
          barStyle={isLightBar ? 'light-content' : 'dark-content'}
        />
        <View style={{height: isTopSpace ? StatusBar.currentHeight : 0}} />
      </>
    ) : (
      <View style={{height: StatusBar.currentHeight}} />
    )
  ) : (
    <View style={{paddingTop: insets.top, backgroundColor: barColor}}>
      <StatusBar
        transculent={true}
        barStyle={isLightBar ? 'light-content' : 'dark-content'}
      />
    </View>
  );
};

export default FocusAwareStatusBar;
