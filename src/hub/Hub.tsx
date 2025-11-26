import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Hub = () => {
    const navigation = useNavigation()

 const handleNavigation = (item) => {
        switch (item) {
            case 1:
                navigation.navigate('HotifyAppNavigator');
                break;
            case 2:
                navigation.navigate('CollegioAppNavigator');
                break;
            case 3:
                navigation.navigate('CorecastAppNavigator');
                break;
            case 4:
                navigation.navigate('BooksAppNavigator');
                break;
            default:
                console.log('No screen assigned');
        }
    };

    return (
        <View style={styles.container}>

            {/* Logo */}
            {/* <Image
        source={require('../assets/logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      /> */}

            {/* Text Under Logo */}
            <Text style={styles.title}>Welcome to AudioMob</Text>

            {/* 5 Rectangle Boxes */}
            <View style={styles.boxContainer}>
                {[1, 2, 3, 4, 5].map((item) => (
                    <TouchableOpacity onPress={() => handleNavigation(item)} activeOpacity={0.8} key={item} style={styles.box}>
                        <Text style={styles.boxText}>Box {item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Language Circle Button */}
            <TouchableOpacity activeOpacity={0.8} style={styles.languageBtn}>
                {/* <Image
          source={require('../assets/pk.png')} 
          style={styles.flag}
        /> */}
                <Text>Flag</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Hub;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 40,
    },

    logo: {
        width: 150,
        height: 150,
        marginTop: 20,
    },

    title: {
        fontSize: 22,
        fontWeight: '600',
        marginTop: 10,
        color: '#333',
    },

    boxContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },

    box: {
        height: 70,
        borderWidth: 1.5,
        borderColor: '#333',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
    },

    boxText: {
        fontSize: 18,
        color: '#444',
        fontWeight: '500',
    },

    languageBtn: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },

    flag: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});
