import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import {colors, styles} from '../../themes';
import images from '../../assets/images';
import CText from '../../components/common/CText';
import {moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import {
  categoryData,
  downloadData,
  podcastData,
  tendingPodcastData,
} from '../../api/constant';
import PodCastComponent from '../../components/homeComponent/PodCastComponent';
import CHeaderIcon from '../../components/common/CHeaderIcon';
import CSubHeader from '../../components/common/CSubHeader';
import TrendingPodCastComponent from '../../components/homeComponent/TrendingPodCastComponent';
import {StackNav} from '../../navigation/NavigationKeys';
import {addTrackToQueue, play, resetPlayer} from '../../utils/AudioPlayer';
import {PlayerContext} from '../..';

export default function HomeTab({navigation}) {
  const [category, setCategory] = useState('Recent🔥');
  const onPressCategory = item => setCategory(item);
  const {action} = useContext(PlayerContext);

  const onPressNotification = () => navigation.navigate(StackNav.Notification);

  const onPressPLayNow = async () => {
    await resetPlayer();
    await addTrackToQueue(downloadData);
    play();
    action.setIsPlaying(true);
  };

  const onPressDrawer = () => navigation.openDrawer();

  const renderItemCategory = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressCategory(item)}
        style={localStyles.categoryContainer}>
        <CText
          type={'S14'}
          color={category !== item ? colors.textSecondary : colors.textColor}>
          {item}
        </CText>
      </TouchableOpacity>
    );
  };

  const renderPodCast = ({item, index}) => (
    <PodCastComponent item={item} onPressPLayNow={onPressPLayNow} />
  );

  const renderTrending = ({item, index}) => (
    <TrendingPodCastComponent item={item} />
  );

  const renderHeader = () => {
    return (
      <View>
        <View style={localStyles.headerStyle}>
          <View style={styles.rowCenter}>
            <TouchableOpacity onPress={onPressDrawer}>
              <Image source={images.userImg} style={localStyles.userImgStyle} />
            </TouchableOpacity>
            <View style={styles.mh10}>
              <CText type={'S18'}>Hi, Tom!</CText>
              <CText type={'R12'}>Enjoy your favorite podcast.</CText>
            </View>
          </View>
          <CHeaderIcon
            icon={'notifications-outline'}
            onPress={onPressNotification}
          />
        </View>
        <CText type={'S32'} style={styles.mt10}>
          {'Listen Your \nFavorite'}
          <CText type={'S32'} color={colors.primaryMain}>
            {' '}
            Podcast
          </CText>
        </CText>
        <ImageBackground
          source={images.banner1}
          resizeMode="cover"
          imageStyle={{borderRadius: moderateScale(20)}}
          style={localStyles.bannerImgStyle}>
          <View style={localStyles.innerContainer}>
            <CText
              type={'R12'}
              style={{textTransform: 'uppercase', ...styles.mt10}}
              color={colors.backgroundColor}>
              {'top chart of the day'}
            </CText>
            <CText
              type={'S18'}
              color={colors.backgroundColor}
              style={styles.mt20}>
              {'Stuff You Should Know'}
            </CText>
            <TouchableOpacity
              onPress={onPressPLayNow}
              style={localStyles.playNowBtnStyle}>
              <Ionicons
                name="play-circle"
                size={moderateScale(26)}
                color={colors.primaryDark}
              />
              <CText
                type={'S14'}
                style={styles.ml10}
                color={colors.primaryDark}>
                {strings.playNow}
              </CText>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {/* <CSubHeader title={strings.trendingPodCast} style={styles.mt20} />
        <FlatList
          data={tendingPodcastData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderTrending}
          horizontal
          showsHorizontalScrollIndicator={false}
        /> */}
        <CText type={'S16'} style={styles.mt20}>
          {strings.listenPodcast}
        </CText>
        <FlatList
          data={categoryData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItemCategory}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <CSafeAreaView>
      <FlatList
        data={podcastData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderPodCast}
        numColumns={2}
        contentContainerStyle={styles.p20}
        ListHeaderComponent={renderHeader}
        columnWrapperStyle={styles.justifyBetween}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={styles.mv30} />}
      />
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  headerStyle: {
    ...styles.rowSpaceBetween,
  },
  userImgStyle: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(24),
  },
  bannerImgStyle: {
    ...styles.mt10,
    borderRadius: moderateScale(20),
  },
  playNowBtnStyle: {
    backgroundColor: colors.primaryLight,
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
});
