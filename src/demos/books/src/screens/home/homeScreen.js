import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { CommonStyles, Sizes, Fonts, Colors, screenWidth } from '../../constants/styles';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Snackbar } from 'react-native-paper';

const topAuthorsList = [
  {
    id: '1',
    image: require('../../assets/images/users/user7.png'),
    name: 'Rhonda Byrne’s',
  },
  {
    id: '2',
    image: require('../../assets/images/users/user2.png'),
    name: 'Shelley harris',
  },
  {
    id: '3',
    image: require('../../assets/images/users/user3.png'),
    name: 'Rhonda Byrne’s',
  },
  {
    id: '4',
    image: require('../../assets/images/users/user4.png'),
    name: 'Rhonda Byrne’s',
  },
  {
    id: '5',
    image: require('../../assets/images/users/user5.png'),
    name: 'Chetan Bhagat',
  },
  {
    id: '6',
    image: require('../../assets/images/users/user6.png'),
    name: 'Alice Munro',
  },
];

const trendingBooksList = [
  {
    id: '1',
    image: require('../../assets/images/books/book1.png'),
    name: 'The king of drugs',
    authorName: 'Nora Barrett',
    rating: '3.5',
    reviews: 120,
  },
  {
    id: '2',
    image: require('../../assets/images/books/book2.png'),
    name: 'Feeling is the sec..',
    authorName: 'Neville Goddard',
    rating: '3.5',
    reviews: 120,
  },
  {
    id: '3',
    image: require('../../assets/images/books/book3.png'),
    name: 'Rich dad poor dad',
    authorName: 'Robert T.Kiyosaki',
    rating: '3.5',
    reviews: 120,
  },
  {
    id: '4',
    image: require('../../assets/images/books/book4.png'),
    name: 'The arrivals',
    authorName: 'Lucas Lloyd',
    rating: '3.5',
    reviews: 120,
  },
  {
    id: '5',
    image: require('../../assets/images/books/book5.png'),
    name: 'How to be fine',
    authorName: 'Jolenta Greenberg',
    rating: '3.5',
    reviews: 120,
  },
];

const recommendedBookList = [
  {
    id: '1',
    image: require('../../assets/images/books/book6.png'),
    name: 'Feeling is the sec..',
    authorName: 'Robert T.kiyosaki',
    rating: '3.5',
    reviews: 120,
  },
  {
    id: '2',
    image: require('../../assets/images/books/book7.png'),
    name: 'Paradise House',
    authorName: 'Erica James',
    rating: '3.5',
    reviews: 120,
  },
  {
    id: '3',
    image: require('../../assets/images/books/book8.png'),
    name: 'Becoming michelle',
    authorName: 'Michelle Obama',
    rating: '3.5',
    reviews: 120,
  },
  {
    id: '4',
    image: require('../../assets/images/books/book3.png'),
    name: 'Rich dad poor dad',
    authorName: 'Robert T.Kiyosaki',
    rating: '3.5',
    reviews: 120,
  },
  {
    id: '5',
    image: require('../../assets/images/books/book2.png'),
    name: 'Feeling is the sec..',
    authorName: 'Neville Goddard',
    rating: '3.5',
    reviews: 120,
  },
];

const recentReadingList = [
  {
    id: '1',
    image: require('../../assets/images/books/book3.png'),
    name: 'Rich dad poor dad',
    authorName: 'Robert T.Kiyosaki',
    rating: 3.5,
    reviews: 120,
    inBookMark: false,
  },
  {
    id: '2',
    image: require('../../assets/images/books/book2.png'),
    name: 'Rich dad poor dad',
    authorName: 'Neville Goddard',
    rating: 3.5,
    reviews: 120,
    inBookMark: false,
  },
  {
    id: '3',
    image: require('../../assets/images/books/book9.png'),
    name: 'Scary house',
    authorName: 'Jolanta Greenberg',
    rating: 3.5,
    reviews: 120,
    inBookMark: false,
  },
];

