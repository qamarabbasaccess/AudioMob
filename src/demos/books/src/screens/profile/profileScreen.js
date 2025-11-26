import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Modal, } from 'react-native';
import React, { useState } from 'react';
import { Colors, CommonStyles, Fonts, Sizes } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = ({ navigation }) => {

    const [showSignOutDialog, setShowSignOutDialog] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ backgroundColor: Colors.whiteColor }}>
                        {userInfo()}
                        {divider()}
                        {profileOptionSort({ bgColor: '#FF9500', icon: require('../../assets/images/icons/premium.png'), option: 'Go Premium', onPress: () => { navigation.push('Premium') }, })}
                        {divider()}
                        {profileOptionSort({ bgColor: '#4CD964', icon: require('../../assets/images/icons/bell.png'), option: 'Notification', onPress: () => { navigation.push('Notification') }, })}
                        {divider()}
                        {profileOptionSort({ bgColor: '#25E2CE', icon: require('../../assets/images/icons/download.png'), option: 'Downloaded book', onPress: () => { navigation.push('Downloads') }, })}
                        {divider()}
                        {profileOptionSort({ bgColor: '#C068C1', icon: require('../../assets/images/icons/setting.png'), option: 'App settings', onPress: () => { navigation.push('AppSettings') }, })}
                        {divider()}
                    </View>

                    <View style={{ backgroundColor: Colors.whiteColor, marginVertical: Sizes.fixPadding * 3.0, }}>
                        {profileOptionSort({ bgColor: '#8D8D92', icon: require('../../assets/images/icons/list.png'), option: 'Terms & Condition', onPress: () => { navigation.push('TermsAndCondition') }, })}
                        {divider()}
                        {profileOptionSort({ bgColor: '#7C7AE7', icon: require('../../assets/images/icons/privacy.png'), option: 'Privacy Policy', onPress: () => { navigation.push('PrivacyPolicy') }, })}
                        {divider()}
                        {profileOptionSort({ bgColor: '#AD934F', icon: require('../../assets/images/icons/help.png'), option: 'Help & Support', onPress: () => { navigation.push('HelpAndSupport') }, })}
                        {divider()}
                        {profileOptionSort({ bgColor: '#F44A25', icon: require('../../assets/images/icons/signout.png'), option: 'Sign out', onPress: () => { setShowSignOutDialog(true) }, })}
                        {divider()}
                    </View>
                </ScrollView>
            </View>
            {signOutDialog()}
        </View>
    )

    function signOutDialog() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={showSignOutDialog}
                onRequestClose={() => { setShowSignOutDialog(false) }}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => { setShowSignOutDialog(false) }}
                    style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                    <View style={{ justifyContent: "center", flex: 1 }}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => { }}
                            style={styles.dialogStyle}
                        >
                            <Text style={{ ...Fonts.blackColor16Medium, textAlign: 'center', margin: Sizes.fixPadding * 2.0 }}>
                                Are you sure you want to signout this account?
                            </Text>
                            <View style={{ ...CommonStyles.rowAlignCenter, marginBottom: -1.0 }}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => { setShowSignOutDialog(false) }}
                                    style={styles.dialogButton}
                                >
                                    <Text numberOfLines={1} style={{ ...Fonts.whiteColor18SemiBold }}>
                                        No
                                    </Text>
                                </TouchableOpacity>
                                <View style={{ width: 2.0, backgroundColor: Colors.whiteColor }} />
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => { setShowSignOutDialog(false); navigation.push('Signin') }}
                                    style={styles.dialogButton}
                                >
                                    <Text numberOfLines={1} style={{ ...Fonts.whiteColor18SemiBold }}>
                                        Sign out
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }

    function profileOptionSort({ bgColor, icon, option, onPress }) {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={{
                    ...CommonStyles.rowAlignCenter,
                    marginHorizontal: Sizes.fixPadding * 2.0,
                    marginVertical: Sizes.fixPadding + 5.0
                }}
            >
                <View style={{ ...styles.optionIconWrapper, backgroundColor: bgColor }}>
                    <Image
                        source={icon}
                        style={{ width: 16.0, height: 16.0, resizeMode: 'contain' }}
                    />
                </View>
                <Text numberOfLines={1} style={{ flex: 1, ...Fonts.blackColor15Medium, marginHorizontal: Sizes.fixPadding + 5.0 }}>
                    {option}
                </Text>
                <MaterialIcons name="arrow-forward-ios" size={16} color={Colors.grayColor} />
            </TouchableOpacity>
        )
    }

    function divider() {
        return (
            <View style={{ backgroundColor: Colors.lightGrayColor, height: 1.0, opacity: 0.5 }} />
        )
    }

    function userInfo() {
        return (
            <View style={{ ...CommonStyles.rowAlignCenter, marginVertical: Sizes.fixPadding + 5.0, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Image
                    source={require('../../assets/images/users/user1.png')}
                    style={{ width: 84.0, height: 84.0, borderRadius: 42.0 }}
                />
                <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding + 5.0 }}>
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor16SemiBold }}>
                        Bessie Cooper
                    </Text>
                    <Text numberOfLines={1} style={{ ...Fonts.grayColor12Medium, marginTop: Sizes.fixPadding - 8.0 }}>
                        bessie@mail.com
                    </Text>
                </View>
                <MaterialIcons name="edit" size={20} color={Colors.primaryColor} onPress={() => { navigation.push('EditProfile') }} />
            </View>
        )
    }

    function header() {
        return (
            <View style={{ ...CommonStyles.center }}>
                <Text style={{ ...Fonts.blackColor18SemiBold, margin: Sizes.fixPadding * 2.0 }}>
                    Profile
                </Text>
            </View>
        )
    }
}

export default ProfileScreen

const styles = StyleSheet.create({
    optionIconWrapper: {
        width: 28.0,
        height: 28.0,
        borderRadius: Sizes.fixPadding - 5.0,
        ...CommonStyles.center,
    },
    dialogButton: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
        padding: Sizes.fixPadding,
        ...CommonStyles.center,
    },
    dialogStyle: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        width: '80%',
        alignSelf: 'center',
        overflow: 'hidden',
    }
})