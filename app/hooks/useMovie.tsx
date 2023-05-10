import React, { useEffect, useState } from 'react'
import { fechAllMovies } from '../helpers/fechAllMovies';
import { MovieInterface } from '../types';

// export const useMovie = async (
//     page: number
// ) => {
export const useMovie = (
    page: number
) => {
    const [isLoading, setisLoadind] = useState(true);
    const [movies, setMovies] = useState<MovieInterface[]>([]);

    useEffect(() => {
        //Carga de los Peliculas
        fechAllMovies(page).then(
            movies => {
                setisLoadind(false);
                setMovies(movies);
            }
        );
    }, [page])

    return { isLoading, movies }
} 
