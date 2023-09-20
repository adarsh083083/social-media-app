import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenNames } from '../global';
import ProfileScreen from '../screens/Auth/Profile/ProfileScreen';
const Stack = createStackNavigator();
const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenNames.OWN_PROFILE_SCREEN} component={ProfileScreen} />
        </Stack.Navigator>
    );
};

export default ProfileStack;

