import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

// Local Imports
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import {StackNav} from '../../navigation/NavigationKeys';

export default function PodCastComponent({item, onPressPLayNow}) {
  const navigation = useNavigation();

  const onPressPodCast = () =>
    navigation.navigate(StackNav.PodCastDetail, {item});
  return (
    <TouchableOpacity
      onPress={onPressPodCast}
      style={[
        localStyles.podCastContainer,
        {
          backgroundColor: item?.bgColor,
        },
      ]}>
      <View style={localStyles.topContainer}>
        <Image source={item?.authorImg} style={localStyles.authorImgStyle} />
        <View style={localStyles.authorDetailContainer}>
          <CText type={'S16'} numberOfLines={2}>
            {item?.author}
          </CText>
          <CText
            type={'R12'}
            style={styles.mt5}
            color={colors.textSecondary}
            numberOfLines={1}>
            {'Podcastly'}
          </CText>
        </View>
      </View>
      <CText type={'M14'} style={styles.mt10} numberOfLines={1}>
        {'Life is more youthful'}
      </CText>
      <CText
        type={'R12'}
        style={styles.mt5}
        color={colors.textSecondary}
        numberOfLines={1}>
        {'1 hourse left'}
      </CText>
      <TouchableOpacity
        onPress={onPressPLayNow}
        style={localStyles.playBtnSTyle}>
        <Ionicons
          name="play-circle"
          size={moderateScale(24)}
          color={colors.primaryDark}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  topContainer: {
    ...styles.flexRow,
  },
  podCastContainer: {
    backgroundColor: colors.podCastColor1,
    ...styles.p15,
    ...styles.mt10,
    borderRadius: moderateScale(16),
    width: '48%',
  },
  authorDetailContainer: {
    ...styles.mh10,
    ...styles.flex,
  },
  playBtnSTyle: {
    backgroundColor: colors.primaryLight,
    borderRadius: moderateScale(4),
    ...styles.center,
    ...styles.mt20,
    height: moderateScale(40),
    width: moderateScale(40),
  },
  authorImgStyle: {
    width: moderateScale(58),
    height: moderateScale(64),
    borderRadius: moderateScale(10),
  },
});
