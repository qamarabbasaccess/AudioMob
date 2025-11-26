import {  ScrollView, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors, CommonStyles, Sizes, Fonts } from '../../constants/styles'
import MyStatusBar from '../../components/myStatusBar'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const recentSearchesList = [
    'The secret',
    'Rich dad Poor dad',
    'Dark secret',
    'One Indian girl'
];

const trendingSearchList = [
    'One Indian girl',
    'Scary House',
    'I too had a love story',
    'India positive',
    'Dark secret',
    'Rich dad poor dad',
    'The secret'
];

const SearchScreen = ({navigation}) => {

    const [recentSearches, setRecentSearches] = useState(recentSearchesList);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {backArrowWithSearchField()}
                <View style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={true}>
                        {recentSearches.length == 0 ? null : recentSearchInfo()}
                        {trendingSearchInfo()}
                    </ScrollView>
                </View>
            </View>
        </View>
    )

    function trendingSearchInfo() {
        return (
            <View>
                <View style={{ backgroundColor: Colors.whiteColor, paddingVertical: Sizes.fixPadding, paddingHorizontal: Sizes.fixPadding * 2.0, }}>
                    <Text style={{ ...Fonts.primaryColor16Medium }}>
                        Trending search
                    </Text>
                </View>
                <View style={{ marginVertical: Sizes.fixPadding + 5.0, }}>
                    {
                        trendingSearchList.map((item, index) => (
                            <View
                                key={`${index}`}
                                style={{
                                    flexDirection: 'row',
                                    marginHorizontal: Sizes.fixPadding * 2.0,
                                    marginBottom: Sizes.fixPadding + 5.0
                                }}
                            >
                                <Text style={{ ...Fonts.grayColor15Medium }}>
                                    #
                                </Text>
                                <Text style={{ flex: 1, ...Fonts.grayColor15Medium, marginLeft: Sizes.fixPadding - 5.0, }}>
                                    {item}
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </View>
        )
    }

    function recentSearchInfo() {
        return (
            <View>
                <View style={{ backgroundColor: Colors.whiteColor, paddingHorizontal: Sizes.fixPadding * 2.0, paddingVertical: Sizes.fixPadding }}>
                    <View style={{ ...CommonStyles.rowAlignCenter }}>
                        <Text numberOfLines={1} style={{ flex: 1, ...Fonts.primaryColor16Medium, marginRight: Sizes.fixPadding }}>
                            Recent search
                        </Text>
                        <Text onPress={() => { setRecentSearches([]) }} style={{ ...Fonts.grayColor14Medium }}>
                            Clear all
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: Sizes.fixPadding + 5.0, marginBottom: Sizes.fixPadding }}>
                    {
                        recentSearches.map((item, index) => (
                            <View
                                key={`${index}`}
                                style={{ ...CommonStyles.rowAlignCenter, marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding }}
                            >
                                <MaterialIcons name='history' color={Colors.grayColor} size={18} />
                                <Text style={{ ...Fonts.grayColor15Medium, flex: 1, marginLeft: Sizes.fixPadding - 5.0 }}>
                                    {item}
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </View>
        )
    }

    function backArrowWithSearchField() {
        return (
            <View style={{ ...CommonStyles.rowAlignCenter, margin: Sizes.fixPadding * 2.0 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.pop() }}
                    style={styles.backButton}
                >
                    <MaterialIcons
                        name='arrow-back'
                        color={Colors.blackColor}
                        size={20}
                    />
                </TouchableOpacity>
                <View style={styles.searchFieldWrapper}>
                    <MaterialIcons
                        name='search'
                        color={Colors.grayColor}
                        size={20}
                    />
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor={Colors.grayColor}
                        style={{padding:0, ...Fonts.blackColor16Medium, flex: 1, marginLeft: Sizes.fixPadding }}
                        selectionColor={Colors.primaryColor}
                    />
                </View>
            </View>
        )
    }
}

export default SearchScreen;

const styles = StyleSheet.create({
    backButton: {
        width: 30.0,
        height: 30.0,
        borderRadius: Sizes.fixPadding - 5.0,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.center,
        ...CommonStyles.shadow
    },
    searchFieldWrapper: {
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.rowAlignCenter,
        ...CommonStyles.shadow,
        flex: 1,
        borderRadius: Sizes.fixPadding - 5.0,
        marginLeft: Sizes.fixPadding + 5.0,
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding - 2.0
    }
})