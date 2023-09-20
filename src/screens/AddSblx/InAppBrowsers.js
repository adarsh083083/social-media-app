import {View, SafeAreaView} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import styles from './styles';

const InAppBrowsers = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <WebView
          source={{uri: 'https://blog.jscrambler.com'}}
          style={styles.webViewStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default InAppBrowsers;
