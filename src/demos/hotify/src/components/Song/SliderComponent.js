import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import Slider from '@react-native-community/slider';
import {useNavigation} from '@react-navigation/native';
// import Sound from 'react-native-sound';
import {useFocusEffect} from '@react-navigation/native';

// local imports
import {styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import AText from '../../components/common/AText';
import {
  Backward_Dark,
  Backward_Light,
  Forward_Dark,
  Forward_Light,
  Next_Dark,
  Next_Light,
  Pause,
  Play,
  Previous_Dark,
  Previous_Light,
} from '../../assets/svgs';

const SliderComponent = props => {
  const {onPreviousPress, onNextPress, currentIndex} = props;
  const colors = useSelector(state => state.theme.theme);

  const [sliderPosition, setSliderPosition] = useState(0);
  const [sliderTotalLength, setSliderTotalLength] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [totalDuration, setTotalDuration] = useState('0:00');
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    // loadSound();
    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      sound.getCurrentTime(seconds => {
        setSliderPosition(seconds);
        setCurrentTime(formatTime(seconds));
      });
    }, 100);
    return () => clearInterval(interval);
  }, [sound]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (sound) {
          sound.stop();
          setIsPlaying(false);
        }
      };
    }, [sound]),
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      if (sound) {
        sound.stop();
        setIsPlaying(false);
      }
    });

    return unsubscribe;
  }, [navigation, sound]);

  useEffect(() => {
    if (sliderPosition === 0) {
      setIsPlaying(false);
    }
  }, [sliderPosition]);

  // const loadSound = useCallback(() => {
  //   const newSound = new Sound(
  //     'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
  //     null,
  //     error => {
  //       if (error) {
  //         console.log('Failed to load sound', error);
  //         return;
  //       }
  //       setSound(newSound);
  //       setTotalDuration(formatTime(newSound.getDuration()));
  //       setSliderTotalLength(newSound.getDuration());
  //     },
  //   );
  //   setSound(newSound);
  // }, [currentIndex]);

  const onSliderValueChange = value => {
    if (sound) {
      sound.setCurrentTime(value);
      setSliderPosition(value);
      setCurrentTime(formatTime(value));
    }
  };

  const onBackWardPress = () => {
    if (sound) {
      sound.getCurrentTime(currentTime => {
        const newTime = Math.max(currentTime - 10, 0); // Ensure the time does not go below 0
        sound.setCurrentTime(newTime);
        console.log('Rewound 10 seconds to:', newTime);
      });
    } else {
      console.log('Sound is not initialized');
    }
  };

  const onForWardPress = () => {
    console.log('press');

    if (sound) {
      sound.getCurrentTime(currentTime => {
        const newTime = Math.min(currentTime + 10, sound.getDuration()); // Ensure it doesn't exceed duration
        sound.setCurrentTime(newTime);
        console.log('Forwarded 10 seconds to:', newTime);
      });
    } else {
      console.log('Sound is not initialized');
    }
  };

  const handlePlayMantra = async () => {
    if (sound) {
      if (isPlaying === true) {
        sound.pause();
        setIsPlaying(false);
      } else if (isPlaying === false) {
        sound.play();
        setIsPlaying(true);
      }
    }
  };

  const formatTime = totalSeconds => {
    if (totalSeconds) {
      let TotalSeconds = totalSeconds?.toFixed(0);
      const minutes = Math.floor(TotalSeconds / 60);
      const seconds = TotalSeconds % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return '0:00';
  };

  return (
    <View>
      <View style={localStyles.sliderContainer}>
        <Slider
          value={sliderPosition}
          minimumValue={0}
          maximumValue={sliderTotalLength}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor={colors.dark3}
          thumbTintColor={colors.primary}
          onValueChange={onSliderValueChange}
          style={localStyles.sliderTrackStyle}
        />
      </View>

      <View style={localStyles.durationContainer}>
        <AText type="M16" numberOfLines={1}>
          {currentTime}
        </AText>
        <AText type="M16" numberOfLines={1}>
          {totalDuration}
        </AText>
      </View>
      <View style={localStyles.controlContainer}>
        <TouchableOpacity onPress={onPreviousPress}>
          {colors.dark ? <Previous_Dark /> : <Previous_Light />}
        </TouchableOpacity>

        <TouchableOpacity onPress={onBackWardPress}>
          {colors.dark ? <Backward_Dark /> : <Backward_Light />}
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlayMantra}>
          {!!isPlaying ? (
            <Pause width={moderateScale(60)} height={moderateScale(60)} />
          ) : (
            <Play width={moderateScale(60)} height={moderateScale(60)} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={onForWardPress}>
          {colors.dark ? <Forward_Dark /> : <Forward_Light />}
        </TouchableOpacity>
        <TouchableOpacity onPress={onNextPress}>
          {colors.dark ? <Next_Dark /> : <Next_Light />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SliderComponent;

const localStyles = StyleSheet.create({
  sliderTrackStyle: {
    height: moderateScale(8),
    borderRadius: moderateScale(4),
  },
  sliderContainer: {
    ...styles.mt10,
  },
  durationContainer: {
    ...styles.rowSpaceBetween,
  },
  controlContainer: {
    ...styles.rowSpaceAround,
    ...styles.mt15,
  },
});
