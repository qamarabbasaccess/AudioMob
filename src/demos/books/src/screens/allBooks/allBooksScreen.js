import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import MyStatusBar from '../../components/myStatusBar';
import { Colors, CommonStyles, Sizes, Fonts } from '../../constants/styles';
import { Header } from '../../components/header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Snackbar } from 'react-native-paper';

const premiumBooksList = [
    {
        id: '1',
        image: require('../../assets/images/books/book10.png'),
        name: 'Scary house',
        authorName: 'A P J Abdul Kalam',
        rating: 3.5,
        reviews: 120,
        inBookmark: false,
    },
    {
        id: '2',
        image: require('../../assets/images/books/book6.png'),
        name: 'The lord of the rings',
        authorName: 'J.R.R Tolkien',
        rating: 3.5,
        reviews: 120,
        inBookmark: false,
    },
    {
        id: '3',
        image: require('../../assets/images/books/book13.png'),
        name: 'One indian girl',
        authorName: 'Chetan Bhagat',
        rating: 3.5,
        reviews: 120,
        inBookmark: true,
    },
    {
        id: '4',
        image: require('../../assets/images/books/book14.png'),
        name: 'I too had a love story',
        authorName: 'Ravinder Singh',
        rating: 3.5,
        reviews: 120,
        inBookmark: false,
    },
    {
        id: '5',
        image: require('../../assets/images/books/book3.png'),
        name: 'Rich dad poor dad',
        authorName: 'Robert T. Kiyosaki',
        rating: 3.5,
        reviews: 120,
        inBookmark: false,
    },
    {
        id: '6',
        image: require('../../assets/images/books/book2.png'),
        name: 'Feeling is the secret',
        authorName: 'Neville Goddard',
        rating: 3.5,
        reviews: 120,
        inBookmark: false,
    },
    {
        id: '7',
        image: require('../../assets/images/books/book15.png'),
        name: 'India positive',
        authorName: 'Chetan Bhagat',
        rating: 3.5,
        reviews: 120,
        inBookmark: false,
    },
    {
        id: '8',
        image: require('../../assets/images/books/book9.png'),
        name: 'Scary house',
        authorName: 'Jolanta Greenberg',
        rating: 3.5,
        reviews: 120,
        inBookmark: false,
    },
];

const availableBooksList = [
    {
        id: '1',
        image: require('../../assets/images/books/book13.png'),
        name: 'One indian girl',
        authorName: 'Chetan Bhagat',
        rating: 3.5,
        reviews: 120,
        inBookmark: true,
    },
    {
        id: '2',
        image: require('../../assets/images/books/book2.png'),
        name: 'Feeling is the secret',
        authorName: 'Neville Goddard',
        rating: 3.5,
        reviews: 120,
        inBookmark: false,
    },
    {
        id: '3',
        image: require('../../assets/images/books/book15.png'),
        name: 'India positive',
        authorName: 'Chetan Bhagat',
        rating: 3.5,
        reviews: 120,
        inBookmark: false,
    },
    {
        id: '4',
        image: require('../../assets/images/books/book10.png'),
        name: 'Scary house',
        authorName: 'A P J Abdul Kalam',
        rating: 3.5,
        reviews: 120,
        inBookmark: false,
    },
    {
        id: '5',
        image: require('../../assets/images/books/book6.png'),
        name: 'The lord of the rings',
        authorName: 'J.R.R Tolkien',
        rating: 3.5,
        reviews: 120,
        inBookmark: false,
    },
    {
        id: '6',
        image: require('../../assets/images/books/book14.png'),
        name: 'I too had a love story',
        authorName: 'Ravinder Singh',
        rating: 3.5,
        reviews: 120,
        inBookmark: false,
    },
    {
        id: '7',
        image: require('../../assets/images/books/book3.png'),
        name: 'Rich dad poor dad',
        authorName: 'Robert T. Kiyosaki',
        rating: 3.5,
        reviews: 120,
        inBookmark: false,
    },
    {
        id: '8',
        image: require('../../assets/images/books/book9.png'),
        name: 'Scary house',
        authorName: 'Jolanta Greenberg',
        rating: 3.5,
        reviews: 120,
        inBookmark: false,
    },
];

const AllBooksScreen = ({ navigation, route }) => {

    const type = route.params.type;

    const [books, setBooks] = useState(type == 'premium' ? premiumBooksList : availableBooksList);
    const [showSnackBar, setShowSnackBar] = useState(false);
    const [snackBarMsg, setSnackBarMsg] = useState('');

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header='Trending books' />
                {booksInfo()}
            </View>
            {snackBarInfo()}
        </View>
    )

    function snackBarInfo() {
        return (
            <Snackbar
                visible={showSnackBar}
                onDismiss={() => setShowSnackBar(false)}
                style={{ backgroundColor: Colors.blackColor }}
            >
                <Text style={{ ...Fonts.whiteColor14Medium }}>
                    {snackBarMsg}
                </Text>
            </Snackbar>
        )
    }

    function updateBooks({ id }) {
        const newBooks = books.map((item) => {
            if (item.id == id) {
                setSnackBarMsg(item.inBookMark ? 'Removed from saved' : 'Added in saved')
                return { ...item, inBookMark: !item.inBookMark }
            }
            else {
                return item;
            }
        })
        setBooks(newBooks);
    }

    function booksInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { type == 'premium' ? navigation.push('Premium') : navigation.push('BookDetail') }}
                style={styles.bookWrapper}
            >
                <View style={{ overflow: 'hidden', width: 66.0, borderRadius: Sizes.fixPadding - 5.0 }}>
                    <Image
                        source={item.image}
                        style={{ width: 66.0, height: 87.0, borderRadius: Sizes.fixPadding - 5.0, }}
                    />
                    {
                        type == 'premium'
                            ?
                            <View style={styles.premiumButton}>
                                <Text numberOfLines={1} style={{ ...Fonts.whiteColor12Medium, textAlign: 'center' }}>
                                    Premium
                                </Text>
                            </View>
                            :
                            null
                    }
                </View>
                <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding + 2.0 }}>
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor15Medium }}>
                        {item.name}
                    </Text>
                    <Text numberOfLines={1} style={{ ...Fonts.grayColor13Medium, marginVertical: Sizes.fixPadding - 5.0 }}>
                        By {item.authorName}
                    </Text>
                    <View style={{ ...CommonStyles.rowAlignCenter, alignSelf: 'flex-start' }}>
                        <AntDesign name="star" size={14} color={Colors.primaryColor} />
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor14Regular }}>
                            { } {item.rating} ({item.reviews})
                        </Text>
                    </View>
                </View>
                <MaterialIcons
                    name={item.inBookMark ? "bookmark" : "bookmark-outline"}
                    size={24}
                    color={item.inBookMark ? Colors.primaryColor : Colors.grayColor}
                    onPress={() => { updateBooks({ id: item.id }); setShowSnackBar(true) }}
                />
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={books}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding }}
            />
        )
    }
}

export default AllBooksScreen;

const styles = StyleSheet.create({
    premiumButton: {
        backgroundColor: Colors.greenColor,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        paddingVertical: Sizes.fixPadding - 8.0,
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