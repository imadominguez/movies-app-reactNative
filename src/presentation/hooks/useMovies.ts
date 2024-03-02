import {useEffect, useMemo, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases/';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  // Estado para controlar la carga
  const [isLoading, setIsLoading] = useState(false);
  // Estado para almacenar las películas en reproducción actual
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  // Hacer una petición para obtener las películas en reproducción actual
  const initialLoad = useMemo(async () => {
    // Llama al caso de uso para obtener las películas en reproducción actual
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(
      movieDBFetcher,
    );

    // Devuelve las películas obtenidas
    return nowPlayingMovies;
  }, []); // La dependencia está vacía para que se ejecute solo una vez al montar el componente

  // Efecto para cargar las películas al montar el componente
  useEffect(() => {
    setIsLoading(true); // Indica que la carga está en progreso
    initialLoad.then(movies => {
      setNowPlaying(movies); // Actualiza el estado con las películas obtenidas
      setIsLoading(false); // Indica que la carga ha finalizado
    });
  }, [initialLoad]); // La dependencia es initialLoad

  // Devuelve los valores que deseas exponer en el hook (puedes agregar más si es necesario)
  return {
    isLoading,
    nowPlaying,
  };
};
