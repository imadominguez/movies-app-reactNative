import React from 'react';
import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';

export const HomeScreen = () => {
  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();

  return (
    <View
      style={{
        padding: 20,
      }}>
      <Text>HomeScreen</Text>
    </View>
  );
};
