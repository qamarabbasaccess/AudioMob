import { Text, View, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { Colors, CommonStyles, Fonts, screenWidth, Sizes } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import { Header } from '../../components/header';
import CreditCard from 'react-native-credit-card-ui';
import CheckerCC from 'card-validator';
import * as cardValidator from "card-validator";

const CreditCardScreen = ({ navigation }) => {

    const [expiry, setExpiry] = useState('');
    const [holder, setHolder] = useState('');
    const [number, setNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [focusCvv, setFocusCvv] = useState(false);
    const [backspaceRemove, setBackspaceRemove] = useState(false);
    const [isValidHolder, setIsValidHolder] = useState('');
    const [cardType, setCardType] = useState('');
    const [expiryInfo, setExpiryInfo] = useState({});
    const [isValidNumber, setIsValidNumber] = useState(true);

    const getCardType = (number) => {
        const visaRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
        const mastercardRegEx = /^5[1-5][0-9]{14}$/;
        const amexRegEx = /^3[47][0-9]{13}$/;
        const discoverRegEx = /^6(?:011|5[0-9]{2})[0-9]{12}$/;

        if (visaRegEx.test(number)) return "visa";
        if (mastercardRegEx.test(number)) return "mastercard";
        if (amexRegEx.test(number)) return "amex";
        if (discoverRegEx.test(number)) return "discover";
        return "mastercard";
    };

    const handleCardNumberChange = (value) => {
        let formattedText = value.split(" ").join("");
        if (formattedText.length > 0) {
            formattedText = formattedText.match(new RegExp(".{1,4}", "g")).join(" ");
        }
        setCardType(getCardType(value));
        if (formattedText.length === 19) {
            var numberValidation = cardValidator.number(value);
            setIsValidNumber(numberValidation.isValid);
        } else {
            setIsValidNumber(false);
        }
        setNumber(formattedText);
    };

    const formattedNumber = number.replace(/\s/g, "");

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={Platform.OS == 'ios' ? 10 : 0}
                style={{ flex: 1 }}
            >
                <Header header='Credit card' />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustKeyboardInsets={true}
                    contentContainerStyle={{ paddingTop: Sizes.fixPadding - 5.0, paddingBottom: Sizes.fixPadding * 2.0 }}
                >
                    {cardView()}
                    {cardHolderInfo()}
                    {cardNumberInfo()}
                    {expiryAndCvvInfo()}
                </ScrollView>
            </KeyboardAvoidingView>
            {continueButton()}
        </View>
    );

    function continueButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('Success') }}
                style={{ ...CommonStyles.buttonStyle, ...CommonStyles.buttonShadow }}
            >
                <Text style={{ ...Fonts.whiteColor18SemiBold }}>
                    Continue
                </Text>
            </TouchableOpacity>
        )
    }

    function expiryAndCvvInfo() {
        const handleExpiryDate = (text) => {
            let textTemp = text;
            if (textTemp.length === 2) {
                if (
                    parseInt(textTemp.substring(0, 2)) > 12 ||
                    parseInt(textTemp.substring(0, 2)) === 0
                ) {
                    textTemp = textTemp[0];
                } else if (text.length === 2 && !backspaceRemove) {
                    textTemp += '/';
                    setBackspaceRemove(true);
                } else if (text.length === 2 && backspaceRemove) {
                    textTemp = textTemp[0];
                    setBackspaceRemove(false);
                }
            }
            setExpiry(textTemp);
        };
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: Sizes.fixPadding }}>
                <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding }}>
                    <Text style={{ ...Fonts.blackColor15Medium, marginBottom: Sizes.fixPadding - 5.0 }}>
                        Expiry
                    </Text>
                    <TextInput
                        placeholder="MM/YY"
                        placeholderTextColor={Colors.grayColor}
                        value={expiry}
                        onChangeText={(value) => {
                            handleExpiryDate(value);
                            const expiryValidation = CheckerCC.expirationDate(value);
                            setExpiryInfo(expiryValidation);
                        }}
                        style={{ padding: 0, ...Fonts.blackColor15Medium, color: !expiryInfo.isValid ? 'red' : Colors.blackColor }}
                        maxLength={5}
                        keyboardType="numeric"
                        cursorColor={Colors.primaryColor}
                        selectionColor={Colors.primaryColor}
                    />
                    <View style={{ backgroundColor: Colors.lightGrayColor, height: 1.0, marginTop: Sizes.fixPadding - 5.0 }} />
                </View>
                <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding }}>
                    <Text style={{ ...Fonts.blackColor15Medium, marginBottom: Sizes.fixPadding - 5.0 }}>
                        CVV/CVC
                    </Text>
                    <TextInput
                        placeholder="CVV/CVC"
                        placeholderTextColor={Colors.grayColor}
                        value={cvv}
                        onChangeText={(value) => setCvv(value)}
                        style={{ padding: 0, ...Fonts.blackColor15Medium }}
                        maxLength={3}
                        keyboardType="numeric"
                        onFocus={() => { setFocusCvv(true) }}
                        onBlur={() => { setFocusCvv(false) }}
                        cursorColor={Colors.primaryColor}
                        selectionColor={Colors.primaryColor}
                    />
                    <View style={{ backgroundColor: Colors.lightGrayColor, height: 1.0, marginTop: Sizes.fixPadding - 5.0 }} />
                </View>
            </View>
        )
    }

    function cardHolderInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor15Medium, marginBottom: Sizes.fixPadding - 5.0 }}>
                    Name on card
                </Text>
                <TextInput
                    placeholder="Card Holder Name"
                    placeholderTextColor={Colors.grayColor}
                    value={holder}
                    onChangeText={(value) => {
                        setHolder(value)
                        const holderValidation = CheckerCC.cardholderName(value);
                        setIsValidHolder(holderValidation.isValid);
                    }}
                    style={{ padding: 0, ...Fonts.blackColor15Medium, color: isValidHolder ? Colors.blackColor : 'red' }}
                    maxLength={26}
                    cursorColor={Colors.primaryColor}
                    selectionColor={Colors.primaryColor}
                />
                <View style={{ backgroundColor: Colors.lightGrayColor, height: 1.0, marginTop: Sizes.fixPadding - 5.0 }} />
            </View>
        )
    }

    function cardNumberInfo() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor15Medium, marginBottom: Sizes.fixPadding - 5.0 }}>
                    Card Number
                </Text>
                <TextInput
                    placeholder="Card Number"
                    placeholderTextColor={Colors.grayColor}
                    value={number}
                    onChangeText={(value) => { handleCardNumberChange(value) }}
                    style={{ padding: 0, ...Fonts.blackColor15Medium, color: isValidNumber ? Colors.blackColor : 'red' }}
                    keyboardType="numeric"
                    maxLength={19}
                    cursorColor={Colors.primaryColor}
                    selectionColor={Colors.primaryColor}
                />
                <View style={{ backgroundColor: Colors.lightGrayColor, height: 1.0, marginTop: Sizes.fixPadding - 5.0 }} />
            </View>
        )
    }

    function cardView() {
        return (
            <CreditCard
                shiny
                bar={true}
                focused={focusCvv ? 'cvc' : null}
                number={formattedNumber}
                name={holder}
                expiry={expiry}
                cvc={cvv}
                bgColor={Colors.primaryColor}
                imageFront={require("../../assets/images/cardBg.png")}
                imageBack={require("../../assets/images/cardBg.png")}
                style={{ alignSelf: 'center', marginBottom: Sizes.fixPadding * 2.0 }}
                width={screenWidth - 40}
                height={220}
                type={cardType}
            />
        );
    }
}

export default CreditCardScreen;