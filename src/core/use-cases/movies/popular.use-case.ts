import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMoviesResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movie.entity';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MovieDBMoviesResponse>('/popular');

    // Adaptar lo que viene de nowPlaying.results al formato de la entidad Movie
    return popular.results.map(MovieMapper.formMovieResultToEntity);
  } catch (error) {
    throw new Error('error fetching movies popular');
  }
};
