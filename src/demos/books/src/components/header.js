import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CommonStyles, Sizes, Fonts, Colors } from '../constants/styles'
import { TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

export const Header = ({ header }) => {

    const navigation = useNavigation();

    return (
        <View style={{ ...CommonStyles.rowAlignCenter, margin: Sizes.fixPadding * 2.0 }}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.pop() }}
                style={styles.backArrowWrapper}
            >
                <MaterialIcons name="arrow-back" size={20} color="black" />
            </TouchableOpacity>
            <Text numberOfLines={1} style={{ ...Fonts.blackColor18SemiBold, flex: 1, marginLeft: Sizes.fixPadding + 5.0 }}>
                {header}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    backArrowWrapper: {
        width: 30.0,
        height: 30.0,
        borderRadius: Sizes.fixPadding - 5.0,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        ...CommonStyles.center,
    }
})