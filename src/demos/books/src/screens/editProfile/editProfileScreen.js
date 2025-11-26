import { ScrollView, StyleSheet, Text, View, Image, Modal, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import MyStatusBar from '../../components/myStatusBar';
import { Colors, CommonStyles, Fonts, Sizes, } from '../../constants/styles';
import { Header } from '../../components/header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const EditProfileScreen = ({ navigation }) => {

    const [userName, setUserName] = useState('Bessie Cooper');
    const [email, setEmail] = useState('bessie@mail.com');
    const [mobileNumber, setMobileNumber] = useState('+91 1234567890');
    const [showBottomSheet, setShowBottomSheet] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={Platform.OS == 'ios' ? 10 : 0}
                style={{ flex: 1 }}
            >
                <Header header='Edit profile' />
                <ScrollView
                    automaticallyAdjustKeyboardInsets={true}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}
                >
                    {userInfo()}
                    {userNameInfo()}
                    {emailInfo()}
                    {mobileNumberInfo()}
                </ScrollView>
            </KeyboardAvoidingView>
            {updateButton()}
            {changeProfilePicOptions()}
        </View>
    )

    function changeProfilePicOptions() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={showBottomSheet}
                onRequestClose={() => { setShowBottomSheet(false) }}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => { setShowBottomSheet(false) }}
                    style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                    <View style={{ justifyContent: "flex-end", flex: 1 }}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => { }}
                            style={{
                                backgroundColor: Colors.whiteColor,
                                borderTopLeftRadius: Sizes.fixPadding * 2.0,
                                borderTopRightRadius: Sizes.fixPadding * 2.0,
                            }}
                        >
                            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 2.5 }}>
                                <Text style={{ ...Fonts.blackColor16SemiBold, marginVertical: Sizes.fixPadding * 2.5 }}>
                                    Change profile Photo
                                </Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => { setShowBottomSheet(false) }}
                                    style={{ ...CommonStyles.rowAlignCenter }}
                                >
                                    <View style={styles.changePicOptionIconWrapper}>
                                        <MaterialIcons name="camera-alt" size={22} color="#1E4799" />
                                    </View>
                                    <Text style={{ ...Fonts.blackColor16Medium, marginLeft: Sizes.fixPadding + 5.0 }}>
                                        Camera
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => { setShowBottomSheet(false) }}
                                    style={{ ...CommonStyles.rowAlignCenter, marginVertical: Sizes.fixPadding * 2.0 }}
                                >
                                    <View style={styles.changePicOptionIconWrapper}>
                                        <MaterialIcons name="photo" size={22} color="#1E996D" />
                                    </View>
                                    <Text style={{ ...Fonts.blackColor16Medium, marginLeft: Sizes.fixPadding + 5.0 }}>
                                        Gallery
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => { setShowBottomSheet(false) }}
                                    style={{ ...CommonStyles.rowAlignCenter }}
                                >
                                    <View style={styles.changePicOptionIconWrapper}>
                                        <MaterialIcons name="delete" size={22} color="#EF1717" />
                                    </View>
                                    <Text style={{ ...Fonts.blackColor16Medium, marginLeft: Sizes.fixPadding + 5.0 }}>
                                        Remove image
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }

    function updateButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.pop() }}
                style={{ ...CommonStyles.buttonStyle, ...CommonStyles.buttonShadow }}
            >
                <Text style={{ ...Fonts.whiteColor18SemiBold }}>
                    Update
                </Text>
            </TouchableOpacity>
        )
    }

    function mobileNumberInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor15Medium, marginBottom: Sizes.fixPadding }}>
                    Mobile number
                </Text>
                <TextInput
                    placeholder='Enter Mobile number'
                    placeholderTextColor={Colors.grayColor}
                    style={{ ...Fonts.blackColor15Medium, marginBottom: Sizes.fixPadding,padding: 0 }}
                    selectionColor={Colors.primaryColor}
                    value={mobileNumber}
                    onChangeText={(value) => setMobileNumber(value)}
                    keyboardType='number-pad'
                />
                <View style={{ backgroundColor: Colors.lightGrayColor, height: 1.0, }} />
            </View>
        )
    }

    function emailInfo() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor15Medium, marginBottom: Sizes.fixPadding }}>
                    Email address
                </Text>
                <TextInput
                    placeholder='Enter Email address'
                    placeholderTextColor={Colors.grayColor}
                    style={{ ...Fonts.blackColor15Medium, marginBottom: Sizes.fixPadding,padding: 0 }}
                    selectionColor={Colors.primaryColor}
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                    keyboardType='email-address'
                />
                <View style={{ backgroundColor: Colors.lightGrayColor, height: 1.0, }} />
            </View>
        )
    }

    function userNameInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor15Medium, marginBottom: Sizes.fixPadding }}>
                    User name
                </Text>
                <TextInput
                    placeholder='Enter User name'
                    placeholderTextColor={Colors.grayColor}
                    style={{ ...Fonts.blackColor15Medium, marginBottom: Sizes.fixPadding, padding: 0 }}
                    selectionColor={Colors.primaryColor}
                    value={userName}
                    onChangeText={(value) => setUserName(value)}
                />
                <View style={{ backgroundColor: Colors.lightGrayColor, height: 1.0, }} />
            </View>
        )
    }

    function userInfo() {
        return (
            <View style={{ ...CommonStyles.center, marginBottom: Sizes.fixPadding * 4.0, marginTop: Sizes.fixPadding }}>
                <View style={{ ...CommonStyles.center }}>
                    <Image
                        source={require('../../assets/images/users/user1.png')}
                        style={{ width: 110.0, height: 100.0, borderRadius: 50.0, }}
                    />
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { setShowBottomSheet(true) }}
                        style={styles.cameraCircle}
                    >
                        <Ionicons name="camera-outline" size={25} color={Colors.primaryColor} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default EditProfileScreen

const styles = StyleSheet.create({
    cameraCircle: {
        width: 44.0,
        height: 44.0,
        borderRadius: 22.0,
        backgroundColor: Colors.bodyBackColor,
        position: 'absolute',
        bottom: -5.0,
        right: -5.0,
        ...CommonStyles.center
    },
    changePicOptionIconWrapper: {
        width: 40.0,
        height: 40.0,
        borderRadius: 20.0,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        ...CommonStyles.center
    }
})