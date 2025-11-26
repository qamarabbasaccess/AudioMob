import {View} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import TrackPlayer from 'react-native-track-player';

// Local Imports
import AppNavigator from './navigation';
import {styles} from './themes';

export const PlayerContext = createContext({
  isPlaying: false,
  action: {
    setIsPlaying: () => {},
  },
});

const PlayerContainer = ({children}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        action: {
          setIsPlaying,
        },
      }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default function index() {
  useEffect(() => {
    setupPlayer();
  }, []);

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
  };

  return (
    <View style={styles.flex}>
      <PlayerContainer>
        <AppNavigator />
      </PlayerContainer>
    </View>
  );
}
