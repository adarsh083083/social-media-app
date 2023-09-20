import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenNames } from '../global';
import SearchScreen from '../screens/Search/SearchScreen';
const Stack = createStackNavigator();
const SearchStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenNames.SEARCH_SCREEN} component={SearchScreen} />
        </Stack.Navigator>
    );
};

export default SearchStack;
