import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import MyTextInput from '../../components/TextInput/MyTextInput';
import { Colors, Constant, Fonts } from '../../global';
import IMAGES from '../../global/images';
import AppButton from '../../components/AppButton/AppButton';
import Gradient from '../../components/Gradient/Gradient';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
const EditProfileScreen = () => {
  const [optionVisible, setOptionVisible] = React.useState(false);
  const [profilePath, setProfilePath] = React.useState(
    IMAGES.ProfilePlaceholder,
  );
  const [profilePicture, setProfilePicture] = React.useState({
    isSelected: false,
  });

  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar
        barColor={Colors.PRIMARY_COLOR}
        isLightBar={true}
        isTopSpace={true}
      />
      <Gradient
        children={
          <View style={styles.container}>
            <GlobalHeader headerName={'Edit Profile'} rightSvg={null} />
            <View style={styles.profileContainer}>
              <TouchableOpacity
                onPress={() => setOptionVisible(true)}
                activeOpacity={0.8}
                style={styles.profileWrapper}>
                <Image source={profilePath} style={styles.profileCircle} />
                <Image source={IMAGES.AddIcon} style={styles.profileAdd} />
              </TouchableOpacity>
            </View>
            <View style={styles.flexContainer}>
              <Text style={{ color: '#fff', fontSize: 16 }}>Name</Text>
              <MyTextInput
                label={<Text style={{ color: Colors.WHITE }}>Name</Text>}
                mode="flat"
                keyboardType={'phone-pad'}
                activeUnderlineColor={'#36343D'}
                maxLength={10}
                textColor={'white'}
                style={styles.textInput}
                cursorColor={Colors.WHITE}
              />
              <Text style={{ color: '#fff', fontSize: 16 }}>Bio</Text>
              <MyTextInput
                label={<Text style={{ color: Colors.WHITE }}>Bio</Text>}
                mode="flat"
                keyboardType={'phone-pad'}
                activeUnderlineColor={'#36343D'}
                maxLength={10}
                textColor={'white'}
                style={styles.textInput}
                cursorColor={Colors.WHITE}
              />
            </View>

            <View style={styles.bottomContainer}>
              <AppButton
                onPress={null}
                btnStyle={styles.btnStyle2}
                btnTextStyle={styles.btnTextStyle2}
                btnText="Save"
              />
            </View>
          </View>
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#272A2E',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    marginHorizontal: 20,
  },
  textInput: {
    backgroundColor: '#36343D',
    borderTopLeftRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    borderTopRightRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(50)
  },
  profileWrapper: {
    width: 160,
    height: 160,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileCircle: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
    marginBottom: 10,
  },
  profileAdd: {
    position: 'absolute',
    bottom: 2,
    right: 10,
    width: 24,
    height: 24,
    borderRadius: 200,
    marginBottom: 10,
  },
  btnStyle2: {
    backgroundColor: Colors.PURPLE,
    height: Constant.CHANGE_BY_MOBILE_DPI(48),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  btnTextStyle2: {
    fontSize: Fonts.FONT_SIZE_16,
    fontFamily: Fonts.BOLD,
    lineHeight: 24,
  },
  flexContainer: {
    flex: 1,
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20)
  },
});
export default EditProfileScreen;
