import {FlatList, Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom Imports
import {colors, styles} from '../../themes';
import CText from '../../components/common/CText';
import CKeyBoardAvoidWrapper from '../../components/common/CKeyBoardAvoidWrapper';
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CInput from '../../components/common/CInput';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import CHeader from '../../components/common/CHeader';
import images from '../../assets/images';
import HelpSupportComponent from '../../components/profileComponent/HelpSupportComponent';
import {helperData} from '../../api/constant';

export default function HelpCenter({navigation}) {
  const [faqData, setFaqData] = useState(helperData);
  const [search, setSearch] = useState('');

  useEffect(() => {
    filterData();
  }, [search]);

  const filterData = () => {
    if (!!search) {
      const filteredData = helperData.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
      setFaqData(filteredData);
    } else {
      setFaqData(helperData);
    }
  };

  const onChangeSearch = val => setSearch(val);

  const leftIcon = () => (
    <Ionicons
      name="search"
      size={moderateScale(20)}
      color={colors.textSecondary}
    />
  );

  const renderItem = ({item}) => <HelpSupportComponent item={item} />;

  const renderEmpty = () => (
    <View style={localStyles.searchEmptyContainer}>
      <Image source={images.emptyImg} style={localStyles.emptyImgStyle} />
      <CText type={'S16'} style={styles.mt20}>
        {`No result for “${search}”`}
      </CText>
      <CText type={'M14'} color={colors.textSecondary} style={styles.mt10}>
        {strings.emptySearchDesc}
      </CText>
    </View>
  );

  return (
    <CSafeAreaView>
      <CHeader title={strings.helpCenter} />
      <CKeyBoardAvoidWrapper contentContainerStyle={localStyles.root}>
        <CInput
          placeholder={'Search...'}
          _value={search}
          toGetTextFieldValue={onChangeSearch}
          insideLeftIcon={leftIcon}
          inputContainerStyle={localStyles.inputContainerStyle}
        />
        <FlatList
          data={faqData}
          renderItem={renderItem}
          keyExtractor={(item, index) => item + index}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          ListEmptyComponent={renderEmpty}
        />
      </CKeyBoardAvoidWrapper>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph20,
    ...styles.pb50,
  },
  inputContainerStyle: {
    backgroundColor: colors.primaryTransparent,
    ...styles.mt10,
  },
  searchEmptyContainer: {
    ...styles.itemsCenter,
    ...styles.justifyCenter,
    ...styles.mt20,
  },
  emptyImgStyle: {
    ...styles.mt20,
    width: moderateScale(160),
    height: moderateScale(160),
  },
});