const paidBooksList = [
  {
    id: '1',
    image: require('../../assets/images/books/book10.png'),
    name: 'Wings of fire',
    authorName: 'A P J Abdul Kalam',
    rating: '3.5',
    reviews: 120,
  },
  {
    id: '2',
    image: require('../../assets/images/books/book11.png'),
    name: 'Unless',
    authorName: 'Erica James',
    rating: '3.5',
    reviews: 120,
  },
  {
    id: '3',
    image: require('../../assets/images/books/book12.png'),
    name: 'Gold',
    authorName: 'Chris Cleave',
    rating: '3.5',
    reviews: 120,
  },
  {
    id: '4',
    image: require('../../assets/images/books/book8.png'),
    name: 'Becoming michelle',
    authorName: 'Michelle Obama',
    rating: '3.5',
    reviews: 120,
  },
  {
    id: '5',
    image: require('../../assets/images/books/book2.png'),
    name: 'Feeling is the sec..',
    authorName: 'Robert T.kiyosaki',
    rating: '3.5',
    reviews: 120,
  },
];

const HomeScreen = ({ navigation }) => {

  const [recentReading, setRecentReading] = useState(recentReadingList);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      {header()}
      {searchField()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {topAuthorsInfo()}
        {trendingBooksInfo()}
        {recommendedBookInfo()}
        {recentReadingInfo()}
        {paidBooksInfo()}
      </ScrollView>
      {snackBarInfo()}
    </View>
  )

  function paidBooksInfo() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => { navigation.push('Premium') }}
        style={styles.bookInfoBox}
      >
        <View style={styles.bookImageWrapper}>
          <Image
            source={item.image}
            style={{ width: '100%', height: '100%', borderRadius: Sizes.fixPadding - 5.0 }}
          />
          <View style={styles.premiumButtonStyle}>
            <Text style={{ ...Fonts.whiteColor14Medium }}>
              Premium
            </Text>
          </View>
        </View>
        <View style={{ margin: Sizes.fixPadding, alignItems: 'flex-start' }}>
          <Text numberOfLines={1} style={{ ...Fonts.blackColor15Medium }}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={{ ...Fonts.grayColor12Medium, marginTop: Sizes.fixPadding - 8.0 }}>
            By {item.authorName}
          </Text>
          <View style={{ ...CommonStyles.rowAlignCenter, marginTop: Sizes.fixPadding - 7.0 }}>
            <AntDesign name="star" size={14} color={Colors.primaryColor} />
            <Text numberOfLines={1} style={{ ...Fonts.blackColor14Regular }}>
              { } {item.rating} ({item.reviews})
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
    return (
      <View style={{ marginBottom: Sizes.fixPadding }}>
        <View style={{ ...CommonStyles.rowAlignCenter, marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding + 2.0 }}>
          <Text numberOfLines={1} style={{ ...Fonts.blackColor16SemiBold, flex: 1, marginRight: Sizes.fixPadding }}>
            Paid book
          </Text>
          <Text onPress={() => { navigation.push('AllBooks', { type: 'premium' }) }} style={{ ...Fonts.primaryColor12Medium }}>
            View all
          </Text>
        </View>
        <FlatList
          data={paidBooksList}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding }}
        />
      </View>
    )
  }

  function snackBarInfo() {
    return (
      <Snackbar
        visible={showSnackBar}
        onDismiss={() => setShowSnackBar(false)}
        style={{ position: 'absolute', bottom: -10.0, left: -10.0, right: -10.0 }}
      >
        <Text style={{ ...Fonts.whiteColor14Medium }}>
          {snackBarMsg}
        </Text>
      </Snackbar>
    )
  }

  function updateRecentReading({ id }) {
    const newReading = recentReading.map((item) => {
      if (item.id == id) {
        setSnackBarMsg(item.inBookMark ? 'Removed from saved' : 'Added in saved')
        return { ...item, inBookMark: !item.inBookMark }
      }
      else {
        return item;
      }
    })
    setRecentReading(newReading);
  }

  function recentReadingInfo() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => { navigation.push('BookDetail') }}
        style={styles.recentReadingInfoWrapper}
      >
        <Image
          source={item.image}
          style={{ width: 66.0, height: 87.0, borderRadius: Sizes.fixPadding - 5.0 }}
        />
        <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding + 2.0, }}>
          <Text numberOfLines={1} style={{ ...Fonts.blackColor15Medium }}>
            {item.name}
          </Text>
          <Text style={{ ...Fonts.grayColor13Medium, marginVertical: Sizes.fixPadding - 5.0 }}>
            By {item.authorName}
          </Text>
          <View style={{ ...CommonStyles.rowAlignCenter, marginTop: Sizes.fixPadding - 7.0, alignSelf: 'flex-start' }}>
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
          onPress={() => { updateRecentReading({ id: item.id }); setShowSnackBar(true) }}
        />
      </TouchableOpacity>
    )
    return (
      <View style={{ marginVertical: Sizes.fixPadding }}>
        <View style={{ ...CommonStyles.rowAlignCenter, marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding + 2.0 }}>
          <Text numberOfLines={1} style={{ ...Fonts.blackColor16SemiBold, flex: 1, marginRight: Sizes.fixPadding }}>
            Recent reading
          </Text>
          <Text onPress={() => { navigation.push('AllBooks', { type: 'available' }) }} style={{ ...Fonts.primaryColor12Medium }}>
            View all
          </Text>
        </View>
        <FlatList
          data={recentReading}
          renderItem={renderItem}
          scrollEnabled={false}
          contentContainerStyle={{ paddingTop: Sizes.fixPadding - 5.0 }}
        />
      </View>
    )
  }

  function recommendedBookInfo() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => { navigation.push('BookDetail') }}
        style={styles.bookInfoBox}
      >
        <View style={styles.bookImageWrapper}>
          <Image
            source={item.image}
            style={{ width: '100%', height: '100%', borderRadius: Sizes.fixPadding - 5.0 }}
          />
        </View>
        <View style={{ margin: Sizes.fixPadding, alignItems: 'flex-start' }}>
          <Text numberOfLines={1} style={{ ...Fonts.blackColor15Medium }}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={{ ...Fonts.grayColor12Medium, marginTop: Sizes.fixPadding - 8.0 }}>
            By {item.authorName}
          </Text>
          <View style={{ ...CommonStyles.rowAlignCenter, marginTop: Sizes.fixPadding - 7.0 }}>
            <AntDesign name="star" size={14} color={Colors.primaryColor} />
            <Text numberOfLines={1} style={{ ...Fonts.blackColor14Regular }}>
              { } {item.rating} ({item.reviews})
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
    return (
      <View style={{ marginVertical: Sizes.fixPadding }}>
        <View style={{ ...CommonStyles.rowAlignCenter, marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding + 2.0 }}>
          <Text numberOfLines={1} style={{ ...Fonts.blackColor16SemiBold, flex: 1, marginRight: Sizes.fixPadding }}>
            Recommended Books
          </Text>
          <Text onPress={() => { navigation.push('AllBooks', { type: 'available' }) }} style={{ ...Fonts.primaryColor12Medium }}>
            View all
          </Text>
        </View>
        <FlatList
          data={recommendedBookList}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding }}
        />
      </View>
    )
  }

  function trendingBooksInfo() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => { navigation.push('BookDetail') }}
        style={styles.bookInfoBox}
      >
        <View style={styles.bookImageWrapper}>
          <Image
            source={item.image}
            style={{ width: '100%', height: '100%', borderRadius: Sizes.fixPadding - 5.0 }}
          />
        </View>
        <View style={{ margin: Sizes.fixPadding, alignItems: 'flex-start' }}>
          <Text numberOfLines={1} style={{ ...Fonts.blackColor15Medium }}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={{ ...Fonts.grayColor12Medium, marginTop: Sizes.fixPadding - 8.0 }}>
            By {item.authorName}
          </Text>
          <View style={{ ...CommonStyles.rowAlignCenter, marginTop: Sizes.fixPadding - 7.0 }}>
            <AntDesign name="star" size={14} color={Colors.primaryColor} />
            <Text numberOfLines={1} style={{ ...Fonts.blackColor14Regular }}>
              { } {item.rating} ({item.reviews})
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
    return (
      <View style={{ marginVertical: Sizes.fixPadding }}>
        <View style={{ ...CommonStyles.rowAlignCenter, marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding + 2.0 }}>
          <Text numberOfLines={1} style={{ ...Fonts.blackColor16SemiBold, flex: 1, marginRight: Sizes.fixPadding }}>
            Trending Books
          </Text>
          <Text onPress={() => { navigation.push('AllBooks', { type: 'available' }) }} style={{ ...Fonts.primaryColor12Medium }}>
            View all
          </Text>
        </View>
        <FlatList
          data={trendingBooksList}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding }}
        />
      </View>
    )
  }

  function topAuthorsInfo() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => { navigation.push('AuthorDetail') }}
        style={{ ...CommonStyles.center, marginHorizontal: Sizes.fixPadding, maxWidth: 100.0, }}
      >
        <View style={styles.authorImageCircle}>
          <Image
            source={item.image}
            style={{ width: 60.0, height: 60.0, borderRadius: 30.0 }}
          />
        </View>
        <Text numberOfLines={1} style={{ ...Fonts.blackColor13Regular, marginTop: Sizes.fixPadding - 3.0 }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    )
    return (
      <View style={{ marginVertical: Sizes.fixPadding * 2.0 }}>
        <View style={{ ...CommonStyles.rowAlignCenter, marginHorizontal: Sizes.fixPadding * 2.0 }}>
          <Text numberOfLines={1} style={{ ...Fonts.blackColor16SemiBold, flex: 1, marginRight: Sizes.fixPadding }}>
            Top authors
          </Text>
          <Text onPress={() => { navigation.push('TopAuthors') }} style={{ ...Fonts.primaryColor12Medium }}>
            View all
          </Text>
        </View>
        <FlatList
          data={topAuthorsList}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding, marginTop: Sizes.fixPadding + 5.0 }}
        />
      </View>
    )
  }

  function searchField() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => { navigation.push('Search') }}
        style={styles.searchFieldWrapStyle}
      >
        <Feather name="search" size={18} color={Colors.grayColor} />
        <Text style={{ ...Fonts.grayColor14Medium, flex: 1, marginLeft: Sizes.fixPadding - 3.0 }}>
          Search
        </Text>
      </TouchableOpacity>
    )
  }

  function header() {
    return (
      <View style={{ ...CommonStyles.rowAlignCenter, marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding + 5.0 }}>
        <Image
          source={require('../../assets/images/users/user1.png')}
          style={{ width: 41.0, height: 41.0, borderRadius: 20.5 }}
        />
        <Text style={{ ...Fonts.blackColor16SemiBold, flex: 1, marginHorizontal: Sizes.fixPadding }}>
          Bessie Cooper
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => { navigation.push('Notification') }}
          style={styles.notificationButton}
        >
          <Feather name="bell" size={20} color={Colors.primaryColor} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  notificationButton: {
    width: 34.0,
    height: 34.0,
    borderRadius: Sizes.fixPadding - 5.0,
    backgroundColor: Colors.whiteColor,
    ...CommonStyles.center,
  },
  searchFieldWrapStyle: {
    backgroundColor: Colors.whiteColor,
    padding: Sizes.fixPadding + 3.0,
    ...CommonStyles.rowAlignCenter,
    borderRadius: Sizes.fixPadding - 5.0,
    ...CommonStyles.shadow,
    marginHorizontal: Sizes.fixPadding * 2.0
  },
  authorImageCircle: {
    width: 70.0,
    height: 70.0,
    borderRadius: 35.0,
    borderColor: Colors.primaryColor,
    borderWidth: 1.0,
    ...CommonStyles.center
  },
  bookImageWrapper: {
    width: '72%',
    height: 145.0,
    alignSelf: 'center',
    marginTop: -Sizes.fixPadding * 5.0,
    backgroundColor: Colors.whiteColor,
    ...CommonStyles.shadow,
    shadowOpacity: 0.3,
    borderRadius: Sizes.fixPadding - 5.0,
  },
  bookInfoBox: {
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding,
    width: screenWidth / 2.5,
    marginHorizontal: Sizes.fixPadding,
    ...CommonStyles.shadow,
    marginBottom: Sizes.fixPadding,
    marginTop: Sizes.fixPadding * 5.5,
  },
  recentReadingInfoWrapper: {
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding,
    padding: Sizes.fixPadding,
    ...CommonStyles.rowAlignCenter,
    ...CommonStyles.shadow,
    marginBottom: Sizes.fixPadding * 2.0,
    marginHorizontal: Sizes.fixPadding * 2.0
  },
  premiumButtonStyle: {
    backgroundColor: Colors.greenColor,
    position: 'absolute',
    left: 0,
    bottom: 0,
    paddingHorizontal: Sizes.fixPadding - 2.0,
    paddingVertical: Sizes.fixPadding - 8.0,
    borderBottomLeftRadius: Sizes.fixPadding - 5.0
  }
})