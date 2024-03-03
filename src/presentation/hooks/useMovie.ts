import {useEffect, useMemo, useState} from 'react';
import * as UsesCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {FullMovie} from '../../core/entities/movie.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [movie, setMovie] = useState<FullMovie>();
  // Este custom hook realizara la peticion para buscar la movie por id a la db

  useEffect(() => {
    loadMovie.then(m => {
      setMovie(m);
      setIsLoading(false);
    });
  }, [movieId]);

  const loadMovie = useMemo(async () => {
    const moviePromise = await UsesCases.getMovieByIdUseCase(
      movieDBFetcher(),
      movieId,
    );

    return moviePromise;
  }, [movie]);

  return {
    isLoading,
    movie,
  };
};
