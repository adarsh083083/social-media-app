import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './PrivateProfileStyles';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { Colors } from '../../global';
import Gradient from '../../components/Gradient/Gradient';
import AppButton from '../../components/AppButton/AppButton';
import { PrivateProfileHooks } from './PrivateProfileHooks';
import BackSvg from '../../assets/svgs/BackArrowSvg.svg';
import MenuSvg from '../../assets/svgs/MenuSvg.svg';
import LockSvg from '../../assets/svgs/Lock.svg';

const PrivateProfileScreen = () => {
    const { goToRegister, goBack } = PrivateProfileHooks()
    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar
                barColor={Colors.PRIMARY_COLOR}
                isLightBar={true}
                isTopSpace={true}
            />
            <Gradient
                children={
                    <View style={styles.mainContainer}>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity onPress={goBack}>
                                <BackSvg />
                            </TouchableOpacity>
                            <Text style={styles.profileFontStyle}>michielipenburg</Text>
                            <TouchableOpacity>
                                <MenuSvg />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.marginContainer}>
                                <View style={styles.flexDirectionContainer}>
                                    <Image
                                        source={require('../../assets/images/profilePlaceholder.png')}
                                        style={styles.imageStyle}
                                    />
                                    <View style={styles.marginLeft}>
                                        <View style={styles.flexDirectionContainer}>
                                            <Text style={styles.followerFontStyle}>4305 </Text>
                                            <Text style={styles.followerSmallFontStyle}>
                                                {' '}
                                                Followers{' '}
                                            </Text>
                                            <View style={styles.dot}></View>
                                            <Text style={styles.followerFontStyle}> 756 </Text>
                                            <Text style={styles.followerSmallFontStyle}>
                                                {' '}
                                                Following
                                            </Text>
                                        </View>
                                        <View style={styles.flexDirectionContainer}>
                                            <Text style={styles.followerFontStyle}>23 </Text>
                                            <Text style={styles.followerSmallFontStyle}> Posts </Text>
                                            <View style={styles.dot}></View>
                                            <Text style={styles.followerFontStyle}> 34 </Text>
                                            <Text style={styles.followerSmallFontStyle}>
                                                {' '}
                                                Completed challenges
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.userNameFontStyle}>Michiel</Text>

                            <AppButton
                                onPress={goToRegister}
                                btnStyle={styles.btnStyle2}
                                btnTextStyle={styles.btnTextStyle2}
                                btnText="Follow"
                            />
                            <View style={styles.lockContainer}>
                                <LockSvg />
                                <View style={styles.accountContainer}>
                                    <Text style={styles.accountFontStyle}>
                                        This account is private
                                    </Text>
                                    <Text style={styles.challengesFontStyle}>
                                        Follow this account to see their feed and awesome challenges
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                }
            />
        </View>
    );
};

export default PrivateProfileScreen;
