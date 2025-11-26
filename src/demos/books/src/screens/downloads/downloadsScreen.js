import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors, CommonStyles, Fonts, Sizes } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import { Header } from '../../components/header';
import { SwipeListView } from 'react-native-swipe-list-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Snackbar } from 'react-native-paper';

const booksList = [
    {
        key: '1',
        image: require('../../assets/images/books/book2.png'),
        name: 'Feeling is the secret',
        authorName: 'Neville Goddard',
        rating: 3.5,
        reviews: 120,
        inBookmark: false,
    },
    {
        key: '2',
        image: require('../../assets/images/books/book15.png'),
        name: 'India positive',
        authorName: 'Chetan Bhagat',
        rating: 3.5,
        reviews: 120,
        inBookmark: false,
    },
    {
        key: '3',
        image: require('../../assets/images/books/book13.png'),
        name: 'One indian girl',
        authorName: 'Chetan Bhagat',
        rating: 3.5,
        reviews: 120,
        inBookmark: true,
    },
    {
        key: '4',
        image: require('../../assets/images/books/book10.png'),
        name: 'Wings of fire',
        authorName: 'A P J Abdul Kalam',
        rating: 3.5,
        reviews: 120,
        inBookmark: true,
    },
    {
        key: '5',
        image: require('../../assets/images/books/book6.png'),
        name: 'The lord of the rings',
        authorName: 'J.R.R Tolkien',
        rating: 3.5,
        reviews: 120,
        inBookmark: true,
    },
];

const DownloadsScreen = ({ navigation }) => {

    const [showSnackBar, setShowSnackBar] = useState(false);
    const [bookData, setBookData] = useState(booksList);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header='Downloaded book' />
                {
                    bookData.length == 0
                        ?
                        noDataInfo()
                        :
                        booksInfo()
                }
            </View>
            {snackBarInfo()}
        </View>
    )

    function snackBarInfo() {
        return (
            <Snackbar
                style={{ backgroundColor: Colors.blackColor }}
                elevation={0}
                visible={showSnackBar}
                duration={1000}
                onDismiss={() => setShowSnackBar(false)}
            >
                <Text style={{ ...Fonts.whiteColor14Medium }}>
                    Removed from saved
                </Text>
            </Snackbar>
        );
    }

    function booksInfo() {

        const closeRow = (rowMap, rowKey) => {
            if (rowMap[rowKey]) {
                rowMap[rowKey].closeRow();
            }
        };

        const renderHiddenItem = (data, rowMap) => (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ ...styles.backDeleteContinerStyle }}
                    onPress={() => deleteRow(rowMap, data.item.key)}
                >
                    <Ionicons name='trash' color={Colors.whiteColor} size={22} />
                </TouchableOpacity>
            </View>
        );

        const deleteRow = (rowMap, rowKey) => {
            closeRow(rowMap, rowKey);
            const newData = [...bookData];
            const prevIndex = bookData.findIndex((item) => item.key === rowKey);
            newData.splice(prevIndex, 1);
            setShowSnackBar(true);
            setBookData(newData);
        };

        const renderItem = (data) => (
            <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.push('BookDetail') }}
                    style={styles.bookWrapper}
                >
                    <View style={{ overflow: 'hidden', width: 66.0, borderRadius: Sizes.fixPadding - 5.0 }}>
                        <Image
                            source={data.item.image}
                            style={{ width: 66.0, height: 87.0, borderRadius: Sizes.fixPadding - 5.0, }}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 2.0 }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor15Medium }}>
                            {data.item.name}
                        </Text>
                        <Text numberOfLines={1} style={{ ...Fonts.grayColor13Medium, marginVertical: Sizes.fixPadding - 5.0 }}>
                            By {data.item.authorName}
                        </Text>
                        <View style={{ ...CommonStyles.rowAlignCenter, alignSelf: 'flex-start' }}>
                            <AntDesign name="star" size={14} color={Colors.primaryColor} />
                            <Text numberOfLines={1} style={{ ...Fonts.blackColor14Regular }}>
                                { } {data.item.rating} ({data.item.reviews})
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );

        return (
            <View style={{ flex: 1 }}>
                <SwipeListView
                    data={bookData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-45}
                    useNativeDriver={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingTop: Sizes.fixPadding - 7.0 }}
                />
            </View>
        )
    }

    function noDataInfo() {
        return (
            <View style={{ flex: 1, ...CommonStyles.center }}>
                <MaterialIcons name="file-download-off" size={35} color={Colors.grayColor} />
                <Text style={{ ...Fonts.grayColor15Medium, marginTop: Sizes.fixPadding - 5.0 }}>
                    Empty download list
                </Text>
            </View>
        )
    }

}

export default DownloadsScreen;

const styles = StyleSheet.create({
    backDeleteContinerStyle: {
        ...CommonStyles.center,
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        width: 45,
        backgroundColor: Colors.redColor,
        marginBottom: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding,
    },
    bookWrapper: {
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.0,
        ...CommonStyles.rowAlignCenter
    },
})