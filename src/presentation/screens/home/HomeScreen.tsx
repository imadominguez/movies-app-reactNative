import React from 'react';
import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';

export const HomeScreen = () => {
  const {isLoading, nowPlaying} = useMovies();

  return (
    <View
      style={{
        padding: 20,
      }}>
      <Text>HomeScreen</Text>

      {isLoading && <Text>Cargando</Text>}

      {nowPlaying && <Text>{JSON.stringify(nowPlaying)}</Text>}
    </View>
  );
};
