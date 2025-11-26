// Library import
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ActionSheet from 'react-native-actions-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom import
import {moderateScale} from '../../common/constants';
import {colors, styles} from '../../themes';
import CText from '../common/CText';
import strings from '../../i18n/strings';

const ProfilePicture = props => {
  const {SheetRef, onPressCamera, onPressGallery} = props;

  return (
    <ActionSheet
      ref={SheetRef}
      gestureEnabled={true}
      indicatorStyle={{
        backgroundColor: colors.textGray,
        ...styles.actionSheetIndicator,
      }}
      containerStyle={[localStyles.actionSheetContainer, {}]}>
      <View style={localStyles.bottomContainer}>
        <CText type={'M24'}>{strings.uploadProfilePicture}</CText>
        <TouchableOpacity
          style={localStyles.contextContainer}
          onPress={onPressCamera}>
          <Ionicons
            name="camera"
            size={moderateScale(26)}
            color={colors.primaryMain}
            style={styles.mr5}
          />
          <CText type={'s18'} style={styles.ml10}>
            {strings.takeAPicture}
          </CText>
        </TouchableOpacity>
        <TouchableOpacity
          style={localStyles.contextContainer}
          onPress={onPressGallery}>
          <Ionicons
            name="images"
            size={moderateScale(26)}
            color={colors.primaryMain}
            style={styles.mr5}
          />
          <CText type={'s18'} style={styles.ml10}>
            {strings.chooseFromGallery}
          </CText>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    ...styles.ph20,
    backgroundColor: colors.backgroundColor,
  },
  contextContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.mt20,
    ...styles.p15,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(15),
    borderColor: colors.primaryMain,
  },
  bottomContainer: {
    width: '100%',
    ...styles.selfCenter,
    paddingHorizontal: moderateScale(40),
    ...styles.mv30,
  },
});

export default ProfilePicture;
