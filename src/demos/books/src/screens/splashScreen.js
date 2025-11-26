import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, CommonStyles, Fonts, Sizes } from '../constants/styles'

const SplashScreen = ({ navigation }) => {

    setTimeout(() => {
        navigation.push('Onboarding')
    }, 2000);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
            <StatusBar translucent backgroundColor='transparent' barStyle={"light-content"} />
            <ImageBackground
                source={require('../assets/images/splashBg.png')}
                style={{ flex: 1, opacity: 0.2 }}
            />
            {appIconWithName()}
        </View>
    )

    function appIconWithName() {
        return (
            <View style={styles.imageOverlay}>
                <Image
                    source={require('../assets/images/appIcon.png')}
                    style={{ width: 76.0, height: 76.0, resizeMode: 'contain' }}
                />
                <Text style={{ ...Fonts.whiteColor24SemiBold, marginTop: Sizes.fixPadding }}>
                    Book Swap
                </Text>
            </View>
        )
    }
}

export default SplashScreen;

const styles = StyleSheet.create({
    imageOverlay: {
        backgroundColor: 'rgba(203, 161, 53, 0.8)',
        flex: 1,
        ...CommonStyles.center,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
})