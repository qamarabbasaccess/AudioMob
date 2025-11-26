import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { Colors, CommonStyles, Fonts, Sizes, } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import { Header } from '../../components/header';
import { TouchableOpacity } from 'react-native';

const paymentMethodsList = [
    {
        id: '1',
        paymentIcon: require('../../assets/images/icons/masterCard.png'),
        method: 'Mastercard',
    },
    {
        id: '2',
        paymentIcon: require('../../assets/images/icons/visa.png'),
        method: 'Visacard',
    },
    {
        id: '3',
        paymentIcon: require('../../assets/images/icons/payPal.png'),
        method: 'Paypal',
    },
    {
        id: '4',
        paymentIcon: require('../../assets/images/icons/googlePay.png'),
        method: 'Google pay',
    },
    {
        id: '5',
        paymentIcon: require('../../assets/images/icons/cash.png'),
        method: 'Cash on delivery',
    },
];

const SelectPaymentMethodScreen = ({ navigation }) => {

    const [selectedMethodIndex, setSelectedMethodIndex] = useState(0);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header='Select payment method' />
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: Sizes.fixPadding - 5.0 }}>
                    {paymentMethodsInfo()}
                </ScrollView>
            </View>
            {continueButton()}
        </View>
    )

    function continueButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('CreditCard') }}
                style={{ ...CommonStyles.buttonStyle, ...CommonStyles.buttonShadow, }}
            >
                <Text style={{ ...Fonts.whiteColor18SemiBold }}>
                    Continue
                </Text>
            </TouchableOpacity>
        )
    }

    function paymentMethodsInfo() {
        return (
            <View style={styles.paymentMethodWrapper}>
                {
                    paymentMethodsList.map((item, index) => (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { setSelectedMethodIndex(index) }}
                            key={`${item.id}`}
                            style={{ ...CommonStyles.rowAlignCenter, margin: Sizes.fixPadding + 5.0 }}
                        >
                            <View style={styles.paymentIconWrapper}>
                                <Image
                                    source={item.paymentIcon}
                                    style={{ width: 26.0, height: 16.0, resizeMode: 'contain' }}
                                />
                            </View>
                            <Text numberOfLines={1} style={{ ...Fonts.blackColor15Medium, flex: 1, marginHorizontal: Sizes.fixPadding }}>
                                {item.method}
                            </Text>
                            <View
                                style={{
                                    ...styles.radioButton,
                                    borderColor: selectedMethodIndex == index ? Colors.primaryColor : Colors.whiteColor,
                                }}
                            />
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }

}

export default SelectPaymentMethodScreen

const styles = StyleSheet.create({
    paymentIconWrapper: {
        width: 40.0,
        height: 27.0,
        borderRadius: Sizes.fixPadding * 1.6,
        borderColor: Colors.lightGrayColor,
        borderWidth: 1.0,
        ...CommonStyles.center
    },
    radioButton: {
        width: 24.0,
        height: 24.0,
        borderRadius: 12.0,
        ...CommonStyles.shadow,
        ...CommonStyles.center,
        borderWidth: 8.0,
        backgroundColor: Colors.whiteColor,
    },
    paymentMethodWrapper: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        ...CommonStyles.shadow,
        marginHorizontal: Sizes.fixPadding * 2.0
    }
})