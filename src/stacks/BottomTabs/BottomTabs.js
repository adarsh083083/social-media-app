import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from './CustomBottomTab';
import {ScreenNames} from '../../global/index';
import OnBoarding from '../../screens/OnBoarding/OnBoarding';
import HomeStack from '../HomeStack';
import ChallengesStack from '../ChallengesStack';
import SearchStack from '../SearchStack';
import ProfileStack from '../ProfileStack';
const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  const renderCustomBottomTab = props => {
    return <CustomBottomTab {...props} />;
  };
  return (
    <View style={styles.mainContainer}>
      <Tab.Navigator
        tabBar={renderCustomBottomTab}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name={ScreenNames.HOME_STACK} component={HomeStack} />
        <Tab.Screen
          name={ScreenNames.CHALLENGE_STACK}
          component={ChallengesStack}
        />
        <Tab.Screen name={ScreenNames.SEARCH_STACK} component={SearchStack} />
        <Tab.Screen name={ScreenNames.PROFILE_STACK} component={ProfileStack} />
      </Tab.Navigator>
    </View>
  );
};
export default BottomTabs;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
