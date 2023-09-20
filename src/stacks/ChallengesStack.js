import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenNames } from '../global';
import ChallengesFeed from '../screens/ChallengesFeed/ChallengesFeed';
const Stack = createStackNavigator();
const ChallengesStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenNames.CHALLENGE_SCREEN} component={ChallengesFeed} />
        </Stack.Navigator>
    );
};

export default ChallengesStack;
