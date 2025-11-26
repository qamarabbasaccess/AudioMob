import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import MyStatusBar from '../../components/myStatusBar'
import { Colors, CommonStyles, Fonts, Sizes } from '../../constants/styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Snackbar } from 'react-native-paper';

const reviews = [
    {
        id: '1',
        image: require('../../assets/images/users/user16.png'),
        name: 'Jane Cooper',
        reviewDate: '1 Dec 2023',
        review: 'Lorem ipsum dolor sit amet consectetur. Non cursus congue vel sem bibendum. Egestas in amet ac duis tortor ornare lorem in. Quis consectetur pretium',
        rating: 5,
    },
    {
        id: '2',
        image: require('../../assets/images/users/user14.png'),
        name: 'Esther Howard',
        reviewDate: '1 Dec 2023',
        review: 'Lorem ipsum dolor sit amet consectetur. Non cursus congue vel sem bibendum. Egestas in amet ac duis tortor ornare lorem in. Quis consectetur pretium',
        rating: 4,
    },
    {
        id: '3',
        image: require('../../assets/images/users/user15.png'),
        name: 'Brooklyn Simmons',
        reviewDate: '1 Dec 2023',
        review: 'Lorem ipsum dolor sit amet consectetur. Non cursus congue vel sem bibendum. Egestas in amet ac duis tortor ornare lorem in. Quis consectetur pretium',
        rating: 4,
    },
];

