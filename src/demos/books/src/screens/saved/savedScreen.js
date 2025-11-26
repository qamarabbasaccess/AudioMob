import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Colors, CommonStyles, Fonts, Sizes, } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import { SwipeListView } from "react-native-swipe-list-view";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
];

const authorsList = [
  {
    key: '1',
    image: require('../../assets/images/users/user5.png'),
    name: 'Chetan Bhagat',
    books: 200,
  },
  {
    key: '2',
    image: require('../../assets/images/users/user2.png'),
    name: 'Shelley harris',
    books: 120,
  },
];

const SavedScreen = ({ navigation }) => {

  const [showSnackBar, setShowSnackBar] = useState(false);
  const [bookData, setBookData] = useState(booksList);
  const [authorsData, setAuthorsData] = useState(authorsList);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <MyStatusBar />
      <View style={{ flex: 1 }}>
        {header()}
        {
          bookData.length == 0 && authorsData.length == 0
            ?
            noDataInfo()
            :
            <ScrollView showsVerticalScrollIndicator={false}>
              {bookData.length == 0 ? null : booksInfo()}
              {authorsData.length == 0 ? null : authorsInfo()}
            </ScrollView>
        }
      </View>
      {snackBarInfo()}
    </View>
  )

  function noDataInfo() {
    return (
      <View style={{ flex: 1, ...CommonStyles.center }}>
        <Image
          source={require('../../assets/images/icons/noSaved.png')}
          style={{ width: 81.0, height: 81.0, resizeMode: 'contain' }}
        />
        <Text style={{ ...Fonts.grayColor15Medium, marginTop: Sizes.fixPadding - 5.0 }}>
          Nothing to add here
        </Text>
      </View>
    )
  }

  function snackBarInfo() {
    return (
      <Snackbar
        style={styles.snackBarStyle}
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

  function authorsInfo() {

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
      const newData = [...authorsData];
      const prevIndex = authorsData.findIndex((item) => item.key === rowKey);
      newData.splice(prevIndex, 1);
      setShowSnackBar(true);
      setAuthorsData(newData);
    };

    const renderItem = (data) => (
      <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => { navigation.push('AuthorDetail') }}
          style={styles.authorWrapper}
        >
          <Image
            source={data.item.image}
            style={{ width: 60.0, height: 60.0, borderRadius: 30.0, }}
          />
          <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 2.0 }}>
            <Text style={{ ...Fonts.blackColor15Medium }}>
              {data.item.name}
            </Text>
            <Text style={{ ...Fonts.grayColor13Medium, marginTop: Sizes.fixPadding - 8.0, }}>
              {data.item.books} Books
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );

    return (
      <View>
        <Text style={{ ...Fonts.grayColor16SemiBold, marginHorizontal: Sizes.fixPadding * 2.0, }}>
          Authors
        </Text>
        <SwipeListView
          data={authorsData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-45}
          useNativeDriver={false}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          contentContainerStyle={{ paddingTop: Sizes.fixPadding }}
        />
      </View>
    )
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
      <View>
        <Text style={{ marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.grayColor16SemiBold }}>
          Books
        </Text>
        <SwipeListView
          data={bookData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-45}
          useNativeDriver={false}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          contentContainerStyle={{ paddingTop: Sizes.fixPadding }}
        />
      </View>
    )
  }

  function header() {
    return (
      <View style={{ ...CommonStyles.center }}>
        <Text style={{ ...Fonts.blackColor18SemiBold, margin: Sizes.fixPadding * 2.0 }}>
          Saved
        </Text>
      </View>
    )
  }
}

export default SavedScreen

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
  snackBarStyle: {
    backgroundColor: Colors.blackColor,
    position: 'absolute',
    bottom: -10.0,
    left: -10.0,
    right: -10.0,
  },
  authorWrapper: {
    backgroundColor: Colors.whiteColor,
    ...CommonStyles.shadow,
    borderRadius: Sizes.fixPadding,
    padding: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginBottom: Sizes.fixPadding * 2.0,
    ...CommonStyles.rowAlignCenter
  }
})