import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Local Imports
import {StackRoute} from '../NavigationRoutes';
import {StackNav} from '../NavigationKeys';

const Stack = createNativeStackNavigator();

// Auth Stack
function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={StackNav.Connect}>
      <Stack.Screen name={StackNav.Login} component={StackRoute.Login} />
      <Stack.Screen name={StackNav.Register} component={StackRoute.Register} />
      <Stack.Screen
        name={StackNav.ChoseYourInterest}
        component={StackRoute.ChoseYourInterest}
      />
      <Stack.Screen name={StackNav.Connect} component={StackRoute.Connect} />
    </Stack.Navigator>
  );
}

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={StackNav.Splash}>
      <Stack.Screen name={StackNav.Splash} component={StackRoute.Splash} />
      <Stack.Screen name={StackNav.Auth} component={AuthNavigation} />
      <Stack.Screen name={StackNav.Drawer} component={StackRoute.Drawer} />
      <Stack.Screen name={StackNav.Connect} component={StackRoute.Connect} />
      <Stack.Screen
        name={StackNav.OnBoarding}
        component={StackRoute.OnBoarding}
      />
      <Stack.Screen name={StackNav.Login} component={StackRoute.Login} />
      <Stack.Screen
        name={StackNav.ChoseYourInterest}
        component={StackRoute.ChoseYourInterest}
      />
      <Stack.Screen name={StackNav.Register} component={StackRoute.Register} />
      <Stack.Screen
        name={StackNav.PodCastDetail}
        component={StackRoute.PodCastDetail}
      />
      <Stack.Screen
        name={StackNav.PodCastPlayer}
        component={StackRoute.PodCastPlayer}
      />
      <Stack.Screen
        name={StackNav.EditProfile}
        component={StackRoute.EditProfile}
      />
      <Stack.Screen
        name={StackNav.HelpCenter}
        component={StackRoute.HelpCenter}
      />
      <Stack.Screen
        name={StackNav.PrivacyPolicy}
        component={StackRoute.PrivacyPolicy}
      />
      <Stack.Screen name={StackNav.Setting} component={StackRoute.Setting} />
      <Stack.Screen
        name={StackNav.Notification}
        component={StackRoute.Notification}
      />
    </Stack.Navigator>
  );
}
