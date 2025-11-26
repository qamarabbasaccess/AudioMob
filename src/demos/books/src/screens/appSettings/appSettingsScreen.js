import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors, CommonStyles, Fonts, Sizes } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import { Header } from '../../components/header';

const AppSettingsScreen = () => {

    const [notificationSwitch, setNotificationSwitch] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isAppUpdate, setIsAppUpdate] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header='App settings' />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {notificationInfo()}
                    {themeInfo()}
                    {appUpdateInfo()}
                </ScrollView>
            </View>
        </View>
    )

    function appUpdateInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <View style={{ ...CommonStyles.rowAlignCenter }}>
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor17Medium, flex: 1, marginRight: Sizes.fixPadding }}>
                        Application update
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { setIsAppUpdate(!isAppUpdate) }}
                        style={{ ...styles.switchWrapper, backgroundColor: isAppUpdate ? Colors.primaryColor : Colors.grayColor }}
                    >
                        <View style={{ alignSelf: isAppUpdate ? 'flex-end' : 'flex-start', ...styles.switchInnerCircle }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ ...Fonts.grayColor13Medium, marginTop: Sizes.fixPadding - 2.0 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing Tellus, habitant neque risus nuncrem quam arcu.
                </Text>
            </View>
        )
    }

    function themeInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 3.0 }}>
                <View style={{ ...CommonStyles.rowAlignCenter }}>
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor17Medium, flex: 1, marginRight: Sizes.fixPadding }}>
                        Dark mode
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { setIsDarkMode(!isDarkMode) }}
                        style={{ ...styles.switchWrapper, backgroundColor: isDarkMode ? Colors.primaryColor : Colors.grayColor }}
                    >
                        <View style={{ alignSelf: isDarkMode ? 'flex-end' : 'flex-start', ...styles.switchInnerCircle }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ ...Fonts.grayColor13Medium, marginTop: Sizes.fixPadding - 2.0 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing Tellus, habitant neque risus nuncrem quam arcu.
                </Text>
            </View>
        )
    }

    function notificationInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <View style={{ ...CommonStyles.rowAlignCenter }}>
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor17Medium, flex: 1, marginRight: Sizes.fixPadding }}>
                        Notification
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { setNotificationSwitch(!notificationSwitch) }}
                        style={{ ...styles.switchWrapper, backgroundColor: notificationSwitch ? Colors.primaryColor : Colors.grayColor }}
                    >
                        <View style={{ alignSelf: notificationSwitch ? 'flex-end' : 'flex-start', ...styles.switchInnerCircle }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ ...Fonts.grayColor13Medium, marginTop: Sizes.fixPadding - 2.0 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing Tellus, habitant neque risus nuncrem quam arcu.
                </Text>
            </View>
        )
    }
}

export default AppSettingsScreen

const styles = StyleSheet.create({
    switchInnerCircle: {
        marginHorizontal: Sizes.fixPadding - 7.0,
        width: 16.0,
        height: 16.0,
        borderRadius: 8.0,
        backgroundColor: Colors.whiteColor
    },
    switchWrapper: {
        width: 38.0,
        height: 21.0,
        borderRadius: Sizes.fixPadding * 3.0,
        justifyContent: 'center',
    }
})