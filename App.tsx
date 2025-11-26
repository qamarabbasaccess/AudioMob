// App.tsx
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hub from './src/hub/Hub';
import RNRoot from './src/demos/hotify/index';
import CollegioRoot from './src/demos/collegio/index';
import CorecastAppNavigator from './src/demos/corecast/src/navigation/index'

export type RootStackParamList = {
  Hub: undefined;
  HotifyAppNavigator: undefined;
  CollegioAppNavigator : undefined;
  CorecastAppNavigator : undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator initialRouteName="Hub" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Hub" component={Hub} />
        <Stack.Screen name="HotifyAppNavigator" component={RNRoot} />
        <Stack.Screen name="CollegioAppNavigator" component={CollegioRoot} />
        {/* <Stack.Screen name="CorecastAppNavigator" component={CorecastAppNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
