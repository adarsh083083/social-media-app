import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import { PaperProvider } from 'react-native-paper';
import NetInfo from '@react-native-community/netinfo';
import { StyleSheet, View } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './src/global/constant';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthStack from './src/stacks/AuthStack';
import MainStack from './src/stacks/MainStack';
import NoInternet from './src/screens/NoInternet/NoInternet';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';

import {
  handleAxiosError,
  handleAxiosResponse,
} from './src/utils/HandleAxiosResponse';

const Routes = () => {
  const { accessToken, user, isAllChecked } = useSelector(
    state => state.authSlice,
  );
  console.log(user,"accesstoken")

  axios.interceptors.response.use(
    response => handleAxiosResponse(response),
    error => handleAxiosError(error),
  );

  useEffect(() => {
    if (isAllChecked) {
      console.log('Permission granted');
    }
  }, [isAllChecked]);
  axios.defaults.headers.common['access_token'] = accessToken;


  return <>{isAllChecked ? <MainStack /> : <AuthStack />}</>;
};

const App = () => {
  const baseurl = process.env.BASE_URL;
  axios.defaults.baseURL = baseurl;
  console.log(baseurl);
  const [isConnected, setIsConnected] = useState();

  useEffect(() => {
    // Subscribe to network state changes
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    // Cleanup: Unsubscribe when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const fcmToken = async () => {
    try {
      const token = await messaging().getToken();
      console.log('FCM Token:', token);
    } catch (error) {
      console.error('Error FCM token:', error);
    }
  };

  useEffect(() => {
    fcmToken();
  }, [fcmToken]);
  return (
    <SafeAreaProvider style={internalStyle.safeArea}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider>
            <View />
            <Routes />

            {isConnected ? null : <NoInternet />}
          </PaperProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

const internalStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});

export default App;
