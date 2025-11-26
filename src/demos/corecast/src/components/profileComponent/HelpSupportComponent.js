// Library Imports
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom Imports
import {moderateScale} from '../../common/constants';
import CText from '../common/CText';
import {colors, styles} from '../../themes';

export default HelpSupportComponent = ({item}) => {
  const [isDescShow, setIsDescShow] = useState(false);

  const onPressShow = () => setIsDescShow(!isDescShow);

  return (
    <TouchableOpacity style={localStyles.helperContainer} onPress={onPressShow}>
      <View style={localStyles.helperInnerContainer}>
        <CText type={'S18'} style={(styles.ph20, styles.flex)}>
          {item?.title}
        </CText>
        <Ionicons
          name="caret-down-outline"
          size={moderateScale(20)}
          color={colors.primaryMain}
          style={styles.mr5}
        />
      </View>
      {!!isDescShow && (
        <View
          style={[
            localStyles.textContainer,
            {
              borderTopColor: colors.dark
                ? colors.grayScale8
                : colors.grayScale3,
            },
          ]}>
          <CText
            type={'M16'}
            color={colors.textSecondary}
            style={[
              localStyles.helperDescription,
              {borderTopColor: colors.primary},
            ]}>
            {item?.description}
          </CText>
        </View>
      )}
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  helperContainer: {
    ...styles.mv10,
    ...styles.p15,
    ...styles.pv20,
    backgroundColor: colors.primaryTransparent,
    borderRadius: moderateScale(10),
  },
  helperInnerContainer: {
    ...styles.rowCenter,
    ...styles.flex,
  },
  helperDescription: {
    ...styles.pt15,
  },
  textContainer: {
    borderTopWidth: moderateScale(1),
    ...styles.mt10,
  },
});
