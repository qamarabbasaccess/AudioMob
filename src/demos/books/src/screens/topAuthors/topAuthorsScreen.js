import { FlatList, StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import React from 'react';
import MyStatusBar from '../../components/myStatusBar';
import { Header } from '../../components/header';
import { Colors, CommonStyles, screenWidth, Sizes, Fonts } from '../../constants/styles';

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
        image: require('../../assets/images/users/user12.png'),
        name: 'Michelle Obama',
    },
    {
        id: '4',
        image: require('../../assets/images/users/user13.png'),
        name: 'Dan Brown',
    },
    {
        id: '5',
        image: require('../../assets/images/users/user5.png'),
        name: 'Chetan Bhagat',
    },
    {
        id: '6',
        image: require('../../assets/images/users/user3.png'),
        name: 'Rhonda Byrne’s',
    },
    {
        id: '7',
        image: require('../../assets/images/users/user9.png'),
        name: 'I.T Lucas',
    },
    {
        id: '8',
        image: require('../../assets/images/users/user10.png'),
        name: 'Rc majumdar',
    },
    {
        id: '9',
        image: require('../../assets/images/users/user8.png'),
        name: 'R.K Narayan',
    },
    {
        id: '10',
        image: require('../../assets/images/users/user6.png'),
        name: 'Alice Munro',
    },
    {
        id: '11',
        image: require('../../assets/images/users/user11.png'),
        name: 'Shelley harris',
    },
    {
        id: '12',
        image: require('../../assets/images/users/user4.png'),
        name: 'Rhonda Byrne’s',
    },
];

const TopAuthorsScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header={'Top authors'} />
                {authorsInfo()}
            </View>
        </View>
    )

    function authorsInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.push('AuthorDetail')}
                style={styles.authorInfoWrapper}
            >
                <View style={styles.imageCircleStyle}>
                    <Image
                        source={item.image}
                        style={{ width: '88%', height: '88%', borderRadius: (screenWidth / 4.9) / 2.0, }}
                    />
                </View>
                <Text numberOfLines={1} style={{ ...Fonts.blackColor13Regular, marginTop: Sizes.fixPadding - 5.0 }}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={topAuthorsList}
                numColumns={3}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding }}
            />
        )
    }
}

export default TopAuthorsScreen

const styles = StyleSheet.create({
    imageCircleStyle: {
        width: screenWidth / 4.9,
        height: screenWidth / 4.9,
        borderRadius: (screenWidth / 4.9) / 2.0,
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        ...CommonStyles.center,
    },
    authorInfoWrapper: {
        flex: 1,
        ...CommonStyles.center,
        marginHorizontal: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding * 2.5,
        maxWidth: screenWidth / 3.76
    }
})