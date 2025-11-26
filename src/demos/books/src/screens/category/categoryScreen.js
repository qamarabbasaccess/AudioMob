import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors, CommonStyles, Fonts, Sizes } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import LinearGradient from 'react-native-linear-gradient';

const categoriesList = [
  {
    id: '1',
    category: 'Horror',
    image: require('../../assets/images/categories/category1.png'),
    gradientColors: ['#000000', '#5691C8']
  },
  {
    id: '2',
    category: 'Fairytales',
    image: require('../../assets/images/categories/category2.png'),
    gradientColors: ['#000000', '#F15F79']
  },
  {
    id: '3',
    category: 'Poetry',
    image: require('../../assets/images/categories/category3.png'),
    gradientColors: ['#000000', '#52C3CA']
  },
  {
    id: '4',
    category: 'Crime',
    image: require('../../assets/images/categories/category4.png'),
    gradientColors: ['#000000', '#E3B358']
  },
  {
    id: '5',
    category: 'Suspense',
    image: require('../../assets/images/categories/category5.png'),
    gradientColors: ['#000000', '#5691C8']
  },
  {
    id: '6',
    category: 'Action',
    image: require('../../assets/images/categories/category6.png'),
    gradientColors: ['#000000', '#F15F79']
  },
  {
    id: '7',
    category: 'History',
    image: require('../../assets/images/categories/category7.png'),
    gradientColors: ['#000000', '#52C3CA']
  },
  {
    id: '8',
    category: 'Bussiness',
    image: require('../../assets/images/categories/category8.png'),
    gradientColors: ['#000000', '#E3B358']
  },
  {
    id: '9',
    category: 'Paid Book',
    image: require('../../assets/images/categories/category9.png'),
    gradientColors: ['#000000', '#5691C8']
  },
  {
    id: '10',
    category: 'Magic',
    image: require('../../assets/images/categories/category10.png'),
    gradientColors: ['#000000', '#F15F79']
  },
];

const CategoryScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <MyStatusBar />
      <View style={{ flex: 1 }}>
        {header()}
        {categoriesInfo()}
      </View>
    </View>
  )

  function categoriesInfo() {

    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => { navigation.push('AllBooks',{type:'available'}) }}
        style={{
          flex: 1,
          marginHorizontal: Sizes.fixPadding,
          marginBottom: Sizes.fixPadding * 2.5,
        }}
      >
        <Image
          source={item.image}
          style={styles.categoryImageStyle}
        />
        <LinearGradient colors={item.gradientColors} style={styles.categoryImageOverlay} />
        <Text numberOfLines={2} style={styles.categoryTextStyle}>
          {item.category}
        </Text>
      </TouchableOpacity>
    )

    return (
      <FlatList
        data={categoriesList}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding, }}
      />
    )
  }

  function header() {
    return (
      <View style={{ ...CommonStyles.center }}>
        <Text style={{ ...Fonts.blackColor18SemiBold, margin: Sizes.fixPadding * 2.0 }}>
          Categories
        </Text>
      </View>
    )
  }
}

export default CategoryScreen;

const styles = StyleSheet.create({
  categoryImageOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.7,
    borderRadius: Sizes.fixPadding,
  },
  categoryTextStyle: {
    ...Fonts.whiteColor16SemiBold,
    position: 'absolute',
    top: 10.0,
    left: 10.0,
    right: 10.0
  },
  categoryImageStyle: {
    width: '100%',
    height: 100.0,
    borderRadius: Sizes.fixPadding,
    opacity: 0.8
  }
})