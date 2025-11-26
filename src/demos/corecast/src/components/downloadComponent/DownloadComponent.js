import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

// Local Imports
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import {StackNav} from '../../navigation/NavigationKeys';

export default function DownloadComponent({item, isDownload = true}) {
  const navigation = useNavigation();

  const onPressPlay = () => navigation.navigate(StackNav.PodCastPlayer, {item});

  return (
    <TouchableOpacity onPress={onPressPlay} style={localStyles.root}>
      <Image source={item?.authorImg} style={localStyles.authorImgStyle} />
      <View style={localStyles.descContainer}>
        <View style={styles.flex}>
          <CText type={'M16'} numberOfLines={2}>
            {item?.title}
          </CText>
          <CText
            type={'R12'}
            style={styles.mt10}
            color={colors.textSecondary}
            numberOfLines={1}>
            {item?.time}
          </CText>
        </View>
        <TouchableOpacity
          onPress={onPressPlay}
          style={localStyles.playNowBtnStyle}>
          <Ionicons
            name={isDownload ? 'play-circle' : 'cloud-download-outline'}
            size={moderateScale(30)}
            color={colors.primaryMain}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.rowStart,
    ...styles.mv10,
  },
  descContainer: {
    ...styles.flex,
    ...styles.rowSpaceBetween,
    ...styles.ml10,
  },
  authorImgStyle: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(10),
  },
  playNowBtnStyle: {
    ...styles.p5,
  },
});
