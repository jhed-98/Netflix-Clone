import React, { useEffect, useState } from 'react'
import { fechAllMovies } from '../helpers/fechAllMovies';
import { MovieInterface } from '../types';
import { fechPopularType } from '../helpers/fechPopularType';

// export const useMovie = async (
//     page: number
// ) => {
export const usePopularType = (
    page: number,
    type: string,
) => {
    const [isLoading, setisLoadind] = useState(true);
    const [movies, setMovies] = useState<MovieInterface[]>([]);

    useEffect(() => {
        //Carga de los Peliculas
        fechPopularType(page, type).then(
            movies => {
                setisLoadind(false);
                setMovies(movies);
            }
        );
    }, [page])

    return { isLoading, movies }
} 
