import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Colors, CommonStyles, Sizes, Fonts } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const chepterText = [
    'Lorem ipsum dolor sit amet consectetur. Viverra felis lectus et egestas. Et facilisi nulla vel vitae vestibulum neque eget. Id in at libero facilisis. Pharetra lmolestie convallis in scelerisque purus nam diam. Neqraesent vitae vel porttitor sed sollicitudin viverra. Enim massa fusce mus nec ipsum viverra etiam ut. Penatibus id u amet integer in condimentum at quis sit.',
    'Lorem ipsum dolor sit amet consectetur. Viverra felis lectus et egestas. Et facilisi nulla vel vitae vestibulum neque eget. Id in at libero facilisis. Pharetra lmolestie convallis in scelerisque purus nam diam. Neqraesent vitae vel porttitor sed sollicitudin viverra. Enim massa fusce mus nec ipsum viverra etiam ut. Penatibus id u amet integer in condimentum at quis sit.sffdf amect. Lorem ipsum dolor sit amet consectetur. Viverra felis lectus et egestas. Et facilisi nulla vel vitae vestibulum neque eget. Id in at libero facilisis. Pharetra lmolestie convallis in scelerisque purus nam diam. Neqraesent vitae vel porttitor sed sollicitudin viverra. Enim massa fusce mus nec ipsum viverra etiam ut. Penatibus id u amet integer in condimentum at quis sit.',
    'Lorem ipsum dolor sit amet consectetur. Viverra felis lectus et egestas. Et facilisi nulla vel vitae vestibulum neque eget. Id in at libero facilisis. Pharetra lmolestie convallis in scelerisque purus nam diam. Neqraesent vitae vel porttitor sed sollicitudin viverra. Enim massa fusce mus nec ipsum viverra etiam ut. Penatibus id u amet integer in condimentum at quis sit.',
    'Lorem ipsum dolor sit amet consectetur. Viverra felis lectus et egestas. Et facilisi nulla vel vitae vestibulum neque eget. Id in at libero facilisis. Pharetra lmolestie convallis in scelerisque purus nam diam. Neqraesent vitae vel porttitor sed sollicitudin viverra. Enim massa fusce mus nec ipsum viverra etiam ut. Penatibus id u amet integer in condimentum at quis sit.sffdf amect. Lorem ipsum dolor sit amet consectetur. Viverra felis lectus et egestas. Et facilisi nulla vel vitae vestibulum neque eget. Id in at libero facilisis. Pharetra lmolestie convallis in scelerisque purus nam diam. Neqraesent vitae vel porttitor sed sollicitudin viverra. Enim massa fusce mus nec ipsum viverra etiam ut. Penatibus id u amet integer in condimentum at quis sit.',
];

const ReadBookScreen = ({ navigation }) => {

    const maxChepter = 25;

    const [currentChepter, setCurrentChepter] = useState(2);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {chepterInfo()}
                </ScrollView>
            </View>
            {chepterAndPagesInfo()}
        </View>
    )

    function chepterAndPagesInfo() {
        return (
            <View style={{ backgroundColor: Colors.whiteColor, ...CommonStyles.shadow, padding: Sizes.fixPadding * 2.0 }}>
                <View style={{ ...CommonStyles.rowAlignCenter, justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { currentChepter > 1 ? setCurrentChepter(currentChepter - 1) : null }}
                        style={styles.previousAndNextButton}
                    >
                        <MaterialIcons name="chevron-left" size={26} color={Colors.blackColor} />
                    </TouchableOpacity>
                    <Text style={styles.footerChepterInfoTextStyle}>
                        Chapter {currentChepter} of 25
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { currentChepter < maxChepter ? setCurrentChepter(currentChepter + 1) : null }}
                        style={styles.previousAndNextButton}
                    >
                        <MaterialIcons name="chevron-right" size={26} color={Colors.blackColor} />
                    </TouchableOpacity>
                </View>
                <Text style={{ ...Fonts.grayColor14Medium, textAlign: 'center', marginTop: Sizes.fixPadding + 5.0 }}>
                    Page 25/200
                </Text>
            </View>
        )
    }

    function chepterInfo() {
        const renderItem = ({ item }) => (
            <Text style={styles.descriptionTextStyle}>
                {item}
            </Text>
        )
        return (
            <View>
                <Text style={{ ...Fonts.primaryColor16SemiBold, textAlign: 'center', marginBottom: Sizes.fixPadding + 5.0 }}>
                    Chapter  {currentChepter}
                </Text>
                <FlatList
                    data={chepterText}
                    renderItem={renderItem}
                    scrollEnabled={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding }}
                />
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
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.push('ListenBook') }}
                    style={styles.audioButtonStyle}
                >
                    <Ionicons name="headset-outline" size={20} color={Colors.primaryColor} />
                    <Text style={{ ...Fonts.primaryColor14SemiBold, marginLeft: Sizes.fixPadding - 2.0 }}>
                        Audio
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ReadBookScreen

const styles = StyleSheet.create({
    backButton: {
        width: 30.0,
        height: 30.0,
        borderRadius: Sizes.fixPadding - 5.0,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        ...CommonStyles.center
    },
    audioButtonStyle: {
        ...CommonStyles.rowAlignCenter,
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingHorizontal: Sizes.fixPadding - 4.0,
        paddingVertical: Sizes.fixPadding - 5.0,
        ...CommonStyles.shadow
    },
    descriptionTextStyle: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        textAlign: 'justify',
        ...Fonts.grayColor14Regular,
        marginBottom: Sizes.fixPadding
    },
    previousAndNextButton: {
        width: 26.0,
        height: 26.0,
        borderRadius: Sizes.fixPadding - 8.0,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        ...CommonStyles.center,
    },
    footerChepterInfoTextStyle: {
        ...Fonts.primaryColor16Medium,
        marginHorizontal: Sizes.fixPadding + 5.0,
        flex: 1,
        textAlign: 'center'
    }
})