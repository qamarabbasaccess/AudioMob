import {LogBox, StatusBar, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import AppNavigator from './navigation';
import {styles} from './themes';

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs(); //Ignore all log notifications
  }, []);
  const colors = useSelector(state => state.theme.theme);

  return (
    <View style={styles.flex}>
      <StatusBar
        barStyle={colors.dark === 'dark' ? 'light-content' : 'dark-content'}
      />
      <AppNavigator />
    </View>
  );
};

export default App;
