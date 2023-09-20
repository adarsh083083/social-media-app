import React from 'react';
import { Text, TextInput, View, Animated, StyleSheet, Platform } from 'react-native';
import { Colors, Constant, Fonts } from './global';
//npm

// global

const CustomTextInput = React.forwardRef(
    (
        {
            showCalendar = false,
            containerStyle = {},
            inputStyle = {},
            placeHolder,
            textContentType,
            placheHolderTextColor = Colors.WHITE,
            fontTextSize = Constant.CHANGE_BY_MOBILE_DPI(16),
            onChangeText = () => { },
            onChange = () => { },
            keyboardType = 'default',
            maxLength = undefined,
            editable = true,
            selectTextOnFocus = true,
            autoCapitalize,
            defaultValue = '',
            autoFocus = false,
            multiline = false,
            secureTextEntry = false,
            onClick = () => { },
            onFocus = () => { },
        },
        ref,
    ) => {


        const animatedValue = React.useRef(new Animated.Value(0)).current;
        const shakeValue = React.useRef(new Animated.Value(0)).current;

        // refs
        const inputRef = React.useRef(undefined);

        // value refs
        const value = React.useRef(defaultValue);

        // states
        const [helperText, setHelperText] = React.useState('');
        const [placeHolderColor, setPlaceHolderColor] = React.useState(
            placheHolderTextColor,
        );
        const [fontSize, setFontSize] = React.useState(fontTextSize)
        const [textInputHeight, setTextInputHeight] = React.useState(0);
        const [placeHolderTextHeight, setPlaceHolderTextHeight] = React.useState(0);
        const [secure, setSecure] = React.useState(secureTextEntry);
        const [text, setText] = React.useState(defaultValue)
        const [animationBaseStyle, setAnimationBaseStyle] = React.useState(null)


        // variables
        const TEXT_INPUT_CENTER = (textInputHeight - placeHolderTextHeight) / 1.5;

        const startAnimation = () => {
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }).start();
            setPlaceHolderColor(Colors.WHITE);
            setFontSize(Constant.CHANGE_BY_MOBILE_DPI(11))
            setAnimationBaseStyle({
                top: Constant.CHANGE_BY_MOBILE_DPI(10)
            })
        };

        const finishAnimation = () => {
            if (value.current) return;
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start();
            setPlaceHolderColor(placheHolderTextColor);
            setFontSize(Constant.CHANGE_BY_MOBILE_DPI(16))
            setAnimationBaseStyle(null)
        };

        const translateY = animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -(TEXT_INPUT_CENTER / 1.5)],
        });

        const handleOnTextPress = () => {
            startAnimation();
            inputRef?.current?.focus();
        };

        const calculateTextInputHeight = (evt) => {
            const height = Math.round(evt.nativeEvent.layout.height);
            setTextInputHeight(height);
        };

        const calculatePlaceHolderTextHeight = (evt) => {
            const height = Math.round(evt.nativeEvent.layout.height);
            setPlaceHolderTextHeight(height);
        };

        const handleOnChangeText = (t) => {
            setHelperText('');
            value.current = t;
            onChangeText(t);
        };

        const translateX = shakeValue.interpolate({
            inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
            outputRange: [0, -15, 15, -15, 15, 0],
        });

        React.useEffect(() => {
            defaultValue ? startAnimation() : null;
        }, []);

        React.useImperativeHandle(ref, () => ({
            startShakeAnimation() {
                Animated.timing(shakeValue, {
                    toValue: 1,
                    duration: 600,
                    useNativeDriver: true,
                }).start(() => {
                    shakeValue.setValue(0);
                });
            },
            showHelperText(text) {
                setHelperText(text);
            },
            secureText() {
                setSecure(!secure);
            },
            setText(text) {
                text != '' && startAnimation()
                setText(text);
                value.current = text;
            }
        }));


        return (
            <View
                style={{
                    marginTop: Constant.CHANGE_BY_MOBILE_DPI(30),
                    marginBottom: placeHolderTextHeight + 5,
                    ...containerStyle,

                }}>
                <Animated.View
                    style={[
                        styles.container,

                        {
                            transform: [
                                {
                                    translateX,
                                },
                            ],
                        },
                    ]}>

                    <View style={styles.inputContainer} >
                        <TextInput
                            multiline={multiline}
                            autoFocus={autoFocus}
                            onChange={onChange}
                            onChangeText={handleOnChangeText}
                            ref={inputRef}
                            onLayout={calculateTextInputHeight}
                            onFocus={() => {
                                onFocus()
                                startAnimation()
                            }}
                            onBlur={finishAnimation}
                            keyboardType={keyboardType}
                            defaultValue={text}
                            maxLength={maxLength}
                            autoCapitalize={autoCapitalize}
                            editable={editable}
                            textContentType={textContentType}
                            style={[styles.input, animationBaseStyle]}
                            secureTextEntry={secure}
                        ></TextInput>
                    </View>

                    <Animated.Text
                        onLayout={calculatePlaceHolderTextHeight}
                        suppressHighlighting={true}
                        onPress={handleOnTextPress}
                        style={[
                            styles.placeHolder, {
                                transform: [{ translateY }],
                                color: placeHolderColor,
                                top: TEXT_INPUT_CENTER,
                                fontSize: fontSize
                            },
                        ]}>
                        {placeHolder || 'PlaceHolder'}
                    </Animated.Text>
                </Animated.View>
                {
                    Boolean(helperText) && (
                        <Text style={{ ...styles.helperText, left: placeHolder == "User Name" ? -25 : 0 }}>
                            {helperText}
                        </Text>
                    )
                }
            </View >
        );
    },
);

export default React.memo(CustomTextInput, () => true);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginHorizontal: 0,
        position: 'relative',

    },
    inputContainer: {
        height: Constant.CHANGE_BY_MOBILE_DPI(56),
        borderRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
        backgroundColor: Colors.DARK_GRAY,
        paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),

    },
    input: {
        fontFamily: Fonts.REGULAR,
        fontSize: Fonts.FONT_SIZE_16,
        color: Colors.WHITE,
        includeFontPadding: false,
        // textAlignVertical: 'center',



    },
    placeHolder: {
        position: 'absolute',
        left: 20,
        zIndex: 100,
        includeFontPadding: false,
        fontFamily: Fonts.REGULAR,
        color: Colors.WHITE,
    },
    helperText: {
        marginTop: Constant.CHANGE_BY_MOBILE_DPI(5),
        fontFamily: Fonts.MEDIUM,
        fontSize: Constant.CHANGE_BY_MOBILE_DPI(14),
        marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
        color: Colors.ALERT_COLOR,
    },
    // mainContainer: {
    //     height: Constant.CHANGE_BY_MOBILE_DPI(45),
    //     backgroundColor: 'red'
    // }
});
