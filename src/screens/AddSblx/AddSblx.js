import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import styles from './styles';
import { Colors, ScreenNames } from '../../global';
import Gradient from '../../components/Gradient/Gradient';
import Header from '../../components/Header/Header';
import MyTextInput from '../../components/TextInput/MyTextInput';
import { AddBlxHooks } from './AddBlxHooks';
import CurrencyCodeList from '../../components/CurrencyCodeList/CurrencyCodeList';
import Clipboard from '@react-native-community/clipboard';
import CopySvg from '../../assets/svgs/Copy.svg';
import AppButton from '../../components/AppButton/AppButton';
import { useNavigation } from '@react-navigation/native';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

const AddSblx = () => {
  const navigation = useNavigation();
  const {
    currencyCodeVisibility,
    currencyCode,
    onChangeSearchText,
    searchData,
    selectedSearchData,
    setSelectedSearchData,
    toggleCurrencyCode,
    goToOtp,
  } = AddBlxHooks();
  const copyToClipboard = () => {
    Clipboard.setString('0xBA2FBAB19114B2C75A989D16C350A2A9D40792FF');
  };
  const inAppBrowser = () => {
    // navigation.navigate(ScreenNames.IN_APP_BROWSERS);
    navigation.navigate(ScreenNames.INTEREST);
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
      <View style={styles.mainContainer}>
        <FocusAwareStatusBar
          barColor={Colors.PRIMARY_COLOR}
          isLightBar={true}
          isTopSpace={true}
        />
        <Gradient
          children={
            <View style={styles.flexContainer}>
              <View style={styles.mainContainer}>
                <View style={{ bottom: CHANGE_BY_MOBILE_DPI(35) }}>
                  <Header backArrowVisibility={true} />
                </View>
                <View style={styles.buyContainer}>
                  <Text style={styles.buyTitle}>Buy SBLX</Text>
                  <Text style={styles.buySubTitle}>
                    Enter the amount you want to spend.
                  </Text>
                </View>
                <View style={styles.inputContainer}>
                  <View style={styles.flexDirectionContainer}>
                    <MyTextInput
                      keyboardType={'phone-pad'}
                      label={<Text style={{ color: Colors.WHITE }}>Type</Text>}
                      mode="flat"
                      activeUnderlineColor={'#36343D'}
                      textColor={'white'}
                      style={styles.countryInputStyle}
                      cursorColor={Colors.WHITE}
                      onChangeText={onChangeSearchText}
                      value={selectedSearchData.dial_code}
                    />
                    <MyTextInput
                      label={
                        <Text style={{ color: Colors.WHITE }}>Enter Amount</Text>
                      }
                      mode="flat"
                      keyboardType={'default'}
                      activeUnderlineColor={'#36343D'}
                      maxLength={10}
                      textColor={'white'}
                      style={styles.textInput}
                      cursorColor={Colors.WHITE}
                    />
                  </View>
                  {currencyCodeVisibility &&
                    searchData.length > 0 &&
                    currencyCode.length != 0 && (
                      <View style={styles.positionContainer}>
                        <CurrencyCodeList
                          currencyCode={currencyCode}
                          searchData={searchData}
                          onPress={item => {
                            setSelectedSearchData(item);
                            toggleCurrencyCode();
                          }}
                          toggleCurrencyCode={toggleCurrencyCode}
                        />
                      </View>
                    )}
                </View>
                <View style={styles.copyMainCotnainer}>
                  <View style={styles.copyConatiner}>
                    <View style={styles.flexContainer}>
                      <Text numberOfLines={2} style={styles.tokenFontStyle}>
                        0xBA2FBAB19114B2C75A989D16C350A2A9D40792FF
                      </Text>
                    </View>
                    <TouchableOpacity onPress={copyToClipboard}>
                      <CopySvg />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.paymentContainer}>
                    <Text style={styles.paymentTitle}>
                      Your payment is handled by
                    </Text>
                  </View>

                  <View style={styles.transactionContainer}>
                    <Text style={styles.transactionTitle}>
                      For this transaction you will be redirected to Banxa which
                      is a third party, not directly affiliated with SocialBlox,
                      which will handle the transaction.
                    </Text>

                    <Text style={styles.supportTitle}>
                      For support and questions please visit *Banxa support
                      link*
                    </Text>
                  </View>
                </View>
                <View style={styles.buttonContainer}>
                  <AppButton
                    btnStyle={styles.btnStyle}
                    btnText={'Next'}
                    onPress={inAppBrowser}
                  />
                </View>
              </View>
            </View>
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddSblx;
