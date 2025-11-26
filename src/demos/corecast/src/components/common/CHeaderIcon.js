import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local Imports
import {moderateScale} from '../../common/constants';
import {colors, styles} from '../../themes';

export default function CHeaderIcon({
  icon,
  onPress,
  style,
  iconSize = moderateScale(24),
}) {
  return (
    <TouchableOpacity
      style={[localStyles.backIconStyle, style]}
      onPress={onPress}>
      <Ionicons name={icon} size={iconSize} color={colors.textColor} />
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  backIconStyle: {
    height: moderateScale(36),
    width: moderateScale(36),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(18),
    borderColor: colors.bColor,
    ...styles.center,
  },
});
