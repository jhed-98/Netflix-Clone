import React, { useEffect, useState } from 'react'
import { MovieInterface } from '../types';
import { fechDetailMovies } from '../helpers/fechDetailMovies';
import { error } from 'console';

export const useDetail = (
    videoId: string,
    mediaType: string,
) => {
    const [isLoadingDetail, setisLoadind] = useState(true);
    const [detail, setDetails] = useState<MovieInterface>();

    useEffect(() => {
        //Carga de los Peliculas
        fechDetailMovies(videoId, mediaType).then(
            resp => {
                setisLoadind(false);
                setDetails(resp);
            }
        )
    }, [])

    return { isLoadingDetail, detail }
} 
