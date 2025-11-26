import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Sizes, Fonts } from '../constants/styles'

export const ExitToast = () => {
    return (
        <View style={styles.exitInfoWrapStyle}>
            <Text style={{ ...Fonts.whiteColor14Medium }}>
                Press Back Once Again To Exit!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    exitInfoWrapStyle: {
        backgroundColor: '#333333',
        position: "absolute",
        bottom: 30,
        alignSelf: "center",
        borderRadius: Sizes.fixPadding * 3.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
        zIndex: 200,
    },
})