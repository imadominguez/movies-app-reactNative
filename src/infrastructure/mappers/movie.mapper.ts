import {Movie} from '../../core/entities/movie.entity';
import {Result} from '../interfaces/movie-db.responses';

export class MovieMapper {
  static formMovieResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average.toString(),
      poster: `https://image.tmbdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmbdb.org/t/p/w500${result.backdrop_path}`,
    };
  }
}
