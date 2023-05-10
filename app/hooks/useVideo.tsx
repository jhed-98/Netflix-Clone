import React, { useEffect, useState } from 'react'
import { ItemVideoInterface } from '../types';
import { fechItemMovies } from '../helpers/fechItemMovies';

// export const useMovie = async (
//     page: number
// ) => {
export const useVideo = (
    videoId: string,
    mediaType: string,
) => {
    const [isLoadingVideo, setisLoadind] = useState(true);
    const [movies, setMovies] = useState<ItemVideoInterface[]>([]);

    useEffect(() => {
        //Carga de los Peliculas
        fechItemMovies(videoId, mediaType).then(
            movies => {
                setisLoadind(false);
                setMovies(movies);
            }
        );
    }, [])

    return { isLoadingVideo, movies }
} 
