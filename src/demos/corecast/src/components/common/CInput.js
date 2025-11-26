import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

// Local Imports
import {getHeight, moderateScale} from '../../common/constants';
import {colors, styles} from '../../themes';
import typography from '../../themes/typography';
import CText from './CText';

export default CInput = props => {
  let {
    _value,
    label,
    inputContainerStyle,
    inputBoxStyle,
    toGetTextFieldValue,
    placeHolder,
    keyBoardType,
    _onFocus,
    _onBlur,
    _errorText,
    _autoFocus,
    _isSecure,
    _maxLength,
    _editable = true,
    autoCapitalize,
    required = false,
    labelStyle,
    multiline,
    errorStyle,
    fieldRef,
    insideLeftIcon,
    showError = true,
    rightAccessory,
  } = props;
  let isAr = global.language == 'ar' ? true : false;

  // Change Text Input Value
  const onChangeText = val => {
    toGetTextFieldValue(val);
  };

  return (
    <View style={styles.mv10}>
      {label && (
        <View style={[localStyle.labelContainer, labelStyle]}>
          <View style={styles.flexRow}>
            <CText style={localStyle.labelText} type={'M14'}>
              {label}
            </CText>
            {required && <CText style={{color: colors.lightRed}}>{' *'}</CText>}
          </View>
        </View>
      )}
      <View
        style={[
          localStyle.inputContainer,
          isAr && styles.reverseRow,
          {
            borderColor: _errorText ? colors.lightRed : colors.bColor,
            height: multiline ? getHeight(70) : getHeight(52),
          },
          inputContainerStyle,
        ]}>
        {insideLeftIcon ? (
          <View style={styles.pr10}>{insideLeftIcon()}</View>
        ) : null}
        <TextInput
          ref={fieldRef}
          secureTextEntry={_isSecure}
          value={_value}
          maxLength={_maxLength}
          defaultValue={_value}
          autoFocus={_autoFocus}
          autoCorrect={false}
          autoCapitalize={autoCapitalize}
          placeholderTextColor={colors.textPlaceholder}
          onChangeText={onChangeText}
          keyboardType={keyBoardType}
          multiline={multiline}
          editable={_editable}
          onFocus={_onFocus}
          onBlur={_onBlur}
          placeholder={placeHolder}
          style={[
            localStyle.inputBox,
            {
              height: multiline ? getHeight(70) : getHeight(52),
              textAlign: isAr ? 'right' : 'left',
            },
            inputBoxStyle,
            _editable == false && {color: colors.textPlaceholder},
          ]}
          {...props}
        />
        {/* Right Icon And Content Inside TextInput */}
        <View style={isAr ? styles.ml15 : styles.mr15}>
          {rightAccessory ? rightAccessory() : null}
        </View>
      </View>
      {/* Error Text Message Of Input */}
      {!!_errorText?.length ? (
        <CText
          type={'r12'}
          style={{
            ...localStyle.errorText,
            ...errorStyle,
          }}>
          {_errorText}
        </CText>
      ) : null}

      {_maxLength && showError && _value?.length > _maxLength ? (
        <CText style={{...localStyle.errorText, ...errorStyle}}>
          It should be maximum {_maxLength} character
        </CText>
      ) : null}
    </View>
  );
};

const localStyle = StyleSheet.create({
  labelText: {
    textAlign: 'left',
    opacity: 0.9,
  },
  inputBox: {
    ...typography.fontSizes.f14,
    ...typography.fontWeights.Medium,
    ...styles.flex,
    color: colors.textColor,
  },
  inputContainer: {
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(8),
    ...styles.rowSpaceBetween,
    ...styles.ph15,
    width: '100%',
  },
  labelContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mb5,
  },
  errorText: {
    textAlign: 'left',
    ...styles.mt5,
    ...styles.ml10,
    color: colors.lightRed,
  },
});
