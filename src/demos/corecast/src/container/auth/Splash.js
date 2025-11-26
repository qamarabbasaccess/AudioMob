// Library Imports
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

// Local Imports
import {StackNav} from '../../navigation/NavigationKeys';
import {ACCESS_TOKEN, APP_OPEN_FIRST_TIME} from '../../common/constants';
import CSafeAreaView from '../../components/common/CSafeAreaView';
import {colors, styles} from '../../themes';

const Splash = ({navigation}) => {
  const asyncProcess = async () => {
    try {
      let asyncData = await AsyncStorage.multiGet([
        APP_OPEN_FIRST_TIME,
        ACCESS_TOKEN,
      ]);
      console.log('asyncData ', asyncData);
      if (!!asyncData) {
        const appOpenFirstTime = JSON.parse(asyncData[0][1]);
        const access_token = JSON.parse(asyncData[1][1]);
        if (!!access_token) {
          navigation.reset({
            index: 0,
            routes: [{name: StackNav.Drawer}],
          });
        } else {
          if (!!appOpenFirstTime) {
            console.log('appOpenFirstTime ', appOpenFirstTime);
            navigation.reset({
              index: 0,
              routes: [{name: StackNav.Auth}],
            });
          } else {
            console.log('appOpenFirstTime>>> ', appOpenFirstTime);
            navigation.reset({
              index: 0,
              routes: [{name: StackNav.OnBoarding}],
            });
          }
        }
      }
    } catch (e) {
      console.log('error ', e);
    }
  };

  useEffect(() => {
    SplashScreen.hide();
    asyncProcess();
  }, []);

  return (
    <CSafeAreaView style={{backgroundColor: colors.backgroundColor}}>
      <View style={localStyles.root}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    </CSafeAreaView>
  );
};

export default Splash;

const localStyles = StyleSheet.create({
  root: {
    ...styles.flexCenter,
  },
});
