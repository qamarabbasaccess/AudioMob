import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Colors, CommonStyles, Fonts, screenWidth, Sizes } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Snackbar } from 'react-native-paper';
import { TabView, TabBar } from 'react-native-tab-view';

const aboutAuthorDescription = [
    'Lorem ipsum dolor sit amet consectetur. Viverra felis lectus et egestas. Et facilisi nulla vel vitae vestibulum neque eget. Id in at libero facilisis. Pharetra lmolestie convallis in scelerisque purus nam diam. Neqraesent vitae vel porttitor sed sollicitudin viverra. Enim massa fusce mus nec ipsum viverra etiam ut. Penatibus id u amet integer in condimentum at quis sit.',
    'Lorem ipsum dolor sit amet consectetur. Viverra felis lectus et egestas. Et facilisi nulla vel vitae vestibulum neque eget. Id in at libero facilisis. Pharetra lmolestie convallis in scelerisque purus nam diam. Neqraesent vitae vel porttitor sed sollicitudin viverra. Enim massa fusce mus nec ipsum viverra etiam ut. Penatibus id u amet integer in condimentum at quis sit.sffdf amect. Lorem ipsum dolor sit amet consectetur. Viverra felis lectus et egestas. Et facilisi nulla vel vitae vestibulum neque eget. Id in at libero facilisis. Pharetra lmolestie convallis in scelerisque purus nam diam. Neqraesent vitae vel porttitor sed sollicitudin viverra. Enim massa fusce mus nec ipsum viverra etiam ut. Penatibus id u amet integer in condimentum at quis sit.',
];

const socialConnectOptionsList = [
    require('../../assets/images/icons/youtube.png'),
    require('../../assets/images/icons/twitter.png'),
    require('../../assets/images/icons/facebook.png'),
    require('../../assets/images/icons/instagram.png')
];

const booksList = [
    require('../../assets/images/books/book15.png'),
    require('../../assets/images/books/book14.png'),
    require('../../assets/images/books/book13.png'),
    require('../../assets/images/books/book16.png'),
    require('../../assets/images/books/book17.png'),
    require('../../assets/images/books/book18.png'),
    require('../../assets/images/books/book19.png'),
    require('../../assets/images/books/book20.png'),
    require('../../assets/images/books/book21.png'),
    require('../../assets/images/books/book7.png'),
    require('../../assets/images/books/book6.png'),
    require('../../assets/images/books/book1.png'),
];

const AuthorDetailScreen = ({ navigation }) => {

    const [inSaved, setInSaved] = useState(true);
    const [showSnackBar, setShowSnackBar] = useState(false);
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'About' },
        { key: 'second', title: 'Book' },
    ]);

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                return <AboutInfo />;
            case 'second':
                return <BookInfo navigation={navigation} />;
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                {authorInfo()}
                {aboutAndBookTab()}
            </View>
            {snackBarInfo()}
        </View>
    )

    function aboutAndBookTab() {

        const renderTabBar = props => (
            <View style={{ backgroundColor: Colors.bodyBackColor, ...CommonStyles.rowAlignCenter }}>
                {props.navigationState.routes.map((route, i) => {
                    const focused = index === i;
                    return (
                        <TouchableOpacity
                            key={route.key}
                            style={{
                                ...styles.tabBox,
                                borderBottomColor: focused ? Colors.primaryColor : Colors.lightGrayColor,
                            }}
                            onPress={() => setIndex(i)}
                        >
                            <Text style={{ textAlign: 'center', ...focused ? { ...Fonts.primaryColor16SemiBold } : { ...Fonts.grayColor16SemiBold } }}>
                                {route.title}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );

        return (
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
            />
        )
    }

    function authorInfo() {
        return (
            <View style={styles.authorInfoWrapStyle}>
                <Image
                    source={require('../../assets/images/users/user5.png')}
                    style={{ width: 92.0, height: 92.0, borderRadius: 46.0 }}
                />
                <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0 }}>
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor16Medium }}>
                        Chetan Bhagat
                    </Text>
                    <Text numberOfLines={1} style={{ ...Fonts.grayColor14Medium, marginVertical: Sizes.fixPadding - 7.0 }}>
                        Indian author
                    </Text>
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor16Medium }}>
                        129 books
                    </Text>
                </View>
            </View>
        )
    }

    function header() {
        return (
            <View style={{ ...CommonStyles.rowAlignCenter, margin: Sizes.fixPadding * 2.0, justifyContent: 'space-between' }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.pop() }}
                    style={styles.backButton}
                >
                    <MaterialIcons name="arrow-back" size={20} color={Colors.blackColor} />
                </TouchableOpacity>
                <View style={{ ...CommonStyles.rowAlignCenter }}>
                    <MaterialIcons
                        name='share'
                        color={Colors.primaryColor}
                        size={20}
                    />
                    <MaterialIcons
                        name={inSaved ? 'bookmark' : 'bookmark-outline'}
                        color={Colors.primaryColor}
                        size={21}
                        style={{ marginLeft: Sizes.fixPadding }}
                        onPress={() => { setInSaved(!inSaved); setShowSnackBar(true) }}
                    />
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

}

