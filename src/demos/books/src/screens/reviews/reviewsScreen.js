import {  Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import { Colors, CommonStyles, Fonts, Sizes } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import { Header } from '../../components/header';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
    {
        id: '4',
        image: require('../../assets/images/users/user17.png'),
        name: 'Jenny Wilson',
        reviewDate: '29 Nov 2023',
        review: 'Lorem ipsum dolor sit amet consectetur. Non cursus congue vel sem bibendum. Egestas in amet ac duis tortor ornare lorem in. Quis consectetur pretium',
        rating: 5,
    },
    {
        id: '5',
        image: require('../../assets/images/users/user18.png'),
        name: 'Kristin Watson',
        reviewDate: '29 Nov 2023',
        review: 'Lorem ipsum dolor sit amet consectetur. Non cursus congue vel sem bibendum. Egestas in amet ac duis tortor ornare lorem in. Quis consectetur pretium',
        rating: 4,
    },
    {
        id: '6',
        image: require('../../assets/images/users/user19.png'),
        name: 'Ralph Edwards',
        reviewDate: '28 Nov 2023',
        review: 'Lorem ipsum dolor sit amet consectetur. Non cursus congue vel sem bibendum. Egestas in amet ac duis tortor ornare lorem in. Quis consectetur pretium',
        rating: 4,
    },
    {
        id: '7',
        image: require('../../assets/images/users/user20.png'),
        name: 'Devon Lane',
        reviewDate: '28 Nov 2023',
        review: 'Lorem ipsum dolor sit amet consectetur. Non cursus congue vel sem bibendum. Egestas in amet ac duis tortor ornare lorem in. Quis consectetur pretium',
        rating: 3,
    },
];

const ReviewsScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header={'Review'} />
                {reviewsInfo()}
            </View>
        </View>
    )

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
            <View style={{ flex: 1 }}>
                <FlatList
                    data={reviews}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}

export default ReviewsScreen;