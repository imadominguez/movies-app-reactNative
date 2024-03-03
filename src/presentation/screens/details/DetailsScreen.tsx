import {useRoute} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/StackNavigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetails} from '../../components/movie/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  // const {movieId} = useRoute().params;
  const {movieId} = route.params;

  // Hacer peticion a la api para obtener la informacion del movieId
  const {isLoading, movie, cast} = useMovie(movieId);

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }
  return (
    <ScrollView>
      <MovieHeader
        title={movie!.title}
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
      />

      <MovieDetails movie={movie!} cast={cast!} />
    </ScrollView>
  );
};
