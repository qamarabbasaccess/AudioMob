import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Slider from 'react-native-slider';
import TrackPlayer, {State, useProgress} from 'react-native-track-player';

// Local Imports
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import {getHeight, moderateScale} from '../../common/constants';
import {StackNav} from '../../navigation/NavigationKeys';
import {pause, play, seekTo} from '../../utils/AudioPlayer';
import {PlayerContext} from '../..';

export default function TrendingPodCastComponent({item}) {
  const navigation = useNavigation();
  const playerContext = useContext(PlayerContext);
  const [isPlaying, setIsPlaying] = useState(false);
  let {position, duration} = useProgress();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [sliderTotalLength, setSliderTotalLength] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [totalDuration, setTotalDuration] = useState('0:00');

  useEffect(() => {
    playerContext.url === item.url;
  }, [playerContext.url]);

  useEffect(() => {
    if (position) {
      setSliderPosition(position);
      setCurrentTime(formatTime(position));
    }
  }, [position]);

  useEffect(() => {
    if (duration) {
      setSliderTotalLength(duration);
      setTotalDuration(formatTime(duration));
    }
  }, [duration]);

  useEffect(() => {
    if (isPlaying == State.Ready || isPlaying == State.Connecting) {
      setCurrentTime('0:00');
      setSliderPosition(0);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (position) {
    }
  }, [position]);

  const onSlidingComplete = value => {
    seekTo(value);
    setSliderTotalLength(duration);
    setCurrentTime(formatTime(position));
  };

  const onSliderValueChange = value => {
    console.log('value', value);
    setCurrentTime(formatTime(value));
  };

  const onPressRefresh = () => seekTo(0);
  const onPressShuffle = () => {};
  const onPressNext = () => seekTo(position + 10);
  const onPressPrevious = () => seekTo(position - 10);

  const formatTime = totalSeconds => {
    if (totalSeconds) {
      let TotalSeconds = totalSeconds?.toFixed(0);
      const minutes = Math.floor(TotalSeconds / 60);
      const seconds = TotalSeconds % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return '0:00';
  };

  const onPressPlay = async () => {};

  const onPressPodCast = () =>
    navigation.navigate(StackNav.PodCastDetail, {item});

  const IconComponent = ({icon, onPress, size = moderateScale(24)}) => (
    <TouchableOpacity onPress={onPress} style={styles.ph5}>
      <Ionicons name={icon} size={size} color={colors.backgroundColor} />
    </TouchableOpacity>
  );

  return (
    <TouchableOpacity
      onPress={onPressPodCast}
      style={[
        localStyles.podCastContainer,
        {
          backgroundColor: item?.bgColor,
        },
      ]}>
      <View style={localStyles.topContainer}>
        <Image source={item?.authorImg} style={localStyles.authorImgStyle} />
        <View style={localStyles.authorDetailContainer}>
          <CText type={'S16'} color={colors.backgroundColor} numberOfLines={2}>
            {item?.author}
          </CText>
          <CText
            type={'R12'}
            style={styles.mt10}
            color={colors.bColor}
            numberOfLines={1}>
            {'Podcastly'}
          </CText>
        </View>
      </View>
      <View style={localStyles.sliderContainer}>
        <Slider
          value={sliderPosition}
          minimumValue={0}
          maximumValue={sliderTotalLength}
          minimumTrackTintColor={colors.primaryMain}
          maximumTrackTintColor={colors.primaryLight}
          thumbTintColor={colors.primaryMain}
          onValueChange={onSliderValueChange}
          onSlidingComplete={onSlidingComplete}
          trackStyle={localStyles.sliderTrackStyle}
          style={localStyles.sliderStyle}
        />
      </View>
      <View style={localStyles.controlContainer}>
        <CText type={'M12'} color={colors.backgroundColor}>
          {currentTime}
        </CText>
        <CText type={'M12'} color={colors.backgroundColor}>
          {totalDuration}
        </CText>
      </View>
      <View style={localStyles.controlContainer}>
        <IconComponent onPress={onPressRefresh} icon={'refresh-outline'} />
        <View style={styles.rowCenter}>
          <IconComponent onPress={onPressPrevious} icon={'play-back-outline'} />
          <TouchableOpacity onPress={onPressPlay} style={styles.ph15}>
            <Ionicons
              name={playerContext.isPlaying ? 'pause-circle' : 'play'}
              size={moderateScale(32)}
              color={colors.backgroundColor}
            />
          </TouchableOpacity>
          <IconComponent onPress={onPressNext} icon={'play-forward-outline'} />
        </View>
        <IconComponent icon={'shuffle'} />
      </View>
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  topContainer: {
    ...styles.rowStart,
  },
  podCastContainer: {
    backgroundColor: colors.podCastColor1,
    ...styles.p15,
    ...styles.mt10,
    ...styles.mr15,
    borderRadius: moderateScale(16),
  },
  authorDetailContainer: {
    ...styles.mh10,
    ...styles.flex,
  },
  playBtnSTyle: {
    backgroundColor: colors.primaryLight,
    borderRadius: moderateScale(4),
    ...styles.center,
    ...styles.mt20,
    height: moderateScale(40),
    width: moderateScale(40),
  },
  authorImgStyle: {
    width: moderateScale(78),
    height: moderateScale(86),
    borderRadius: moderateScale(10),
  },
  controlContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt5,
    gap: moderateScale(10),
  },
  sliderContainer: {
    height: getHeight(40),
  },
});
