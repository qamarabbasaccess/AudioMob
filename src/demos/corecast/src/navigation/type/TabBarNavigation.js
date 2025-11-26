import {StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDrawerStatus} from '@react-navigation/drawer';

// Local Imports
import {TabRoute} from '../NavigationRoutes';
import {TabNav} from '../NavigationKeys';
import {colors, styles} from '../../themes';
import {getHeight, moderateScale} from '../../common/constants';
import {
  BrowseTabIcon,
  BrowseTabPrimaryIcon,
  DiscoverTabIcon,
  DiscoverTabPrimaryIcon,
  DownloadTabIcon,
  DownloadTabPrimaryIcon,
  HomeTabIcon,
  HomeTabPrimaryIcon,
  ProfileTabIcon,
  ProfileTabPrimaryIcon,
} from '../../assets/svgs';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import BottomPlayer from '../../components/homeComponent/BottomPlayer';

export default function TabBarNavigation({navigation}) {
  const Tab = createBottomTabNavigator();
  const iconSize = moderateScale(24);
  const isDrawerOpen = useDrawerStatus() === 'open';

  const TabText = memo(({IconActive, IconInActive, label, focused}) => (
    <View style={localStyle.tabViewContainer}>
      {focused ? (
        <IconActive height={iconSize} width={iconSize} />
      ) : (
        <IconInActive height={iconSize} width={iconSize} />
      )}
      <CText
        style={styles.mt5}
        numberOfLines={1}
        color={focused ? colors.primaryMain : colors.textSecondary}
        type={'R12'}>
        {label}
      </CText>
    </View>
  ));

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: [localStyle.tabBarStyle],
          tabBarShowLabel: false,
        }}
        initialRouteName={TabNav.HomeTab}>
        <Tab.Screen
          name={TabNav.HomeTab}
          component={TabRoute.HomeTab}
          options={{
            tabBarIcon: ({focused}) => (
              <TabText
                focused={focused}
                IconActive={HomeTabPrimaryIcon}
                IconInActive={HomeTabIcon}
                label={strings.home}
              />
            ),
          }}
        />
        <Tab.Screen
          name={TabNav.DownloadTab}
          component={TabRoute.DownloadTab}
          options={{
            tabBarIcon: ({focused}) => (
              <TabText
                focused={focused}
                IconActive={DownloadTabPrimaryIcon}
                IconInActive={DownloadTabIcon}
                label={strings.download}
              />
            ),
          }}
        />
        <Tab.Screen
          name={TabNav.DiscoverTab}
          component={TabRoute.DiscoverTab}
          options={{
            tabBarIcon: ({focused}) => (
              <TabText
                focused={focused}
                IconActive={DiscoverTabPrimaryIcon}
                IconInActive={DiscoverTabIcon}
                label={strings.discover}
              />
            ),
          }}
        />
        <Tab.Screen
          name={TabNav.BrowseTab}
          component={TabRoute.BrowseTab}
          options={{
            tabBarIcon: ({focused}) => (
              <TabText
                focused={focused}
                IconActive={BrowseTabPrimaryIcon}
                IconInActive={BrowseTabIcon}
                label={strings.browse}
              />
            ),
          }}
        />
        <Tab.Screen
          name={TabNav.ProfileTab}
          component={TabRoute.ProfileTab}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.openDrawer();
            },
          })}
          options={{
            tabBarIcon: ({focused}) => (
              <TabText
                focused={isDrawerOpen}
                IconActive={ProfileTabPrimaryIcon}
                IconInActive={ProfileTabIcon}
                label={strings.profile}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <BottomPlayer />
    </>
  );
}

const localStyle = StyleSheet.create({
  tabBarStyle: {
    height: getHeight(80),
    ...styles.ph20,
    borderTopWidth: 0,
    backgroundColor: colors.backgroundColor,
    ...styles.pt20,
  },
  tabViewContainer: {
    ...styles.center,
    width: moderateScale(100),
  },
});
