import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CKeyBoardAvoidWrapper from '../../components/common/CKeyBoardAvoidWrapper';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import {colors, styles} from '../../themes';
import CInput from '../../components/common/CInput';
import {validateEmail, validatePassword} from '../../utils/validators';
import {moderateScale} from '../../common/constants';
import {StackNav} from '../../navigation/NavigationKeys';
import CButton from '../../components/common/CButton';
import CDivider from '../../components/common/CDivider';
import {showPopupWithOk} from '../../utils/helpers';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const onChangedEmail = val => {
    const {msg} = validateEmail(val.trim());
    setEmail(val.trim());
    setEmailError(msg);
  };
  const onChangedPassword = val => {
    const {msg} = validatePassword(val.trim());
    setPassword(val.trim());
    setPasswordError(msg);
  };

  const onPressSignWithPassword = async () => {
    if (!email || !password || emailError || passwordError) {
      showPopupWithOk(strings.cocast, strings.plsEnterValidEmailPassword);
    } else {
      navigation.replace(StackNav.ChoseYourInterest);
    }
  };

  const onPressPasswordEyeIcon = () => setIsPasswordVisible(!isPasswordVisible);
  const onPressSignUp = () => navigation.navigate(StackNav.Register);
  const onPressForgotPassword = () => {};

  const RightPasswordEyeIcon = () => (
    <TouchableOpacity
      onPress={onPressPasswordEyeIcon}
      style={localStyles.eyeIconContainer}>
      <Ionicons
        name={isPasswordVisible ? 'eye-off' : 'eye'}
        size={moderateScale(20)}
        color={colors.textColor}
      />
    </TouchableOpacity>
  );

  const SocialButtonIcon = ({icon}) => (
    <TouchableOpacity style={localStyles.socialBtnStyle}>
      <Ionicons name={icon} size={moderateScale(24)} color={colors.textColor} />
    </TouchableOpacity>
  );

  return (
    <CSafeAreaView>
      <CKeyBoardAvoidWrapper contentContainerStyle={styles.ph20}>
        <CText type={'S32'} style={styles.mt10}>
          {strings.loginYourAccount}
        </CText>
        <CText type={'M14'} color={colors.textSecondary} style={styles.mv10}>
          {strings.loginYourAccountDesc}
        </CText>
        <CInput
          label={strings.emailAddress}
          placeholder={strings.emailAddress}
          keyBoardType={'email-address'}
          _value={email}
          _errorText={emailError}
          autoCapitalize={'none'}
          toGetTextFieldValue={onChangedEmail}
        />
        <CInput
          label={strings.password}
          placeHolder={strings.password}
          keyBoardType={'default'}
          _value={password}
          _errorText={passwordError}
          autoCapitalize={'none'}
          toGetTextFieldValue={onChangedPassword}
          _isSecure={isPasswordVisible}
          rightAccessory={() => <RightPasswordEyeIcon />}
        />
        <CText
          type={'M14'}
          align={'right'}
          onPress={onPressForgotPassword}
          style={styles.pt10}
          color={colors.primaryMain}>
          {strings.forgotPassword}
        </CText>
        <CButton
          title={strings.signIn}
          textType={'b18'}
          containerStyle={localStyles.signBtnContainer}
          onPress={onPressSignWithPassword}
        />
        <View style={localStyles.continueContainer}>
          <CDivider style={localStyles.dividerStyle} />
          <CText type={'M14'} color={colors.textSecondary} style={styles.ph20}>
            {strings.orContinueWith}
          </CText>
          <CDivider style={localStyles.dividerStyle} />
        </View>
        <View style={styles.rowCenter}>
          <SocialButtonIcon icon={'logo-google'} />
          <SocialButtonIcon icon={'logo-facebook'} />
          <SocialButtonIcon icon={'logo-apple'} />
        </View>
        <View style={localStyles.signUpContainer}>
          <CText type={'M14'} color={colors.textSecondary}>
            {strings.dontHaveAccount}
          </CText>
          <CText
            type={'S14'}
            onPress={onPressSignUp}
            color={colors.primaryMain}>
            {strings.register}
          </CText>
        </View>
      </CKeyBoardAvoidWrapper>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  signBtnContainer: {
    ...styles.center,
    ...styles.mv20,
  },
  continueContainer: {
    ...styles.rowCenter,
    ...styles.mt15,
    ...styles.mb25,
  },
  dividerStyle: {
    width: '25%',
  },
  bottomTextContainer: {
    ...styles.rowCenter,
    ...styles.mv30,
  },
  socialBtnStyle: {
    ...styles.p10,
    ...styles.mh5,
    ...styles.rowCenter,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(8),
    borderColor: colors.bColor,
  },
  signUpContainer: {
    ...styles.rowCenter,
    ...styles.mv20,
  },
});
