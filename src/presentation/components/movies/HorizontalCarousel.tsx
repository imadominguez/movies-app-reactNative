import React from 'react';
import {View, Text} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {FlatList} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster';

interface HorizontalCarouselProps {
  movies: Movie[];
  title?: string;
}

export const HorizontalCarousel = ({
  movies,
  title,
}: HorizontalCarouselProps) => {
  return (
    <View
      style={{
        height: !!title ? 260 : 220,
        marginHorizontal: 5,
      }}>
      {/* Titulo de la seccion */}
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: '300',
            marginLeft: 10,
            marginBottom: 10,
          }}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster
            movie={item}
            width={140}
            height={200}
            marginHorizontal={5}
          />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};