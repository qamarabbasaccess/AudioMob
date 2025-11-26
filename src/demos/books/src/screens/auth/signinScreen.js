import { BackHandler, Image, ImageBackground, TouchableOpacity, TextInput, FlatList, Modal, Platform, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { Colors, Fonts, Sizes, CommonStyles, screenHeight } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import { ExitToast } from '../../components/exitToast';
import IntlPhoneInput from "react-native-intl-phone-input";
import { useFocusEffect } from '@react-navigation/native';

const SigninScreen = ({ navigation }) => {

    const backAction = () => {
        if (Platform.OS === "ios") {
            navigation.addListener("beforeRemove", (e) => {
                e.preventDefault();
            });
        } else {
            backClickCount == 1 ? BackHandler.exitApp() : _spring();
            return true;
        }
    };

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            navigation.addListener("gestureEnd", backAction);
            return () => {
                BackHandler.removeEventListener("hardwareBackPress", backAction);
                navigation.removeListener("gestureEnd", backAction);
            };
        }, [backAction])
    );

    function _spring() {
        setBackClickCount(1);
        setTimeout(() => {
            setBackClickCount(0);
        }, 1000);
    }

    const [backClickCount, setBackClickCount] = useState(0);
    const [countries, setcountries] = useState();
    const [mobileNumber, setMobileNumber] = useState("");
    const phoneInput = useRef();

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
                    {signinInfo()}
                </View>
            </View>
            {backClickCount == 1 ? <ExitToast /> : null}
        </View>
    )

    function signinInfo() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={Platform.OS == 'ios' ? 60 : 0}
                style={{ flex: 1, marginTop: screenHeight / 3.5 - 40 }}
            >
                <ScrollView automaticallyAdjustKeyboardInsets={true} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: Sizes.fixPadding * 4.0 }}>
                    {title()}
                    {mobileNumberInfo()}
                    {signinButton()}
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }

    function mobileNumberInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 2.0 }}>
                <IntlPhoneInput
                    ref={phoneInput}
                    onChangeText={({ phoneNumber }) => setMobileNumber(phoneNumber)}
                    defaultCountry="IN"
                    inputProps={{ cursorColor: Colors.primaryColor, selectionColor: Colors.primaryColor }}
                    containerStyle={styles.mobileFieldStyle}
                    placeholder={"Enter your mobile number"}
                    phoneInputStyle={styles.mobileNumberInputStyle}
                    placeholderTextColor={Colors.grayColor}
                    dialCodeTextStyle={{ ...Fonts.blackColor16Medium, marginHorizontal: Sizes.fixPadding, }}
                    filterInputStyle={{ ...Fonts.blackColor16Medium }}
                    flagStyle={{ fontSize: 0, width: 0, height: 0 }}
                    customModal={(modalVisible, allCountries, onCountryChange) => {
                        const filterCountries = (value) => {
                            const data = allCountries.filter(
                                (obj) =>
                                    obj.en.indexOf(value) > -1 || obj.dialCode.indexOf(value) > -1
                            );
                            setcountries(data);
                        };
                        return (
                            <View>
                                <Modal
                                    visible={modalVisible}
                                    transparent={true}
                                    onRequestClose={() => { phoneInput.current.hideModal() }}
                                    animationType="slide"
                                >
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => { phoneInput.current.hideModal() }}
                                        style={{ flex: 1, justifyContent: "center", backgroundColor: "rgba(0,0,0,0.3)", }}
                                    >
                                        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}>
                                            <TouchableOpacity
                                                activeOpacity={1}
                                                onPress={() => { }}
                                                style={styles.countryPickerModal}
                                            >
                                                <View>
                                                    <TextInput
                                                        autoCapitalize="words"
                                                        autoFocus
                                                        style={styles.countrySearchFieldStyle}
                                                        cursorColor={Colors.primaryColor}
                                                        selectionColor={Colors.primaryColor}
                                                        onFocus={() => setcountries(allCountries)}
                                                        onChangeText={filterCountries}
                                                        placeholderTextColor={Colors.grayColor}
                                                        placeholder="Search"
                                                    />
                                                </View>
                                                <FlatList
                                                    contentContainerStyle={{ paddingTop: Sizes.fixPadding }}
                                                    data={countries ? countries : allCountries}
                                                    keyExtractor={(item, index) => index.toString()}
                                                    showsVerticalScrollIndicator={false}
                                                    renderItem={({ item }) => (
                                                        <TouchableOpacity
                                                            onPress={() => onCountryChange(item.code)}
                                                            style={{ ...CommonStyles.rowAlignCenter, marginVertical: Sizes.fixPadding - 5.0, }}
                                                        >
                                                            <Text style={{ fontSize: 25 }}>{item.flag}</Text>
                                                            <Text style={{ ...Fonts.blackColor16Medium, flex: 1, marginHorizontal: Sizes.fixPadding, }}>
                                                                {item.en}
                                                            </Text>
                                                            <Text style={{ ...Fonts.blackColor16Medium }}>
                                                                {item.dialCode}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    )}
                                                />
                                            </TouchableOpacity>
                                        </KeyboardAvoidingView>
                                    </TouchableOpacity>
                                </Modal>
                            </View>
                        );
                    }}
                />
            </View>
        )
    }

    function signinButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('Signup') }}
                style={{ ...CommonStyles.buttonStyle, ...CommonStyles.buttonShadow }}
            >
                <Text style={{ ...Fonts.whiteColor18SemiBold }}>
                    Sign in
                </Text>
            </TouchableOpacity>
        )
    }

    function title() {
        return (
            <View style={{ marginTop: Sizes.fixPadding * 4.0, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor20SemiBold }}>
                    Sign in
                </Text>
                <Text style={{ ...Fonts.darkGrayColor16Medium }}>
                    Sign in to continue
                </Text>
            </View>
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
            </ImageBackground>
        )
    }
}

export default SigninScreen

const styles = StyleSheet.create({
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
    imageOverlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    countryPickerModal: {
        height: "70%",
        marginHorizontal: Sizes.fixPadding * 2.0,
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingTop: Sizes.fixPadding * 2.0,
    },
    countrySearchFieldStyle: {
        ...Fonts.blackColor16Medium,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        padding: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding - 5.0,
    },
    mobileFieldStyle: {
        backgroundColor: 'transparent',
        paddingHorizontal: 0,
        paddingVertical: Sizes.fixPadding,
        marginTop: Sizes.fixPadding * 3.0,
        borderRadius: Sizes.fixPadding,
        borderBottomColor: Colors.lightGrayColor,
        borderBottomWidth: 1.0,
    },
    mobileNumberInputStyle: {
        flex: 1,
        ...Fonts.blackColor16Medium,
        paddingLeft: Sizes.fixPadding + 5.0,
        borderLeftColor: Colors.lightGrayColor,
        borderLeftWidth: 1.0,
        padding: 0
    }
})