export default AuthorDetailScreen;

const AboutInfo = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {aboutAuthor()}
                {socialConnectInfo()}
            </ScrollView>
        </View>
    )

    function socialConnectInfo() {
        const renderItem = ({ item }) => (
            <Image
                source={item}
                style={styles.socialIconStyle}
            />
        )
        return (
            <View>
                <Text style={{ marginBottom: Sizes.fixPadding, ...Fonts.blackColor16SemiBold, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                    Follow us
                </Text>
                <FlatList
                    data={socialConnectOptionsList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding + 5.0, paddingBottom: Sizes.fixPadding * 2.5 }}
                />
            </View>
        )
    }

    function aboutAuthor() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor16SemiBold, marginBottom: Sizes.fixPadding }}>
                    About author
                </Text>
                <View>
                    {
                        aboutAuthorDescription.map((item, index) => (
                            <Text key={`${index}`} style={{ ...Fonts.grayColor14Regular, marginBottom: Sizes.fixPadding - 5.0 }}>
                                {item}
                            </Text>
                        ))
                    }
                </View>
            </View>
        )
    }
}

const BookInfo = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding, marginBottom: Sizes.fixPadding * 3.0 }}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('BookDetail') }}
                style={styles.bookImageWrapper}
            >
                <Image
                    source={item}
                    style={{ width: '100%', height: '100%', borderRadius: Sizes.fixPadding - 5.0 }}
                />
            </TouchableOpacity>
        </View>
    )

    return (
        <FlatList
            data={booksList}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding, paddingTop: Sizes.fixPadding * 2.5 }}
        />
    )
}

const styles = StyleSheet.create({
    backButton: {
        width: 30.0,
        height: 30.0,
        borderRadius: Sizes.fixPadding - 5.0,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        ...CommonStyles.center
    },
    authorInfoWrapStyle: {
        marginTop: Sizes.fixPadding - 5.0,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 1.5
    },
    tabBarStyle: {
        backgroundColor: Colors.bodyBackColor,
        elevation: 0.0,
        shadowOpacity: 0,
        borderBottomColor: Colors.lightGrayColor,
        borderBottomWidth: 2.0,
    },
    socialIconStyle: {
        width: 36.0,
        height: 36.0,
        borderRadius: Sizes.fixPadding - 5.0,
        marginHorizontal: Sizes.fixPadding - 5.0
    },
    bookImageWrapper: {
        width: '100%',
        height: screenWidth / 2.8,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        shadowOpacity: 0.4,
        borderRadius: Sizes.fixPadding - 5.0,
        maxWidth: screenWidth / 3.76,
    },
    tabBox: {
        flex: 1,
        padding: Sizes.fixPadding + 1.0,
        borderBottomWidth: 2.0,
    }
})