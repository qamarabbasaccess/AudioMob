import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { Colors, CommonStyles, screenWidth, Fonts, Sizes } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import { Header } from '../../components/header';

const HelpAndSupportScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={Platform.OS == 'ios' ? 10 : 0}
                style={{ flex: 1 }}
            >
                <Header header='Help & support' />
                <ScrollView showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={true}>
                    {helpInfo()}
                    {nameInfo()}
                    {emailInfo()}
                    {messageInfo()}
                </ScrollView>
            </KeyboardAvoidingView>
            {submitButton()}
        </View>
    )

    function submitButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.pop() }}
                style={{ ...CommonStyles.buttonStyle, ...CommonStyles.buttonShadow }}
            >
                <Text style={{ ...Fonts.whiteColor18SemiBold }}>
                    Submit
                </Text>
            </TouchableOpacity>
        )
    }

    function messageInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor15Medium, marginBottom: Sizes.fixPadding - 5.0 }}>
                    Message
                </Text>
                <View style={styles.textFieldWrapper}>
                    <TextInput
                        placeholder='Write your message here'
                        placeholderTextColor={Colors.grayColor}
                        selectionColor={Colors.primaryColor}
                        cursorColor={Colors.primaryColor}
                        style={{ ...Fonts.blackColor14Medium, height: 100.0, paddingTop: 0, }}
                        multiline
                        numberOfLines={5}
                        textAlignVertical='top'
                    />
                </View>
            </View>
        )
    }

    function emailInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 3.0 }}>
                <Text style={{ ...Fonts.blackColor15Medium, marginBottom: Sizes.fixPadding - 5.0 }}>
                    Email address
                </Text>
                <View style={styles.textFieldWrapper}>
                    <TextInput
                        placeholder='Enter Email address'
                        placeholderTextColor={Colors.grayColor}
                        selectionColor={Colors.primaryColor}
                        style={{ padding: 0, ...Fonts.blackColor14Medium }}
                    />
                </View>
            </View>
        )
    }

    function nameInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor15Medium, marginBottom: Sizes.fixPadding - 5.0 }}>
                    Name
                </Text>
                <View style={styles.textFieldWrapper}>
                    <TextInput
                        placeholder='Enter your name'
                        placeholderTextColor={Colors.grayColor}
                        selectionColor={Colors.primaryColor}
                        style={{ padding: 0, ...Fonts.blackColor14Medium }}
                    />
                </View>
            </View>
        )
    }

    function helpInfo() {
        return (
            <View style={{ ...CommonStyles.center, marginTop: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 4.0 }}>
                <Image
                    source={require('../../assets/images/contactUs.png')}
                    style={{ width: screenWidth / 2.5, height: 120.0, resizeMode: 'contain' }}
                />
                <Text style={{ ...Fonts.blackColor16SemiBold, marginTop: Sizes.fixPadding * 2.0 }}>
                    Hello how can we help you?
                </Text>
            </View>
        )
    }
}

export default HelpAndSupportScreen;

const styles = StyleSheet.create({
    textFieldWrapper: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding + 3.0,
        ...CommonStyles.shadow
    }
})