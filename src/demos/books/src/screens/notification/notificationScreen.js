import React, { useState, useRef } from "react";
import { FlatList, Animated, View, StyleSheet, Text } from "react-native";
import { Colors, CommonStyles, Fonts, screenWidth, Sizes, } from "../../constants/styles";
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';
import MyStatusBar from "../../components/myStatusBar";
import { Header } from "../../components/header";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const newNotificatiosList = [
    {
        key: '1',
        title: 'Get premium',
        description: 'Subscribe the plan and listen & read video without any restriction.',
        time: '2 min ago',
    },
    {
        key: '2',
        title: 'Success',
        description: 'Your monthly plan active successfully now listen your book.',
        time: '2 min ago',
    },
    {
        key: '3',
        title: 'Oath and Honor',
        description: 'Hey..get ready to read new book “Oath and Honor”',
        time: '2 min ago',
    },
];

const oldNotificationsList = [
    {
        key: '1',
        title: 'Get premium',
        description: 'Subscribe the plan and listen & read video without any restriction.',
        time: '2 min ago',
    },
    {
        key: '2',
        title: 'Success',
        description: 'Your monthly plan active successfully now listen your book.',
        time: '2 min ago',
    },
];

const rowTranslateAnimatedValues = {};

const NotificationScreen = () => {

    const [showSnackBar, setShowSnackBar] = useState(false);

    const [snackBarMsg, setSnackBarMsg] = useState('');

    const [listData, setListData] = useState(newNotificatiosList);

    const [oldListData, setOldListData] = useState(oldNotificationsList);

    Array(listData.length + 1)
        .fill('')
        .forEach((_, i) => {
            rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
        });

    Array(oldListData.length + 1)
        .fill('')
        .forEach((_, i) => {
            rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
        });

    const animationIsRunning = useRef(false);

    const onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;
        if (
            (value > screenWidth) || (value < -screenWidth) &&
            !animationIsRunning.current
        ) {
            animationIsRunning.current = true;
            Animated.timing(rowTranslateAnimatedValues[key], {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start(() => {

                const newData = [...listData];
                const prevIndex = listData.findIndex(item => item.key === key);
                newData.splice(prevIndex, 1);
                const removedItem = listData.find(item => item.key === key);

                setSnackBarMsg(`${removedItem.title} dismissed!`);

                setListData(newData);

                setShowSnackBar(true);

                animationIsRunning.current = false;
            });
        }
    };

    const renderItem = data => (
        <Animated.View
            style={[
                {
                    height: rowTranslateAnimatedValues[
                        data.item.key
                    ].interpolate({
                        inputRange: ['0%', '100%'],
                        outputRange: ["0%", "100%"],
                    }),
                },
            ]}
        >
            <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
                <View style={{ marginVertical: Sizes.fixPadding + 5.0, marginHorizontal: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.notificationIconWrapper}>
                        <MaterialIcons name="notifications-none" size={26} color={Colors.whiteColor} />
                    </View>
                    <View style={{ flex: 1, marginLeft: Sizes.fixPadding * 2.0 }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor16Medium }}>
                            {data.item.title}
                        </Text>
                        <Text numberOfLines={2} style={{ ...Fonts.blackColor14Regular }}>
                            {data.item.description}
                        </Text>
                        <Text numberOfLines={1} style={{ ...Fonts.grayColor12Medium }}>
                            {data.item.time}
                        </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: data.index == listData.length - 1 ? 'transparent' : Colors.lightGrayColor, height: 1.0, }} />
            </View>
        </Animated.View>
    );

    const renderHiddenItem = () => (
        <View style={styles.rowBack} />
    );

    const oldOnSwipeValueChange = swipeData => {
        const { key, value } = swipeData;

        if ((value > screenWidth) || (value < -screenWidth) && !animationIsRunning.current) {
            animationIsRunning.current = true;
            Animated.timing(rowTranslateAnimatedValues[key], {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start(() => {
                const newData = [...oldListData];
                const prevIndex = oldListData.findIndex(item => item.key === key);
                newData.splice(prevIndex, 1);
                const removedItem = oldListData.find(item => item.key === key);
                setSnackBarMsg(`${removedItem.title} dismissed!`);
                setOldListData(newData);
                setShowSnackBar(true);
                animationIsRunning.current = false;
            });
        }
    };

    const oldRenderItem = data => (
        <Animated.View
            style={[
                {
                    height: rowTranslateAnimatedValues[
                        data.item.key
                    ].interpolate({
                        inputRange: ['0%', '100%'],
                        outputRange: ["0%", "100%"],
                    }),
                },
            ]}
        >
            <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
                <View style={{ marginVertical: Sizes.fixPadding + 5.0, marginHorizontal: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.notificationIconWrapper}>
                        <MaterialIcons name="notifications-none" size={26} color={Colors.whiteColor} />
                    </View>
                    <View style={{ flex: 1, marginLeft: Sizes.fixPadding * 2.0 }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor16Medium }}>
                            {data.item.title}
                        </Text>
                        <Text numberOfLines={2} style={{ ...Fonts.blackColor14Regular }}>
                            {data.item.description}
                        </Text>
                        <Text numberOfLines={1} style={{ ...Fonts.grayColor12Medium }}>
                            {data.item.time}
                        </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: data.index == oldListData.length - 1 ? 'transparent' : Colors.lightGrayColor, height: 1.0, }} />
            </View>
        </Animated.View>
    );

    const oldRenderHiddenItem = () => (
        <View style={styles.rowBack} />
    );

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header='Notification' />
                {
                    listData.length == 0 && oldListData.length == 0
                        ?
                        noNotoficationInfo()
                        :
                        notifications()
                }
            </View>
            {snackBar()}
        </View>
    )

    function notifications() {
        return (
            <FlatList
                ListHeaderComponent={
                    <View style={{ flex: 1 }}>
                        {newNotifications()}
                        {oldNotifications()}
                    </View>
                }
                contentContainerStyle={{ paddingBottom: Sizes.fixPadding, }}
                showsVerticalScrollIndicator={false}
                bounces={false}
            />
        )
    }

    function snackBar() {
        return (
            <Snackbar
                style={{ backgroundColor: Colors.blackColor }}
                visible={showSnackBar}
                onDismiss={() => setShowSnackBar(false)}
                elevation={0}
            >
                <Text style={{ ...Fonts.whiteColor14Medium }}>
                    {snackBarMsg}
                </Text>
            </Snackbar>
        )
    }

    function oldNotifications() {
        return (
            oldListData.length == 0
                ?
                null
                :
                <View>
                    <View style={{ ...styles.titleTypeWrapStyle, }}>
                        <Text style={{ ...Fonts.primaryColor16Medium }}>
                            Older notification
                        </Text>
                        <Text onPress={() => { setOldListData([]) }} style={{ ...Fonts.grayColor14Medium }}>
                            Clear all
                        </Text>
                    </View>
                    <SwipeListView
                        listKey={`olds`}
                        data={oldListData}
                        renderItem={oldRenderItem}
                        renderHiddenItem={oldRenderHiddenItem}
                        rightOpenValue={-screenWidth}
                        leftOpenValue={screenWidth}
                        onSwipeValueChange={oldOnSwipeValueChange}
                        useNativeDriver={false}
                        contentContainerStyle={{ paddingVertical: Sizes.fixPadding - 8.0, }}
                        scrollEnabled={false}
                    />
                </View>
        )
    }

    function newNotifications() {
        return (
            listData.length == 0
                ?
                null
                :
                <View style={{ marginBottom: Sizes.fixPadding + 5.0 }}>
                    <View style={styles.titleTypeWrapStyle}>
                        <Text numberOfLines={1} style={{ flex: 1, ...Fonts.primaryColor16Medium, marginRight: Sizes.fixPadding }}>
                            New notification
                        </Text>
                        <Text onPress={() => { setListData([]) }} style={{ ...Fonts.grayColor14Medium }}>
                            Clear all
                        </Text>
                    </View>
                    <SwipeListView
                        listKey={`todays`}
                        data={listData}
                        renderItem={renderItem}
                        renderHiddenItem={renderHiddenItem}
                        rightOpenValue={-screenWidth}
                        leftOpenValue={screenWidth}
                        onSwipeValueChange={onSwipeValueChange}
                        useNativeDriver={false}
                        scrollEnabled={false}
                    />
                </View>
        )
    }

    function noNotoficationInfo() {
        return (
            <View style={{ flex: 0.95, ...CommonStyles.center }}>
                <MaterialIcons name="notifications-off" size={48} color={Colors.grayColor} />
                <Text style={{ ...Fonts.grayColor16SemiBold, marginTop: Sizes.fixPadding }}>
                    No new notification
                </Text>
            </View>
        )
    }
}

export default NotificationScreen

const styles = StyleSheet.create({
    rowBack: {
        backgroundColor: Colors.primaryColor,
        flex: 1,
    },
    titleTypeWrapStyle: {
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.rowAlignCenter,
        justifyContent: 'space-between',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding,
    },
    notificationIconWrapper: {
        width: 50.0,
        height: 50.0,
        borderRadius: Sizes.fixPadding - 5.0,
        ...CommonStyles.center,
        backgroundColor: Colors.primaryColor
    }
})