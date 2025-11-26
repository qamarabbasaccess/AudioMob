import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import images from '../../assets/images';
import {colors, styles} from '../../themes';
import CButton from '../../components/common/CButton';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import {StackNav} from '../../navigation/NavigationKeys';

export default function Connect({navigation}) {
  const onPressLoginLater = () =>
    navigation.reset({index: 0, routes: [{name: StackNav.Drawer}]});

  const onPressLogin = () => navigation.navigate(StackNav.Login);

  const LeftIcon = ({icon}) => (
    <Ionicons
      name={icon}
      size={moderateScale(24)}
      color={colors.textColor}
      style={styles.mr10}
    />
  );

  return (
    <CSafeAreaView>
      <ImageBackground
        source={images.connectBg}
        style={localStyles.connectContainer}>
        <View style={styles.mh20}>
          <CButton
            title={strings.joinFacebook}
            containerStyle={styles.mb20}
            frontIcon={<LeftIcon icon={'logo-facebook'} />}
            onPress={onPressLogin}
          />
          <CButton
            title={strings.joinGoogle}
            bgColor={colors.backgroundColor}
            containerStyle={styles.mb20}
            frontIcon={<LeftIcon icon={'logo-google'} />}
            onPress={onPressLogin}
          />
          <CButton
            title={strings.loginWithMail}
            containerStyle={styles.mb20}
            frontIcon={<LeftIcon icon={'mail'} />}
            onPress={onPressLogin}
          />
          <CButton
            title={strings.loginLater}
            color={colors.backgroundColor}
            bgColor={colors.primaryMain}
            containerStyle={localStyles.joinLaterBtn}
            onPress={onPressLoginLater}
          />
        </View>
      </ImageBackground>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  connectContainer: {
    height: '100%',
    width: '100%',
    ...styles.justifyEnd,
  },
  joinLaterBtn: {
    borderWidth: moderateScale(1),
    borderColor: colors.backgroundColor,
    ...styles.mb20,
  },
});