const BookDetailScreen = ({ navigation }) => {

    const [inSaved, setInSaved] = useState(true);
    const [showSnackBar, setShowSnackBar] = useState(false);
    const [readMore, setReadMore] = useState('');

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={true}>
                    {bookImageWithName()}
                    {bookDetailInfo()}
                    {divider()}
                    {descriptionInfo()}
                    {divider()}
                    {reviewsInfo()}
                </ScrollView>
            </View>
            {readAndListenButton()}
            {snackBarInfo()}
        </View>
    )

    function readAndListenButton() {
        return (
            <View style={{ ...CommonStyles.rowAlignCenter, backgroundColor: Colors.bodyBackColor, padding: Sizes.fixPadding * 2.0 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.push('ReadBook') }}
                    style={{ ...styles.bottomButtonStyle, marginRight: Sizes.fixPadding }}
                >
                    <Text numberOfLines={1} style={{ ...Fonts.whiteColor18SemiBold }}>
                        Read
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.push('ListenBook') }}
                    style={{ ...styles.bottomButtonStyle, marginLeft: Sizes.fixPadding }}
                >
                    <Text numberOfLines={1} style={{ ...Fonts.whiteColor18SemiBold }}>
                        Listen
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    function reviewsInfo() {
        const renderItem = ({ item, index }) => (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <View style={{ ...CommonStyles.rowAlignCenter }}>
                    <Image
                        source={item.image}
                        style={{ width: 40.0, height: 40.0, borderRadius: 20.0 }}
                    />
                    <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor15Medium }}>
                            {item.name}
                        </Text>
                        <View style={{ ...CommonStyles.rowAlignCenter, alignSelf: 'flex-start', marginTop: Sizes.fixPadding - 8.0 }}>
                            {
                                [1, 2, 3, 4, 5].map((no, index) => (
                                    <AntDesign
                                        key={`${index}`}
                                        name="star"
                                        size={13}
                                        color={item.rating >= no ? Colors.primaryColor : Colors.lightGrayColor}
                                        style={{ marginRight: Sizes.fixPadding - 8.0 }}
                                    />
                                ))
                            }
                        </View>
                    </View>
                    <Text style={{ ...Fonts.blackColor14Medium }}>
                        {item.reviewDate}
                    </Text>
                </View>
                <Text style={{ marginTop: Sizes.fixPadding - 2.0, ...Fonts.grayColor14Medium, textAlign: 'justify' }}>
                    {item.review}
                </Text>
                {
                    index == reviews.length - 1
                        ?
                        null
                        :
                        <View style={{ backgroundColor: Colors.lightGrayColor, height: 1.0, marginVertical: Sizes.fixPadding * 2.0 }} />
                }
            </View>
        )
        return (
            <View>
                <View style={{ ...CommonStyles.rowAlignCenter, marginBottom: Sizes.fixPadding + 5.0, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor16SemiBold, flex: 1, marginRight: Sizes.fixPadding }}>
                        Top review
                    </Text>
                    <Text onPress={() => { navigation.push('Reviews') }} style={{ ...Fonts.primaryColor12SemiBold }}>
                        View all
                    </Text>
                </View>
                <FlatList
                    data={reviews}
                    renderItem={renderItem}
                    scrollEnabled={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}
                />
            </View>
        )
    }

    function descriptionInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor16SemiBold, marginBottom: Sizes.fixPadding - 2.0 }}>
                    Description
                </Text>
                <Text numberOfLines={readMore ? null : 6} style={{ ...Fonts.grayColor14Medium }}>
                    Lorem ipsum dolor sit amet consectetur. Non nulla cursus congue vel sem bibendum. Egestas in amet ac duis tortor ornare lorem in. Quis consectetur pretium amet nulla praesent. Elementum gravida tempus habitasse nunc. Sit gravida tincidunt eget vitae in at
                    Lorem ipsum dolor sit amet consectetur. Non nulla cursus congue vel sem bibendum. Egestas in amet ac duis tortor ornare lorem in. Quis consectetur pretium amet nulla praesent. Elementum gravida tempus habitasse nunc. Sit gravida tincidunt eget vitae in at
                </Text>
                <Text
                    onPress={() => { setReadMore(!readMore) }}
                    style={{ textAlign: 'right', ...Fonts.primaryColor14Medium, alignSelf: 'flex-end' }}
                >
                    {readMore ? 'Show less' : 'Read more'}
                </Text>
            </View>
        )
    }

    function divider() {
        return (
            <View style={styles.horizontalDevider} />
        )
    }

    function bookDetailInfo() {
        return (
            <View style={{ ...CommonStyles.rowAlignCenter, marginTop: Sizes.fixPadding * 2.5, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <View style={{ ...CommonStyles.center, flex: 0.6 }}>
                    <Text numberOfLines={1} style={{ ...Fonts.grayColor14Medium }}>
                        Rating
                    </Text>
                    <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding - 8.0, ...Fonts.blackColor15Medium }}>
                        4.5
                    </Text>
                </View>
                <View style={styles.verticalDivider} />
                <View style={{ ...CommonStyles.center, flex: 1 }}>
                    <Text numberOfLines={1} style={{ ...Fonts.grayColor14Medium }}>
                        Language
                    </Text>
                    <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding - 8.0, ...Fonts.blackColor15Medium }}>
                        English
                    </Text>
                </View>
                <View style={styles.verticalDivider} />
                <View style={{ ...CommonStyles.center, flex: 1 }}>
                    <Text numberOfLines={1} style={{ ...Fonts.grayColor14Medium }}>
                        Audio
                    </Text>
                    <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding - 8.0, ...Fonts.blackColor15Medium }}>
                        03 hr
                    </Text>
                </View>
                <View style={styles.verticalDivider} />
                <View style={{ ...CommonStyles.center, flex: 0.6 }}>
                    <Text numberOfLines={1} style={{ ...Fonts.grayColor14Medium }}>
                        Pages
                    </Text>
                    <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding - 8.0, ...Fonts.blackColor15Medium }}>
                        200
                    </Text>
                </View>
            </View>
        )
    }

    function bookImageWithName() {
        return (
            <View style={{ ...CommonStyles.center, marginTop: Sizes.fixPadding - 5.0 }}>
                <View style={styles.bookImageWrapper}>
                    <Image
                        source={require('../../assets/images/books/book13.png')}
                        style={{ width: '100%', height: '100%', borderRadius: Sizes.fixPadding }}
                    />
                </View>
                <View style={{ marginTop: Sizes.fixPadding + 5.0 }}>
                    <Text style={{ ...Fonts.primaryColor15SemiBold }}>
                        One Indian Girl
                    </Text>
                    <Text style={{ ...Fonts.grayColor12Medium, marginTop: Sizes.fixPadding - 8.0 }}>
                        By Chetan Bhagat
                    </Text>
                </View>
            </View>
        )
    }

    function snackBarInfo() {
        return (
            <Snackbar
                visible={showSnackBar}
                onDismiss={() => setShowSnackBar(false)}
                style={{ backgroundColor: Colors.blackColor }}
            >
                <Text style={{ ...Fonts.whiteColor14Medium }}>
                    {inSaved ? 'Added to saved' : 'Removed from saved'}
                </Text>
            </Snackbar>
        )
    }

    function header() {
        return (
            <View style={{ ...CommonStyles.rowAlignCenter, justifyContent: 'space-between', margin: Sizes.fixPadding * 2.0 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.pop() }}
                    style={styles.backArrowButton}
                >
                    <MaterialIcons name="arrow-back" size={20} color={Colors.blackColor} />
                </TouchableOpacity>
                <View style={{ ...CommonStyles.rowAlignCenter }}>
                    <MaterialIcons name="download" size={22} color={Colors.primaryColor} />
                    <MaterialIcons name="share" size={20} color={Colors.primaryColor} style={{ marginHorizontal: Sizes.fixPadding }} />
                    <MaterialIcons
                        name={inSaved ? "bookmark" : "bookmark-outline"}
                        size={20}
                        color={Colors.primaryColor}
                        onPress={() => { setInSaved(!inSaved); setShowSnackBar(true) }}
                    />
                </View>
            </View>
        )
    }
}

export default BookDetailScreen

const styles = StyleSheet.create({
    backArrowButton: {
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        width: 30.0,
        height: 30.0,
        borderRadius: Sizes.fixPadding - 5.0,
        ...CommonStyles.center
    },
    bookImageWrapper: {
        width: 132.0,
        height: 143.0,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        shadowOpacity: 0.5,
        borderRadius: Sizes.fixPadding,
    },
    verticalDivider: {
        backgroundColor: Colors.grayColor,
        height: 40.0,
        width: 1.0,
        marginHorizontal: Sizes.fixPadding
    },
    horizontalDevider: {
        backgroundColor: Colors.lightGrayColor,
        height: 1.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding * 2.5
    },
    bottomButtonStyle: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding,
        ...CommonStyles.center,
        padding: Sizes.fixPadding,
    }
})