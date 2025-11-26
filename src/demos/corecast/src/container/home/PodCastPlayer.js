import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from 'react-native-slider';
import TrackPlayer, {
  Event,
  State,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import CHeaderIcon from '../../components/common/CHeaderIcon';
import {TabNav} from '../../navigation/NavigationKeys';
import {moderateScale} from '../../common/constants';
import {colors, styles} from '../../themes';
import CText from '../../components/common/CText';
import {
  play,
  pause,
  getCurrentTrack,
  seekTo,
  addTrackToQueue,
  getTrack,
  isTrackPlaying,
  nextTrack,
  previousTrack,
} from '../../utils/AudioPlayer';
import {downloadData} from '../../api/constant';
import {PlayerContext} from '../..';

export default function PodCastPlayer({navigation, route}) {
  const {item} = route.params;
  let {position, duration} = useProgress();
  const {action} = useContext(PlayerContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [sliderTotalLength, setSliderTotalLength] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [totalDuration, setTotalDuration] = useState('0:00');
  const [trackDetails, setTrackDetails] = useState({});
  const [isShuffle, setIsShuffle] = useState(false);

  useEffect(() => {
    initializePlayer();
  }, []);

  const initializePlayer = async () => {
    const currentTrackIndex = await getCurrentTrack();
    if (currentTrackIndex !== item.id) {
      await addTrackToQueue(downloadData);
      TrackPlayer.skip(item.id);
      setTrackDetails(item);
      play();
      setIsPlaying(true);
      action.setIsPlaying(true);
    } else {
      const track = await getTrack(item.id);
      setTrackDetails(track);
      const state = await isTrackPlaying();
      setIsPlaying(state === State.Playing);
      action.setIsPlaying(state === State.Playing);
    }
  };

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      setTrackDetails(track);
    }
  });

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
    if (isPlaying == State.Ready || isPlaying == State.Error) {
      setCurrentTime('0:00');
      setSliderPosition(0);
    }
  }, [isPlaying]);

  const onPressPlay = async () => {
    if (!isPlaying) {
      await play();
    } else {
      await pause();
    }
    action.setIsPlaying(!isPlaying);
    setIsPlaying(!isPlaying);
  };

  const onSlidingComplete = value => {
    seekTo(value);
    setSliderPosition(value);
    setCurrentTime(formatTime(value));
  };

  const onSliderValueChange = value => {
    setCurrentTime(formatTime(value));
  };

  const formatTime = totalSeconds => {
    if (totalSeconds) {
      let TotalSeconds = totalSeconds.toFixed(0);
      const minutes = Math.floor(TotalSeconds / 60);
      const seconds = TotalSeconds % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return '0:00';
  };

  const onPressNext = async () => await seekTo(position + 10);

  const onPressPrevious = async () => await seekTo(position - 10);

  const onPressNextSong = async () => {
    await nextTrack();
    play();
    setIsPlaying(true);
    action.setIsPlaying(true);
  };

  const onPressPreviousSong = async () => {
    await previousTrack();
    play();
    setIsPlaying(true);
    action.setIsPlaying(true);
  };

  const onPressShuffle = async () => {
    // if (isShuffle === false) {
    //   const shuffleQueue = downloadData.sort(() => Math.random() - 0.5);
    //   await TrackPlayer.setQueue(shuffleQueue);
    //   play();
    //   setIsPlaying(true);
    //   action.setIsPlaying(true);
    // } else {
    //   await TrackPlayer.setQueue(downloadData);
    //   play();
    //   setIsPlaying(true);
    //   action.setIsPlaying(true);
    // }
    setIsShuffle(!isShuffle);
  };

  const onPressDownload = () => navigation.navigate(TabNav.DownloadTab);

  const IconComponent = ({
    icon,
    onPress,
    size = moderateScale(28),
    color = colors.backgroundColor,
  }) => (
    <TouchableOpacity onPress={onPress} style={styles.ph5}>
      <Ionicons name={icon} size={size} color={color} />
    </TouchableOpacity>
  );

  return (
    <CSafeAreaView>
      <CHeader
        title={strings.playing}
        rightIcon={
          <CHeaderIcon
            icon={'cloud-download-outline'}
            onPress={onPressDownload}
          />
        }
      />
      <View style={localStyles.root}>
        <Image
          source={trackDetails?.authorImg}
          style={localStyles.authorImgStyle}
        />
        <View style={localStyles.bottomContainer}>
          <View style={styles.rowSpaceBetween}>
            <CText
              type={'S18'}
              color={colors.backgroundColor}
              style={styles.flex}>
              {trackDetails.title}
            </CText>
            <IconComponent
              icon={'cloud-download-outline'}
              onPress={onPressDownload}
            />
          </View>
          <CText
            type={'M14'}
            style={styles.mv10}
            color={colors.backgroundColor}
            numberOfLines={1}>
            {'by ' + trackDetails.podcast}
          </CText>
          <View style={localStyles.sliderContainer}>
            <Slider
              value={sliderPosition}
              minimumValue={0}
              maximumValue={sliderTotalLength}
              minimumTrackTintColor={colors.primaryDark}
              maximumTrackTintColor={colors.primaryLight}
              thumbTintColor={colors.primaryDark}
              onValueChange={onSliderValueChange}
              onSlidingComplete={onSlidingComplete}
              trackStyle={localStyles.sliderTrackStyle}
            />
          </View>
          <View style={localStyles.controlContainer}>
            <CText type={'S12'} color={colors.backgroundColor}>
              {currentTime}
            </CText>
            <CText type={'S12'} color={colors.backgroundColor}>
              {totalDuration}
            </CText>
          </View>
          <View style={localStyles.controlContainer}>
            <IconComponent icon={'refresh-outline'} />
            <View style={styles.rowCenter}>
              <IconComponent
                icon={'play-back-outline'}
                onPress={onPressPreviousSong}
              />
              <IconComponent
                icon={'play-skip-back-outline'}
                onPress={onPressPrevious}
              />
              <TouchableOpacity onPress={onPressPlay} style={styles.ph10}>
                <Ionicons
                  name={isPlaying ? 'pause-circle' : 'play'}
                  size={moderateScale(52)}
                  color={colors.backgroundColor}
                />
              </TouchableOpacity>
              <IconComponent
                onPress={onPressNext}
                icon={'play-skip-forward-outline'}
              />
              <IconComponent
                onPress={onPressNextSong}
                icon={'play-forward-outline'}
              />
            </View>
            <IconComponent
              icon={'shuffle'}
              color={isShuffle ? colors.primaryDark : colors.backgroundColor}
              onPress={onPressShuffle}
            />
          </View>
        </View>
      </View>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    ...styles.justifyBetween,
  },
  authorImgStyle: {
    height: '40%',
    width: '90%',
    borderRadius: moderateScale(20),
    ...styles.selfCenter,
    ...styles.mv20,
  },
  bottomContainer: {
    height: '45%',
    width: '100%',
    ...styles.p20,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    backgroundColor: colors.primaryMain,
  },
  controlContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt15,
  },
  sliderTrackStyle: {
    height: moderateScale(8),
    borderRadius: moderateScale(4),
  },
  sliderContainer: {
    ...styles.mt10,
  },
});
