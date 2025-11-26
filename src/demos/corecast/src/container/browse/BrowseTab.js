import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import {colors, styles} from '../../themes';
import CSubHeader from '../../components/common/CSubHeader';
import {browseCategoryData, downloadData} from '../../api/constant';
import CKeyBoardAvoidWrapper from '../../components/common/CKeyBoardAvoidWrapper';
import CInput from '../../components/common/CInput';
import DownloadComponent from '../../components/downloadComponent/DownloadComponent';

export default function BrowseTab() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(1);

  const onChangeSearch = text => setSearch(text);

  const onPressCategory = item => setCategory(item);

  const leftIcon = () => (
    <Ionicons
      name="search"
      size={moderateScale(20)}
      color={colors.textSecondary}
    />
  );

  const renderDownLoadPodCast = ({item, index}) => (
    <DownloadComponent item={item} />
  );

  const renderCategory = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressCategory(item.id)}
        style={localStyles.categoryContainer}>
        <View
          style={[
            localStyles.categoryIconStyle,
            {
              backgroundColor:
                category === item.id ? colors.primaryMain : colors.bColor,
            },
          ]}>
          <Ionicons
            name={item.icon}
            size={moderateScale(24)}
            color={
              category === item.id ? colors.backgroundColor : colors.textColor
            }
          />
        </View>
        <CText
          type={category === item.id ? 'S14' : 'R14'}
          color={category === item.id ? colors.primaryMain : colors.textColor}>
          {item.title}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <CSafeAreaView>
      <CKeyBoardAvoidWrapper contentContainerStyle={localStyles.root}>
        <CText type={'S24'}>{strings.browse}</CText>
        <CText type={'R12'} style={styles.mt5} color={colors.textSecondary}>
          {strings.browseDesc}
        </CText>
        <CInput
          placeholder={strings.searchPlaceholder}
          _value={search}
          toGetTextFieldValue={onChangeSearch}
          insideLeftIcon={leftIcon}
          inputContainerStyle={localStyles.inputContainerStyle}
        />
        <FlatList
          data={browseCategoryData}
          renderItem={renderCategory}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.mv10}
        />
        <CSubHeader title={strings.trendingPodCast} isViewAll={false} />
        <FlatList
          data={downloadData}
          renderItem={renderDownLoadPodCast}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          ListFooterComponent={<View style={styles.mv30} />}
        />
      </CKeyBoardAvoidWrapper>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph20,
    ...styles.pb50,
    ...styles.mt10,
  },
  inputContainerStyle: {
    backgroundColor: colors.bColor,
    ...styles.mt10,
  },
  categoryContainer: {
    ...styles.mr10,
    ...styles.center,
    ...styles.ph5,
  },
  categoryIconStyle: {
    height: moderateScale(64),
    width: moderateScale(64),
    borderRadius: moderateScale(32),
    backgroundColor: colors.bColor,
    ...styles.center,
    ...styles.mb10,
  },
});
