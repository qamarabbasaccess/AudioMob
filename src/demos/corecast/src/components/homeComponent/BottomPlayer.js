import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import * as Progress from 'react-native-progress';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useActiveTrack} from 'react-native-track-player';
import {useNavigation} from '@react-navigation/native';

// Local Imports
import {colors, styles} from '../../themes';
import CText from '../common/CText';
import {getHeight, isAndroid, moderateScale} from '../../common/constants';
import {PlayerContext} from '../..';
import {nextTrack, pause, play} from '../../utils/AudioPlayer';
import {StackNav} from '../../navigation/NavigationKeys';

export default function BottomPlayer() {
  const navigation = useNavigation();
  const {isPlaying, action} = useContext(PlayerContext);
  const isPlayerActive = useActiveTrack();

  const onPressPlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
    action.setIsPlaying(!isPlaying);
  };

  const onPressNextSong = async () => {
    await nextTrack();
    play();
    action.setIsPlaying(true);
  };

  const onPressOpenPlayer = () =>
    navigation.navigate(StackNav.PodCastPlayer, {item: isPlayerActive});

  if (!isPlayerActive?.title) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={onPressOpenPlayer}
      style={localStyles.rootContainer}>
      <View style={localStyles.headerStyle}>
        <View style={[styles.rowCenter, styles.flex]}>
          <Image
            source={isPlayerActive.authorImg}
            style={localStyles.userImgStyle}
          />
          <View style={[styles.mh10, styles.flex]}>
            <CText type={'M16'} numberOfLines={1}>
              {isPlayerActive.title}
            </CText>
            <CText numberOfLines={1} style={styles.mt5} type={'M12'}>
              {'by ' + isPlayerActive.podcast}
            </CText>
          </View>
        </View>
        <View style={styles.flexRow}>
          <TouchableOpacity
            onPress={onPressPlay}
            style={localStyles.playBtnContainer}>
            <Progress.CircleSnail
              size={moderateScale(50)}
              thickness={moderateScale(2)}
              animating={isPlaying}
              duration={2000}
              color={[colors.textColor, colors.primaryMain, colors.primaryDark]}
            />
            <Ionicons
              name={isPlaying ? 'pause-circle' : 'play-circle'}
              size={moderateScale(42)}
              color={colors.textColor}
              style={localStyles.playBtnStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressNextSong} style={styles.center}>
            <Ionicons
              name={'play-forward'}
              size={moderateScale(28)}
              color={colors.textColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  rootContainer: {
    backgroundColor: colors.primaryLight,
    width: '100%',
    ...styles.ph20,
    ...styles.pv10,
    position: 'absolute',
    bottom: isAndroid ? getHeight(65) : getHeight(70),
  },
  headerStyle: {
    ...styles.rowSpaceBetween,
  },
  userImgStyle: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: moderateScale(22),
  },
  playBtnContainer: {
    ...styles.center,
    ...styles.mr10,
  },
  playBtnStyle: {
    position: 'absolute',
  },
});
