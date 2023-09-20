import { StyleSheet } from "react-native";
import { Colors, Constant, Fonts } from "../../global";

//global
export const styles = StyleSheet.create({
    tabMainContainer: {
        backgroundColor: Colors.EERIE_BLACK,
        bottom: Constant.CHANGE_BY_MOBILE_DPI(0),
        position: 'absolute'
    },
    tabBarCon: {
        flexDirection: 'row',
        width: Constant.SCREEN_WIDTH,
        height: Constant.CHANGE_BY_MOBILE_DPI(60)
    },
    tabsStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    names: {
        fontSize: Constant.CHANGE_BY_MOBILE_DPI(10),
        fontFamily: Fonts.SEMIBOLD,
        includeFontPadding: false,
    }
});