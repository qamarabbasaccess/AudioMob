import { ScrollView, StyleSheet, Text, View, Image, FlatList,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors, CommonStyles, Fonts, Sizes } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import { Header } from '../../components/header';

const premiumPlans = [
    {
        id: '1',
        time: '1 month',
        amount: '$9.00',
        conditions: [
            'Unlock the paid book',
            'Download read book and listen offline'
        ],
    },
    {
        id: '2',
        time: '6 month',
        amount: '$20.00',
        conditions: [
            'Unlock the paid book',
            'Download read book and listen offline'
        ],
    },
    {
        id: '3',
        time: '1 year',
        amount: '$80.00',
        conditions: [
            'Unlock the paid book',
            'Download read book and listen offline'
        ],
    }
];

const PremiumScreen = ({navigation}) => {

    const [selectedPlanIndex, setSelectedPlanIndex] = useState(1);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header='Go Premium' />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {premiumIcon()}
                    {premiumPlansInfo()}
                </ScrollView>
            </View>
            {getPremiumButton()}
        </View>
    )

    function getPremiumButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('SelectPaymentMethod') }}
                style={{ ...CommonStyles.buttonStyle, ...CommonStyles.buttonShadow }}
            >
                <Text style={{ ...Fonts.whiteColor18SemiBold }}>
                    Get premium
                </Text>
            </TouchableOpacity>
        )
    }

    function premiumPlansInfo() {
        const renderItem = ({ item, index }) => (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { setSelectedPlanIndex(index) }}
                style={{
                    ...styles.premiumPlanWrapper,
                    borderColor: selectedPlanIndex == index ? Colors.primaryColor : Colors.whiteColor
                }}
            >
                <View style={{ ...CommonStyles.rowAlignCenter, margin: Sizes.fixPadding + 5.0 }}>
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor15SemiBold, flex: 1, marginRight: Sizes.fixPadding }}>
                        {item.time}
                    </Text>
                    <Text style={{ ...Fonts.primaryColor16SemiBold }}>
                        {item.amount}
                    </Text>
                </View>
                <View style={{ backgroundColor: Colors.lightGrayColor, height: 1.0, }} />
                <View style={{ marginHorizontal: Sizes.fixPadding + 5.0, marginTop: Sizes.fixPadding + 5.0, marginBottom: Sizes.fixPadding - 5.0 }}>
                    {
                        item.conditions.map((condition, index) => (
                            <View
                                key={`${index}`}
                                style={{ flexDirection: 'row', marginBottom: Sizes.fixPadding }}
                            >
                                <View style={styles.conditionIndicator} />
                                <Text style={{ ...Fonts.blackColor14Regular, marginLeft: Sizes.fixPadding }}>
                                    {condition}
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </TouchableOpacity>
        )
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={premiumPlans}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingTop: Sizes.fixPadding - 8.0 }}
                    scrollEnabled={false}
                />
            </View>
        )
    }

    function premiumIcon() {
        return (
            <View style={{ ...CommonStyles.center, margin: Sizes.fixPadding * 2.5 }}>
                <Image
                    source={require('../../assets/images/icons/king.png')}
                    style={{ width: 61.0, height: 61.0, resizeMode: 'contain' }}
                />
                <Text style={{ ...Fonts.primaryColor18SemiBold, marginTop: Sizes.fixPadding }}>
                    Go premium
                </Text>
            </View>
        )
    }
}

export default PremiumScreen

const styles = StyleSheet.create({
    conditionIndicator: {
        marginTop: Sizes.fixPadding - 4.0,
        width: 8.0,
        height: 8.0,
        borderRadius: 4.0,
        backgroundColor: Colors.blackColor
    },
    premiumPlanWrapper: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        ...CommonStyles.shadow,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.5,
        borderWidth: 1.0,
    }
})