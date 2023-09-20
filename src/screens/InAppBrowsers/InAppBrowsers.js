import {View, SafeAreaView, Alert} from 'react-native';
import React from 'react';
import styles from './styles';
import {WebView} from 'react-native-webview';
const InAppBrowsers = () => {
  return (
    <SafeAreaView style={styles.containerMain}>
      <WebView
        androidHardwareAccelerationDisabled={true}
        source={{uri: 'https://reactnative.dev/'}}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
};
export default InAppBrowsers;
