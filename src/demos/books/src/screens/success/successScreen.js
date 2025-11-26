import { BackHandler, Platform, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { Colors, CommonStyles, Fonts, Sizes, } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFocusEffect } from '@react-navigation/native';

const SuccessScreen = ({ navigation }) => {

    const backAction = () => {
        if (Platform.OS === "ios") {
            navigation.addListener("beforeRemove", (e) => {
                e.preventDefault();
            });
        } else {
            navigation.push('BottomTabBar')
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

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1, ...CommonStyles.center }}>
                {successInfo()}
            </View>
            {backToHomeButton()}
        </View>
    )

    function backToHomeButton() {
        return (
            <Text onPress={() => { navigation.push('BottomTabBar') }} style={styles.backToHomeButton}>
                Back to home
            </Text>
        )
    }

    function successInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 4.0 }}>
                <View style={styles.successOuterCircle}>
                    <View style={styles.successInnerCircle}>
                        <MaterialIcons
                            name='done'
                            color={Colors.whiteColor}
                            size={50}
                        />
                    </View>
                </View>
                <Text style={{ ...Fonts.primaryColor20SemiBold, textAlign: 'center', marginVertical: Sizes.fixPadding }}>
                    Congratulation
                </Text>
                <Text style={{ ...Fonts.grayColor16Medium, textAlign: 'center' }}>
                    Your payment successfully paid now you listen or read your favourite book
                </Text>
            </View>
        )
    }
}

export default SuccessScreen

const styles = StyleSheet.create({
    successOuterCircle: {
        width: 110.0,
        height: 110.0,
        borderRadius: 55.0,
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        ...CommonStyles.center,
        alignSelf: 'center'
    },
    successInnerCircle: {
        ...CommonStyles.center,
        width: 94.0,
        height: 94.0, borderRadius: 47.0,
        backgroundColor: Colors.primaryColor
    },
    backToHomeButton: {
        ...Fonts.primaryColor18SemiBold,
        textAlign: 'center',
        alignSelf: 'center',
        margin: Sizes.fixPadding * 2.0,
    }
})