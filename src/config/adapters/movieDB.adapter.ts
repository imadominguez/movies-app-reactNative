import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: process.env.THE_MOVIE_KEY ?? 'aaa8b4f61fad42db740ac2136e8cafd6',
    lenguage: 'es',
  },
});
