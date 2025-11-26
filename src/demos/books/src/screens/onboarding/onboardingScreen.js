import { StyleSheet, Text, View, Image, BackHandler, FlatList, TouchableOpacity, Platform } from 'react-native';
import React, { createRef, useCallback, useState } from 'react';
import { Colors, screenWidth, Sizes, Fonts, CommonStyles } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import { useFocusEffect } from '@react-navigation/native';
import { ExitToast } from '../../components/exitToast';

const onboardingScreenList = [
    {
        id: "1",
        onboardingImage: require("../../assets/images/onboarding/onboarding1.png"),
        onboardingTitle: "Welcome to Book Swap",
        onboardingDescription:
            "Lorem ipsum dolor sit amet consectetur. Fringilla qellus bibendum quis feugiat nec molestie auctor morbi. Praesent amet ultricies ",
    },
    {
        id: "2",
        onboardingImage: require("../../assets/images/onboarding/onboarding2.png"),
        onboardingTitle: "Listen your favourite audio book",
        onboardingDescription:
            "Lorem ipsum dolor sit amet consectetur. Fringilla qellus bibendum quis feugiat nec molestie auctor morbi. Praesent amet ultricies ",
    },
    {
        id: "3",
        onboardingImage: require("../../assets/images/onboarding/onboarding3.png"),
        onboardingTitle: "Easy to explore",
        onboardingDescription:
            "Lorem ipsum dolor sit amet consectetur. Fringilla qellus bibendum quis feugiat nec molestie auctor morbi. Praesent amet ultricies ",
    },
];

const OnboardingScreen = ({ navigation }) => {

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
    const [currentScreen, setCurrentScreen] = useState(0);
    const listRef = createRef();

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {bgImage()}
                {onboardingScreenContent()}
                {nextAndSignButton()}
                {currentScreen == 2 ? null : skipText()}
            </View>
            {indicators()}
            {backClickCount == 1 ? <ExitToast /> : null}
        </View>
    )

    function nextAndSignButton() {
        const scrollToIndex = ({ index }) => {
            listRef.current.scrollToIndex({ animated: true, index: index });
            setCurrentScreen(index);
        };
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    currentScreen == 2
                        ? navigation.push("Signin")
                        : scrollToIndex({ index: currentScreen + 1 });
                }}
                style={styles.nextAndSigninButton}
            >
                <Text numberOfLines={1} style={{ ...Fonts.primaryColor18Medium }}>
                    {currentScreen == 2 ? 'Sign in' : 'Next'}
                </Text>
            </TouchableOpacity>
        )
    }

    function skipText() {
        return (
            <Text onPress={() => { navigation.push('Signin') }} style={{ ...styles.skipTextStyle }}>
                Skip
            </Text>
        )
    }

    function indicators() {
        return (
            <View style={{ ...CommonStyles.rowAlignCenter, margin: Sizes.fixPadding * 2.0 }}>
                {onboardingScreenList.map((item, index) => {
                    return (
                        <View
                            key={`${item.id}`}
                            style={{
                                backgroundColor: currentScreen == index ? Colors.primaryColor : Colors.lightGrayColor,
                                ...styles.indicatorStyle,
                            }}
                        />
                    );
                })}
            </View>
        )
    }

    function onScrollEnd(e) {
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;
        let pageNum = Math.floor(contentOffset.x / viewSize.width);
        setCurrentScreen(pageNum);
    }

    function onboardingScreenContent() {
        const renderItem = ({ item }) => {
            return (
                <View style={styles.onboardingScrollContent}>
                    <View style={{ height: '45%', marginHorizontal: Sizes.fixPadding * 2.0, marginTop: Sizes.fixPadding * 5.0 }}>
                        <Text numberOfLines={1} style={{ ...Fonts.whiteColor22SemiBold }}>
                            {item.onboardingTitle}
                        </Text>
                        <Text numberOfLines={3} style={{ ...Fonts.whiteColor12Medium, opacity: 0.8, marginVertical: Sizes.fixPadding }}>
                            {item.onboardingDescription}
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image
                            source={item.onboardingImage}
                            style={{ width: '100%', height: screenWidth / 1.45, resizeMode: "contain" }}
                        />
                    </View>
                </View>
            );
        };

        return (
            <View style={styles.onboardingContentWrapper}>
                <FlatList
                    ref={listRef}
                    data={onboardingScreenList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    horizontal
                    scrollEventThrottle={32}
                    pagingEnabled
                    onMomentumScrollEnd={onScrollEnd}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        );
    }

    function bgImage() {
        return (
            <Image
                source={require('../../assets/images/onboardingBg.png')}
                style={{ resizeMode: 'stretch', width: '100%', height: '55%' }}
            />
        )
    }
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    onboardingScrollContent: {
        flex: 1,
        width: screenWidth,
        height: "100%",
        overflow: "hidden",
        justifyContent: 'space-between',
    },
    indicatorStyle: {
        width: 12.0,
        height: 12.0,
        borderRadius: 6.0,
        marginHorizontal: Sizes.fixPadding - 6.0
    },
    nextAndSigninButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: Sizes.fixPadding - 5.0,
        alignSelf: 'flex-start',
        alignItems: 'center',
        paddingVertical: Sizes.fixPadding - 5.0,
        paddingHorizontal: Sizes.fixPadding,
        marginVertical: Sizes.fixPadding,
        width: 83.0,
        position: 'absolute',
        top: 150,
        left: 20.0,
    },
    skipTextStyle: {
        ...Fonts.whiteColor14SemiBold,
        position: 'absolute',
        top: 15.0,
        right: 20.0,
        zIndex: 1
    },
    onboardingContentWrapper: {
        flex: 1,
        position: 'absolute',
        left: 0,
        righ: 0,
        top: 0,
        bottom: 0
    }
})