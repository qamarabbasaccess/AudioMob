import { BackHandler, Platform, StyleSheet, View } from 'react-native';
import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExitToast } from './exitToast';
import { Colors, CommonStyles } from '../constants/styles';
import MyStatusBar from './myStatusBar';
import HomeScreen from '../screens/home/homeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CategoryScreen from '../screens/category/categoryScreen';
import SavedScreen from '../screens/saved/savedScreen';
import ProfileScreen from '../screens/profile/profileScreen';

const Tab = createBottomTabNavigator();

const BottomTabBarScreen = ({ navigation }) => {

    const backAction = () => {
        if (Platform.OS === "ios") {
            navigation.addListener("beforeRemove", (e) => {
                e.preventDefault();
            });
        } else {
            backClickCount == 1 ? BackHandler.exitApp() : _spring();
            return true;
        }
    };

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            navigation.addListener("gestureEnd", backAction);
            return () => {
                BackHandler.removeEventListener("hardwareBackPress", backAction);
                navigation.removeListener("gestureEnd", backAction);
            };
        }, [backAction])
    );

    function _spring() {
        setBackClickCount(1);
        setTimeout(() => {
            setBackClickCount(0);
        }, 1000);
    }

    const [backClickCount, setBackClickCount] = useState(0);

    return (
        <View style={{ flex: 1 }}>
            <MyStatusBar />
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: Colors.primaryColor,
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: Colors.whiteColor,
                    tabBarInactiveTintColor: Colors.grayColor,
                    tabBarStyle: { height: 70.0, backgroundColor: Colors.whiteColor, ...CommonStyles.shadow },
                    tabBarItemStyle: { height: 70.0 }
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={{ ...styles.tabIconCircle, backgroundColor: focused ? Colors.primaryColor : 'transparent' }}>
                                <MaterialIcons name="home" size={24} color={color} />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Category"
                    component={CategoryScreen}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={{ ...styles.tabIconCircle, backgroundColor: focused ? Colors.primaryColor : 'transparent' }}>
                                <MaterialIcons name="category" size={24} color={color} />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Saved"
                    component={SavedScreen}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={{ ...styles.tabIconCircle, backgroundColor: focused ? Colors.primaryColor : 'transparent' }}>
                                <MaterialIcons name="bookmark" size={24} color={color} />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={{ ...styles.tabIconCircle, backgroundColor: focused ? Colors.primaryColor : 'transparent' }}>
                                <MaterialIcons name="person" size={24} color={color} />
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
            {backClickCount == 1 ? <ExitToast /> : null}
        </View>
    );
}

export default BottomTabBarScreen;

const styles = StyleSheet.create({
    tabIconCircle: {
      width: 45.0,
      height: 45.0,
      borderRadius: 22.5,
      ...CommonStyles.center,
    }
  })