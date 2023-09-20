import { StyleSheet } from 'react-native';
import { Colors, Constant, Fonts } from '../../global/index';
export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    inputContainer: {
        flex: 1,
        marginTop: Constant.CHANGE_BY_MOBILE_DPI(30)
    },
    alignContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        height: Constant.CHANGE_BY_MOBILE_DPI(120),
        width: Constant.CHANGE_BY_MOBILE_DPI(120)
    },
    yourIdentityDescriptionStyle: {
        marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
        fontSize: Fonts.FONT_SIZE_15,
        fontFamily: Fonts.LIGHT,
        color: '#D6D4D9',
        marginTop: Constant.CHANGE_BY_MOBILE_DPI(15),
        textAlign: 'center'
    },
    btnStyle2: {
        backgroundColor: Colors.PURPLE,
        height: Constant.CHANGE_BY_MOBILE_DPI(48),
        marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20)
    },
    btnTextStyle2: {
        fontSize: Fonts.FONT_SIZE_16,
        fontFamily: Fonts.BOLD,
        lineHeight: 24,
    },
    textInput: {
        backgroundColor: '#36343D',
        borderTopLeftRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
        borderTopRightRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
        borderRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
        marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
        marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20)
    },
    termsAndConditionFontStyle: {
        fontSize: Fonts.FONT_SIZE_16,
        fontFamily: Fonts.REGULAR,
        color: '#D6D4D9',
    },
    termsAndConditionBoldFontStyle: {
        fontSize: Fonts.FONT_SIZE_16,
        fontFamily: Fonts.SEMIBOLD,
        color: '#D6D4D9',
    },
    checkboxAndroid: {
        transform: [{ scaleX: 1.40 }, { scaleY: 1.40 }],
        width: Constant.CHANGE_BY_MOBILE_DPI(30),
        height: Constant.CHANGE_BY_MOBILE_DPI(30),
        marginRight: Constant.CHANGE_BY_MOBILE_DPI(10),
        borderRadius: Constant.CHANGE_BY_MOBILE_DPI(2),
        borderColor: Colors.WHITE

    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Constant.SCREEN_WIDTH - 40,
        marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(15),
        marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20)
    },
    formikError:{
        marginHorizontal:Constant.CHANGE_BY_MOBILE_DPI(20),
        color:'red',
        marginTop:Constant.CHANGE_BY_MOBILE_DPI(2)
    }
});
