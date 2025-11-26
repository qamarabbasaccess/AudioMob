import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CHeader from '../../components/common/CHeader';
import CKeyBoardAvoidWrapper from '../../components/common/CKeyBoardAvoidWrapper';
import {colors, styles} from '../../themes';
import images from '../../assets/images';
import {getHeight, moderateScale} from '../../common/constants';
import ProfilePicture from '../../components/models/ProfilePicture';
import CText from '../../components/common/CText';
import CInput from '../../components/common/CInput';
import strings from '../../i18n/strings';
import CButton from '../../components/common/CButton';

export default function EditProfile({navigation}) {
  const ProfilePictureSheetRef = useRef();
  const [selectImage, setSelectImage] = useState({
    uri: '',
    name: '',
    type: '',
  });
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [gender, setGender] = useState(strings.male);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const onPressSave = () => navigation.goBack();

  const onPressCamera = () => {
    ImagePicker.openCamera({
      mediaType: 'photo',
      includeBase64: true,
    })
      .then(image => {
        setSelectImage({
          uri: `${image.path}`,
          name: `${image.path.substring(image.path.lastIndexOf('/') + 1)}`,
          type: `${image.mime}`,
        });
      })
      .then(() => ProfilePictureSheetRef.current.hide());
  };

  const onPressGallery = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      includeBase64: true,
    })
      .then(image => {
        setSelectImage({
          uri: `${image.path}`,
          name: `${image.path.substring(image.path.lastIndexOf('/') + 1)}`,
          type: `${image.mime}`,
        });
      })
      .then(() => ProfilePictureSheetRef.current.hide());
  };

  const onPressImg = () => ProfilePictureSheetRef.current.show();

  const handleDateConfirm = date => {
    var expiryDate = date.toISOString().split('T')[0];
    const day = expiryDate.split('-')[2];
    const month = expiryDate.split('-')[1];
    const year = expiryDate.split('-')[0];
    setDateOfBirth(day + '/' + month + '/' + year);
    setDatePickerVisible(false);
  };

  const hideDatePicker = () => setDatePickerVisible(false);
  const onPressCalender = () => setDatePickerVisible(true);
  const onPressGender = val => setGender(val);
  const onChangeFullName = val => setFullName(val);
  const onChangePhoneNumber = val => setPhoneNumber(val);
  const onChangeEmail = val => setEmail(val);

  const RadioComponent = ({title}) => {
    return (
      <TouchableOpacity
        style={localStyles.genderComponent}
        onPress={() => onPressGender(title)}>
        <Ionicons
          name={gender === title ? 'checkmark-circle' : 'ellipse-outline'}
          size={moderateScale(24)}
          color={colors.primaryMain}
          style={styles.mr5}
        />
        <CText type={'M16'}>{title}</CText>
      </TouchableOpacity>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title="Edit Profile" />
      <CKeyBoardAvoidWrapper contentContainerStyle={styles.ph20}>
        <TouchableOpacity onPress={onPressImg}>
          <Image
            source={selectImage.uri ? {uri: selectImage.uri} : images.userImg}
            style={localStyles.userImgStyle}
          />
        </TouchableOpacity>
        <CInput
          label={strings.fullName}
          placeholder={'John Doe'}
          _value={fullName}
          toGetTextFieldValue={onChangeFullName}
        />
        <CText style={localStyles.labelText} type={'M14'}>
          {strings.dob}
        </CText>
        <TouchableOpacity
          onPress={onPressCalender}
          style={localStyles.dobStyle}>
          <CText
            type={'r16'}
            color={dateOfBirth ? colors.textColor : colors.textPlaceholder}>
            {dateOfBirth ? dateOfBirth : strings.dob}
          </CText>
          <Ionicons
            name="calendar"
            size={moderateScale(20)}
            color={colors.grayScale5}
            style={styles.mr5}
          />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={datePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
          date={new Date()}
          maximumDate={new Date()}
        />
        <CText style={localStyles.labelText} type={'M14'}>
          {strings.gender}
        </CText>
        <View style={localStyles.genderStyle}>
          <RadioComponent title={strings.male} />
          <RadioComponent title={strings.female} />
        </View>
        <CInput
          label={strings.phoneNumber}
          placeholder={'+1 875 765 874'}
          _value={phoneNumber}
          toGetTextFieldValue={onChangePhoneNumber}
          keyboardType={'number-pad'}
          maxLength={10}
        />
        <CInput
          label={strings.email}
          placeholder={'john@gmail.com'}
          _value={email}
          toGetTextFieldValue={onChangeEmail}
          keyboardType={'email-address'}
        />
      </CKeyBoardAvoidWrapper>
      <ProfilePicture
        onPressCamera={onPressCamera}
        onPressGallery={onPressGallery}
        SheetRef={ProfilePictureSheetRef}
      />
      <CButton
        title={strings.save}
        onPress={onPressSave}
        containerStyle={styles.m20}
      />
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  userImgStyle: {
    height: moderateScale(120),
    width: moderateScale(120),
    borderRadius: moderateScale(60),
    ...styles.selfCenter,
  },
  labelText: {
    textAlign: 'left',
    opacity: 0.9,
    ...styles.mt15,
  },
  dobStyle: {
    height: getHeight(52),
    ...styles.ph10,
    ...styles.mt10,
    ...styles.mb5,
    ...styles.rowSpaceBetween,
    borderColor: colors.bColor,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(8),
  },
  genderComponent: {
    ...styles.rowStart,
    ...styles.mr25,
  },
  genderStyle: {
    ...styles.rowStart,
    ...styles.mv10,
  },
});
