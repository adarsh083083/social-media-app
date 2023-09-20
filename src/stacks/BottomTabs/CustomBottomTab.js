import React from 'react';
import { Animated, Platform, Text, TouchableOpacity, View, } from 'react-native';
//insets
import { useSafeAreaInsets } from 'react-native-safe-area-context';
//styles
import { styles } from './styles';
//svgs
//Fill
import HomeSvg from '../../assets/svgs/BottomTabSvg/HomeSvg.svg';
import ChallengesSvg from '../../assets/svgs/BottomTabSvg/ChallengesSvg.svg';
import SearchSvg from '../../assets/svgs/BottomTabSvg/SeachSvg.svg';
import ProfileSvg from '../../assets/svgs/BottomTabSvg/ProfileSvg.svg';
//Unfill
import HomeUnFillSvg from '../../assets/svgs/BottomTabSvg/HomeUnfillSvg.svg';
import ChallengesUnfillSvg from '../../assets/svgs/BottomTabSvg/ChallengesUnfillSvg.svg';
import SearchUnfillSvg from '../../assets/svgs/BottomTabSvg/SearchUnfillSvg.svg';
import ProfileUnfillSvg from '../../assets/svgs/BottomTabSvg/ProfileUnfillSvg.svg';
//components
const CustomBottomTab = ({ state, navigation }) => {
    const insets = useSafeAreaInsets();
    const isIOS = Platform.OS === 'ios';
    const svgs = [
        <HomeSvg />,
        <ChallengesSvg />,
        <SearchSvg />,
        <ProfileSvg />
    ];
    const blurredSvg = [
        <HomeUnFillSvg />,
        <ChallengesUnfillSvg />,
        <SearchUnfillSvg />,
        <ProfileUnfillSvg />
    ]
    const tabPress = (route, index, isFocused) => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });
        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    }
    return (
        <View style={styles.tabMainContainer}>
            <View style={styles.tabBarCon}>
                {
                    state.routes.map((route, index) => {
                        const isFocused = state.index === index;
                        const onPress = () => { tabPress(route, index, isFocused) };
                        return (
                            <TouchableOpacity key={`bottomtabs-${index}`} activeOpacity={1} onPress={onPress} style={styles.tabsStyle}>
                                <Animated.View>
                                    {isFocused ? svgs[index] : blurredSvg[index]}
                                </Animated.View>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        </View>
    );
};

export default CustomBottomTab;