import { Image, ImageBackground, TouchableOpacity, Modal, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import MyStatusBar from '../../components/myStatusBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors, Fonts, Sizes, CommonStyles, screenHeight } from '../../constants/styles';
import { OtpInput } from 'react-native-otp-entry';
import { Circle } from 'react-native-animated-spinkit';

const VerificationScreen = ({ navigation }) => {

    const [time, setTime] = useState(59);

    const timeOutCallback = useCallback(
        () => setTime((currTimer) => (currTimer == 0 ? null : currTimer - 1)),
        []
    );

    useEffect(() => {
        time > 0 && !isLoading && setTimeout(timeOutCallback, 1000);
        () => {
            return clearTimeout(timeOutCallback);
        };
    }, [time, timeOutCallback]);

    const resetTimer = function () {
        if (!time) {
            setTime(22);
        }
    };

    const [otpInput, setotpInput] = useState("");
    const [isLoading, setisLoading] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../../assets/images/splashBg.png')}
                    style={{ flex: 1, opacity: 0.3 }}
                />
                <View style={styles.imageOverlay}>
                    {topHeader()}
                    {verificationInfo()}
                </View>
            </View>
            {loadingDialog()}
        </View>
    )

    function loadingDialog() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={isLoading}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                    <View style={{ justifyContent: "center", flex: 1 }}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => { }}
                            style={styles.dialogStyle}
                        >
                            <View style={{ ...CommonStyles.center }}>
                                <Circle size={40} color={Colors.primaryColor} style={{ marginTop: Sizes.fixPadding - 5.0 }} />
                                <Text style={{ ...Fonts.primaryColor17SemiBold, marginTop: Sizes.fixPadding + 3.0 }}>
                                    Please wait
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }

    function verificationInfo() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={Platform.OS == 'ios' ? 60 : 0}
                style={{ flex: 1, marginTop: screenHeight / 3.5 - 40 }}
            >
                <ScrollView automaticallyAdjustKeyboardInsets={true} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: Sizes.fixPadding * 4.0 }}>
                    {titleInfo()}
                    {otpInfo()}
                    {verifyButton()}
                    {resendInfoWithTime()}
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }

    function titleInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 4.0, }}>
                <Text style={{ ...Fonts.blackColor20SemiBold }}>
                    OTP verification
                </Text>
                <Text style={{ ...Fonts.darkGrayColor16Medium }}>
                    Confirmation code sent on +1 12345678890
                </Text>
            </View>
        )
    }

    function otpInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <OtpInput
                    numberOfDigits={5}
                    focusColor={Colors.primaryColor}
                    onTextChange={text => {
                        if (text.length == 5) {
                            setotpInput(text);
                            setisLoading(true);
                            setTimeout(() => {
                                setisLoading(false);
                                navigation.push('BottomTabBar')
                            }, 2000);
                        }
                    }}
                    theme={{
                        inputsContainerStyle: { justifyContent: 'space-between' },
                        pinCodeContainerStyle: { ...styles.textFieldStyle, height: 45.0 },
                        pinCodeTextStyle: { ...Fonts.primaryColor18SemiBold },
                        filledPinCodeContainerStyle: { borderWidth: 0, },
                        focusedPinCodeContainerStyle: { borderWidth: 0 }
                    }}
                />
            </View>
        )
    }

    function resendInfoWithTime() {
        return (
            <View
                style={{
                    ...CommonStyles.rowAlignCenter,
                    marginHorizontal: Sizes.fixPadding * 2.0,
                    marginBottom: Sizes.fixPadding * 2.0
                }}
            >
                <Text style={{ flex: 1, ...Fonts.grayColor16Medium }}>
                    Didn’t receive OTP? <Text onPress={() => { time == 0 ? resetTimer() : null }} style={{ ...Fonts.primaryColor16SemiBold }}>Resend</Text>
                </Text>
                <Text style={{ ...Fonts.primaryColor16Medium }}>
                    00:{String(time).length == 1 ? `0${time}` : time}
                </Text>
            </View>
        )
    }

    function verifyButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    setisLoading(true);
                    setTimeout(() => {
                        setisLoading(false);
                        navigation.push('BottomTabBar')
                    }, 2000);
                }}
                style={{ ...CommonStyles.buttonStyle, ...CommonStyles.buttonShadow, marginBottom: Sizes.fixPadding, marginTop: Sizes.fixPadding * 5.0 }}
            >
                <Text style={{ ...Fonts.whiteColor18SemiBold }}>
                    Verify
                </Text>
            </TouchableOpacity>
        )
    }

    function topHeader() {
        return (
            <ImageBackground
                source={require('../../assets/images/authTopHeader.png')}
                style={styles.topHeaderImageStyle}
                resizeMode='stretch'
            >
                <Image
                    source={require('../../assets/images/appIcon.png')}
                    style={{ width: screenHeight / 15.0, height: screenHeight / 15.0, resizeMode: 'contain' }}
                />
                <Text style={{ ...Fonts.whiteColor24SemiBold, marginTop: Sizes.fixPadding }}>
                    Book Swap
                </Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.pop() }}
                    style={styles.backButton}
                >
                    <MaterialIcons name="arrow-back" size={22} color={Colors.blackColor} />
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

export default VerificationScreen;

const styles = StyleSheet.create({
    imageOverlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    topHeaderImageStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: screenHeight / 3.5,
        width: '100%',
        ...CommonStyles.center,
        paddingBottom: Sizes.fixPadding * 2.0,
        zIndex: 1,
    },
    backButton: {
        width: 30.0,
        height: 30.0,
        borderRadius: Sizes.fixPadding - 5.0,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        ...CommonStyles.center,
        position: 'absolute',
        top: 20.0,
        left: 20.0,
        zIndex: 1
    },
    textFieldStyle: {
        backgroundColor: Colors.grayColor,
        marginHorizontal: Sizes.fixPadding - 2.0,
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderBottomWidth: 2.0,
        borderRadius: 0,
        ...Fonts.primaryColor18SemiBold
    },
    dialogStyle: {
        backgroundColor: Colors.whiteColor,
        width: '85%',
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding * 3.0,
    },
})