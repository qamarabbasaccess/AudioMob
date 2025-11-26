import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import {colors, styles} from '../../themes';
import CSubHeader from '../../components/common/CSubHeader';
import {discoverData, downloadData} from '../../api/constant';
import CKeyBoardAvoidWrapper from '../../components/common/CKeyBoardAvoidWrapper';
import CInput from '../../components/common/CInput';
import images from '../../assets/images';
import {PlayerContext} from '../..';
import {addTrackToQueue, play, resetPlayer} from '../../utils/AudioPlayer';

export default function DiscoverTab() {
  const [search, setSearch] = React.useState('');
  const {action} = useContext(PlayerContext);

  const onPressPLayNow = async () => {
    await resetPlayer();
    await addTrackToQueue(downloadData);
    play();
    action.setIsPlaying(true);
  };

  const onChangeSearch = text => setSearch(text);

  const renderItems = ({item, index}) => {
    return (
      <View style={localStyles.mainContainer}>
        <Image source={item?.categoryImg} style={localStyles.imgStyle} />
        <View style={localStyles.imgContainer}>
          <CText type={'S14'} color={colors.backgroundColor}>
            {item?.category}
          </CText>
        </View>
      </View>
    );
  };

  const leftIcon = () => (
    <Ionicons
      name="search"
      size={moderateScale(20)}
      color={colors.textSecondary}
    />
  );

  const renderHeader = () => {
    return (
      <View>
        <ImageBackground
          source={images.banner2}
          resizeMode="cover"
          imageStyle={{borderRadius: moderateScale(20)}}
          style={localStyles.bannerImgStyle}>
          <View style={localStyles.innerContainer}>
            <CText
              type={'R12'}
              style={{textTransform: 'uppercase', ...styles.mt10}}>
              {'top chart of the day'}
            </CText>
            <CText type={'S18'} style={styles.mt20}>
              {'Stuff You Should Know'}
            </CText>
            <TouchableOpacity
              onPress={onPressPLayNow}
              style={localStyles.playNowBtnStyle}>
              <Ionicons
                name="play-circle"
                size={moderateScale(26)}
                color={colors.backgroundColor}
              />
              <CText
                type={'S14'}
                style={styles.ml10}
                color={colors.backgroundColor}>
                {strings.playNow}
              </CText>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <CSubHeader title={strings.yourDownload} />
      </View>
    );
  };

  return (
    <CSafeAreaView>
      <CKeyBoardAvoidWrapper contentContainerStyle={localStyles.root}>
        <CText type={'S24'}>{strings.discover}</CText>
        <CText type={'R12'} style={styles.mt5} color={colors.textSecondary}>
          {strings.discoverDesc}
        </CText>
        <CInput
          placeholder={strings.searchPlaceholder}
          _value={search}
          toGetTextFieldValue={onChangeSearch}
          insideLeftIcon={leftIcon}
          inputContainerStyle={localStyles.inputContainerStyle}
        />
        {!search ? (
          <FlatList
            data={discoverData}
            renderItem={renderItems}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            columnWrapperStyle={styles.rowSpaceBetween}
            scrollEnabled={false}
            ListHeaderComponent={renderHeader}
          />
        ) : (
          <View style={localStyles.searchEmptyContainer}>
            <Image source={images.emptyImg} style={localStyles.emptyImgStyle} />
            <CText type={'S16'} style={styles.mt20}>
              {`No result for “${search}”`}
            </CText>
            <CText
              type={'M14'}
              color={colors.textSecondary}
              style={styles.mt10}>
              {strings.emptySearchDesc}
            </CText>
          </View>
        )}
        <View style={styles.mv30} />
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
  mainContainer: {
    ...styles.mt10,
    width: '48%',
  },
  imgStyle: {
    width: '100%',
    height: moderateScale(150),
    justifyContent: 'center',
    borderRadius: moderateScale(16),
  },
  imgContainer: {
    backgroundColor: colors.textColor,
    ...styles.ph15,
    ...styles.center,
    height: moderateScale(36),
    borderRadius: moderateScale(16),
    position: 'absolute',
    right: moderateScale(10),
    top: moderateScale(10),
  },
  inputContainerStyle: {
    backgroundColor: colors.bColor,
    ...styles.mt10,
  },
  bannerImgStyle: {
    ...styles.mt10,
    borderRadius: moderateScale(20),
  },
  playNowBtnStyle: {
    backgroundColor: colors.primaryMain,
    borderRadius: moderateScale(20),
    ...styles.rowStart,
    ...styles.mt50,
    ...styles.mb10,
    ...styles.ph10,
    height: moderateScale(40),
  },
  innerContainer: {
    ...styles.ml15,
    ...styles.mv10,
    ...styles.itemsStart,
    width: '45%',
  },
  categoryContainer: {
    ...styles.p10,
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
