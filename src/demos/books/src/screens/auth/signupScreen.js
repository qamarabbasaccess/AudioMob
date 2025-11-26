import { Image, ImageBackground, TouchableOpacity, TextInput, ScrollView, StyleSheet, Text, View, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { Colors, Fonts, Sizes, CommonStyles, screenHeight } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SignupScreen = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1, }}>
                <ImageBackground
                    source={require('../../assets/images/splashBg.png')}
                    style={{ flex: 1, opacity: 0.3 }}
                />
                <View style={styles.imageOverlay}>
                    {topHeader()}
                    {signupInfo()}
                </View>
            </View>
        </View>
    )

    function signupInfo() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={Platform.OS == 'ios' ? 60 : 0}
                style={{ flex: 1, marginTop: screenHeight / 3.5 - 40, height: '100%' }}
            >
                <ScrollView
                    automaticallyAdjustKeyboardInsets={true}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingTop: Sizes.fixPadding * 4.0 }}
                >
                    {title()}
                    {nameInfo()}
                    {emailInfo()}
                    {mobileNumberInfo()}
                    {signupButton()}
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }

    function mobileNumberInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <View style={{ ...CommonStyles.rowAlignCenter }}>
                    <MaterialIcons name="phone-android" size={20} color={Colors.grayColor} />
                    <TextInput
                        placeholder='Enter your mobile number'
                        placeholderTextColor={Colors.grayColor}
                        style={styles.textFieldStyle}
                        selectionColor={Colors.primaryColor}
                        value={mobileNumber}
                        onChangeText={(value) => setMobileNumber(value)}
                        keyboardType='phone-pad'
                    />
                </View>
                <View style={{ backgroundColor: Colors.lightGrayColor, height: 1.5, marginTop: Sizes.fixPadding - 5.0 }} />
            </View>
        )
    }

    function emailInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 4.0 }}>
                <View style={{ ...CommonStyles.rowAlignCenter }}>
                    <MaterialIcons name="mail-outline" size={20} color={Colors.grayColor} />
                    <TextInput
                        placeholder='Enter your email id'
                        placeholderTextColor={Colors.grayColor}
                        style={styles.textFieldStyle}
                        selectionColor={Colors.primaryColor}
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                        keyboardType='email-address'
                    />
                </View>
                <View style={{ backgroundColor: Colors.lightGrayColor, height: 1.5, marginTop: Sizes.fixPadding - 5.0 }} />
            </View>
        )
    }

    function nameInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <View style={{ ...CommonStyles.rowAlignCenter }}>
                    <MaterialIcons name="person-outline" size={20} color={Colors.grayColor} />
                    <TextInput
                        placeholder='Enter your name'
                        placeholderTextColor={Colors.grayColor}
                        style={styles.textFieldStyle}
                        selectionColor={Colors.primaryColor}
                        value={userName}
                        onChangeText={(value) => setUserName(value)}
                    />
                </View>
                <View style={{ backgroundColor: Colors.lightGrayColor, height: 1.5, marginTop: Sizes.fixPadding - 5.0 }} />
            </View>
        )
    }

    function signupButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('Verification') }}
                style={{ ...CommonStyles.buttonStyle, ...CommonStyles.buttonShadow, marginTop: Sizes.fixPadding * 4.0 }}
            >
                <Text style={{ ...Fonts.whiteColor18SemiBold }}>
                    Sign up
                </Text>
            </TouchableOpacity>
        )
    }

    function title() {
        return (
            <View style={{ marginVertical: Sizes.fixPadding * 4.0, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor20SemiBold }}>
                    Sign up
                </Text>
                <Text style={{ ...Fonts.darkGrayColor16Medium }}>
                    Sign up to continue
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

export default SignupScreen;

const styles = StyleSheet.create({
    imageOverlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
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
        padding: 0,
        ...Fonts.blackColor15Medium,
        flex: 1,
        marginLeft: Sizes.fixPadding + 2.0
    }
})