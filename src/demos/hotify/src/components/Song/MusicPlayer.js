// library import
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {useSelector} from 'react-redux';

// local import
import {styles} from '../../themes';
import ASafeAreaView from '../../components/common/ASafeAreaView';
import {
  ArrowUpDark,
  ArrowUpLight,
  Cast_Dark,
  Cast_Light,
  DotMenuDark,
  DotMenuLight,
  Menu_Dark,
  Menu_Light,
  Speed_Dark,
  Speed_Light,
  Timer_Dark,
  Timer_Light,
} from '../../assets/svgs';
import AHeader from '../../components/common/AHeader';
import {moderateScale, screenWidth} from '../../common/constants';
import AText from '../../components/common/AText';
import SliderComponent from './SliderComponent';
import strings from '../../i18n/strings';
import {trendingMusic} from '../../api/constant';

const MusicPlayer = ({route}) => {
  const item = route?.params?.item;
  const slideRef = useRef(null);

  const colors = useSelector(state => state.theme.theme);
  const [currentIndex, setCurrentIndex] = useState(0);

  const _onViewableItemsChanged = useCallback(({viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index);
  }, []);
  const _viewabilityConfig = {itemVisiblePercentThreshold: 50};

  const onPreviousPress = () => {
    if (currentIndex > 0) {
      slideRef.current._listRef._scrollRef.scrollTo({
        x: screenWidth * (currentIndex - 1),
        animated: true,
      });
    }
  };

  const onNextPress = () => {
    slideRef.current._listRef._scrollRef.scrollTo({
      x: screenWidth * (currentIndex + 1),
    });
  };

  const onPressMenu = () => {};

  const RightIcon = () => {
    return (
      <TouchableOpacity style={styles.pr10} onPress={onPressMenu}>
        {colors.dark ? <Menu_Dark /> : <Menu_Light />}
      </TouchableOpacity>
    );
  };

  const Button = ({darkIcon, lightIcon, onPressButton}) => {
    return (
      <TouchableOpacity onPress={onPressButton}>
        {colors.dark ? darkIcon : lightIcon}
      </TouchableOpacity>
    );
  };

  const Lyrics = () => {
    return (
      <View style={styles.center}>
        {colors.dark ? <ArrowUpDark /> : <ArrowUpLight />}
        <AText type="B18" align="center">
          {strings.lyrics}
        </AText>
        <View
          style={[
            localStyles.lyricsContainer,
            {
              backgroundColor: colors.dark ? colors.btnColor1 : colors.dark3,
            },
          ]}>
          <AText type="B24" style={{lineHeight: 50}}>
            {strings.songLyrics}
          </AText>
        </View>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View style={localStyles.mainContainer}>
        <View style={styles.ph20}>
          <Image source={item.image} style={localStyles.imageStyle} />
          <View
            style={[
              localStyles.detailContainer,
              {borderBottomColor: colors.borderColor},
            ]}>
            <AText type="B32" numberOfLines={1}>
              {item.songTitle}
            </AText>
            <AText type="M18" numberOfLines={1}>
              {item.singer}
            </AText>
          </View>
          <SliderComponent
            onNextPress={onNextPress}
            onPreviousPress={onPreviousPress}
            currentIndex={currentIndex}
          />
          <View style={localStyles.controlContainer}>
            <Button
              darkIcon={<Speed_Dark />}
              lightIcon={<Speed_Light />}
              onPressButton={() => {}}
            />
            <Button
              darkIcon={<Timer_Dark />}
              lightIcon={<Timer_Light />}
              onPressButton={() => {}}
            />
            <Button
              darkIcon={<Cast_Dark />}
              lightIcon={<Cast_Light />}
              onPressButton={() => {}}
            />
            <Button
              darkIcon={<DotMenuDark />}
              lightIcon={<DotMenuLight />}
              onPressButton={() => {}}
            />
          </View>
          <View style={localStyles.lyricSeparator}>
            <Lyrics />
          </View>
        </View>
      </View>
    );
  };

  return (
    <ASafeAreaView>
      <AHeader rightIcon={<RightIcon />} />
      <ScrollView showsVerticaslScrollIndicator={false}>
        <FlatList
          data={[item, ...trendingMusic]}
          ref={slideRef}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          horizontal
          onViewableItemsChanged={_onViewableItemsChanged}
          viewabilityConfig={_viewabilityConfig}
          pagingEnabled
        />
      </ScrollView>
    </ASafeAreaView>
  );
};

export default MusicPlayer;

const localStyles = StyleSheet.create({
  imageStyle: {
    height: screenWidth - moderateScale(70),
    width: screenWidth - moderateScale(40),
    borderRadius: moderateScale(40),
    ...styles.mv15,
  },
  detailContainer: {
    ...styles.center,
    borderBottomWidth: moderateScale(1),
    ...styles.pb20,
    ...styles.g10,
  },
  controlContainer: {
    ...styles.rowSpaceAround,
    ...styles.mt15,
  },
  lyricSeparator: {
    ...styles.center,
    ...styles.mt20,
  },
  lyricsContainer: {
    ...styles.p20,
    ...styles.mt20,
    borderRadius: moderateScale(30),
    height: screenWidth / 0.7,
  },
  mainContainer: {
    width: screenWidth,
  },
});
