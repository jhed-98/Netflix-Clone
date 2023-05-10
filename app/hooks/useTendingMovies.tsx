import React, { useEffect, useState } from 'react'
import { MovieInterface } from '../types';
import { fechTrendingMovies } from '../helpers/fechTrendingMovies';

// export const useMovie = async (
//     page: number
// ) => {
export const useTendingMovies = (
    trending: string,
    page: number
) => {
    const [isLoading, setisLoadind] = useState(true);
    const [movies, setMovies] = useState<MovieInterface[]>([]);

    useEffect(() => {
        //Carga de los Peliculas
        fechTrendingMovies(trending, page).then(
            movies => {
                setisLoadind(false);
                setMovies(movies);
            }
        );
    }, [page])

    return { isLoading, movies }
} 
