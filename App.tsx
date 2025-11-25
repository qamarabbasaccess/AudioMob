// App.tsx
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hub from './src/hub/Hub';
import RNRoot from './src/demos/hotify/index';

export type RootStackParamList = {
  Hub: undefined;
  HotifyAppNavigator: undefined
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
