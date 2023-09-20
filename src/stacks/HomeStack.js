import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenNames} from '../global';
import HomeScreen from '../screens/Home/HomeScreen';
import Home from '../screens/Dashboard/Home/Home';
import {SplashScreen} from '../screens';
const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenNames.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
