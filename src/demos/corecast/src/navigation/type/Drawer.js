import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

// Local Imports
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import {StackNav} from '../NavigationKeys';
import {StackRoute} from '../NavigationRoutes';
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CText from '../../components/common/CText';
import images from '../../assets/images';
import {drawerData} from '../../api/constant';
import CButton from '../../components/common/CButton';
import {showPopupWithOkAndCancel} from '../../utils/helpers';
import strings from '../../i18n/strings';

const Drawer = createDrawerNavigator();

function MyDrawer({navigation}) {
  const onPressCategory = item => navigation.navigate(item.onPress);

  const onPressOk = () =>
    navigation.reset({index: 0, routes: [{name: StackNav.Connect}]});

  const onPressLogOut = () => {
    showPopupWithOkAndCancel(strings.logOut, strings.logOutDesc, onPressOk);
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressCategory(item)}
        style={localStyles.menuContainer}>
        <View style={styles.rowStart}>
          <View style={localStyles.iconStyle}>
            <Ionicons
              name={item.icon}
              size={moderateScale(20)}
              color={colors.primaryMain}
            />
          </View>
          <CText type={'M14'} style={styles.ml10}>
            {item.title}
          </CText>
        </View>
        <Ionicons
          name={'chevron-forward-outline'}
          size={moderateScale(20)}
          color={colors.textColor}
        />
      </TouchableOpacity>
    );
  };

  const LogOutIcon = () => (
    <Ionicons
      name={'log-out-outline'}
      size={moderateScale(20)}
      color={colors.redColor1}
      style={styles.mr10}
    />
  );

  return (
    <CSafeAreaView>
      <View style={localStyles.headerContainer}>
        <Image source={images.userImg} style={localStyles.userImgStyle} />
        <View style={styles.mh10}>
          <CText type={'S18'}>Hi, Tom!</CText>
          <CText type={'R12'}>samuelalbert@gmail.com</CText>
        </View>
      </View>
      <FlatList
        data={drawerData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
      />
      <CButton
        title={strings.logOut}
        onPress={onPressLogOut}
        frontIcon={<LogOutIcon />}
        color={colors.redColor1}
        bgColor={colors.backgroundColor}
        containerStyle={localStyles.logOutBtnStyle}
      />
    </CSafeAreaView>
  );
}

export default function DrawerScreen({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName={StackNav.TabBar}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: '70%',
          borderRadius: moderateScale(20),
        },
      }}
      drawerContent={props => <MyDrawer {...props} navigation={navigation} />}>
      <Drawer.Screen name={StackNav.TabBar} component={StackRoute.TabBar} />
    </Drawer.Navigator>
  );
}

const localStyles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.primaryMain,
    height: moderateScale(74),
    ...styles.rowSpaceBetween,
    ...styles.ph10,
    ...styles.mb20,
  },
  notificationStyle: {
    height: moderateScale(38),
    width: moderateScale(38),
    backgroundColor: colors.backgroundColor,
    borderRadius: moderateScale(19),
    ...styles.center,
  },
  textComponentStyle: {
    width: '90%',
    ...styles.selfCenter,
    ...styles.pv15,
    ...styles.mt5,
    borderBottomWidth: moderateScale(1),
    borderBottomColor: colors.textGray,
  },
  userImgStyle: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(24),
  },
  headerContainer: {
    ...styles.rowStart,
    ...styles.p20,
    ...styles.mb20,
    borderBottomWidth: moderateScale(2),
    borderBottomColor: colors.textPlaceholder,
  },
  iconStyle: {
    height: moderateScale(38),
    width: moderateScale(38),
    backgroundColor: colors.primaryTransparent,
    borderRadius: moderateScale(10),
    ...styles.center,
  },
  menuContainer: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.pv10,
  },
  logOutBtnStyle: {
    borderColor: colors.textGray,
    borderWidth: moderateScale(1),
    ...styles.m20,
  },
});
