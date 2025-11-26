import {StyleSheet, TouchableOpacity, View} from 'react-native';

// Local Imports
import React from 'react';
import {colors, styles} from '../../themes';
import CText from './CText';
import strings from '../../i18n/strings';

export default function CSubHeader({title, isViewAll = true, style = {}}) {
  return (
    <View style={[localStyles.root, style]}>
      <CText type={'S16'}>{title}</CText>
      {isViewAll && (
        <TouchableOpacity>
          <CText type={'S14'} color={colors.primaryMain}>
            {strings.viewAll}
          </CText>
        </TouchableOpacity>
      )}
    </View>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.rowSpaceBetween,
    ...styles.mv10,
  },
});
