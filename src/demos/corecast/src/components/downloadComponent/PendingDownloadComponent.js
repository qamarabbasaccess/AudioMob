import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local Imports
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';

export default function PendingDownloadComponent({item}) {
  return (
    <View
      style={[
        localStyles.podCastContainer,
        {
          backgroundColor: item?.bgColor,
          borderWidth: !item?.bWidth ? 0 : moderateScale(1),
          borderColor: colors.bColor,
        },
      ]}>
      <View style={localStyles.topContainer}>
        <Image source={item?.authorImg} style={localStyles.authorImgStyle} />
        <TouchableOpacity>
          <Ionicons
            name="cloud-download-outline"
            size={moderateScale(24)}
            color={item?.textColor ? colors.backgroundColor : colors.textColor}
          />
        </TouchableOpacity>
      </View>
      <CText
        type={'S14'}
        color={item?.textColor ? colors.backgroundColor : colors.textColor}
        style={styles.mt10}
        numberOfLines={1}>
        {'Life is more youthful'}
      </CText>
      <CText
        type={'R12'}
        style={styles.mt5}
        color={item?.textColor ? colors.bColor : colors.textSecondary}
        numberOfLines={1}>
        {'1 hourse left'}
      </CText>
      <View
        style={[
          localStyles.outerContainer,
          {
            backgroundColor: item?.downLoadColor,
          },
        ]}>
        <View
          style={[
            localStyles.innerContainer,
            {
              width: item?.progress,
              backgroundColor: item?.progressColor,
            },
          ]}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  topContainer: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.mb20,
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
  outerContainer: {
    backgroundColor: colors.primaryLight,
    borderRadius: moderateScale(8),
    ...styles.mt20,
    height: moderateScale(6),
  },
  innerContainer: {
    backgroundColor: colors.primaryMain,
    borderRadius: moderateScale(8),
    height: '100%',
  },
  authorImgStyle: {
    width: moderateScale(58),
    height: moderateScale(64),
    borderRadius: moderateScale(10),
  },
});
