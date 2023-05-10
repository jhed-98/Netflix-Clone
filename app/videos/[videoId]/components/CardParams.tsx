/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import CardList from './CardList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import clsx from 'clsx';
import CardDetail from './CardDetail';
import { format } from 'date-fns'
import moment from 'moment';
import { useVideo } from '@/app/hooks/useVideo';
import { useDetail } from '@/app/hooks/useDetail';
import CardView from './CardView';
import Loading from '@/app/components/Loading';
import { ItemVideoInterface } from '@/app/types';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

interface CardParamsProps {
    videoId: string;
    mediaType: string;
}

const CardParams: React.FC<CardParamsProps> = ({ videoId, mediaType }) => {
    const router = useRouter();
    const { isLoadingDetail, detail } = useDetail(videoId, mediaType);
    const { isLoadingVideo, movies } = useVideo(videoId, mediaType);

    const [poster, setPoster] = useState([]);


    const filteredVideo = (): ItemVideoInterface[] => {
        // return movies.slice(0, 1)
        const filterd = movies.filter(movie => movie.type.includes("Trailer"));
        return filterd;
    }
    const filteredVideoClip = (): ItemVideoInterface[] => {
        // return movies.slice(0, 1)
        const filterd = movies.filter(movie => movie.type.includes("Clip"));
        return filterd;
    }

    return (
        <>
            {isLoadingDetail && <Loading />}
            <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
                <ArrowLeftIcon onClick={() => router.push('/browse')} className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition" />
                <p className="text-white text-1xl md:text-3xl font-bold">
                    <span className="font-light">Watching: </span>
                    <a href={detail?.homepage} target='_blank'>
                        {detail?.original_title}
                    </a>
                </p>
            </nav>

            <div className="relative w-full pt-12">
                <img className="h-auto w-full object-cover object-center opacity-20 bg-gray-900" src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${detail?.backdrop_path}`} />
                <div className='relative md:absolute pt-6 sm:pt-12 -mt-28 sm:-mt-40 md:mt-0 top-0 w-full h-full grid grid-cols-1 md:grid-cols-3 text-gray-200'>
                    <div className='flex justify-center items-center'>
                        <img className="h-96 sm:h-[75%] lg:h-[80%] w-auto object-cover object-center p-4" src={detail?.poster_path ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${detail?.poster_path}` : `https://image.tmdb.org/t/p/w300_and_h450_bestv2`} />
                    </div>
                    <div className='flex flex-col justify-center items-center md:col-span-2 space-y-4'>
                        <div className='w-full flex justify-start'>
                            <h1 className='text-white text-xl md:text-4xl'>
                                {detail?.original_title}   ({moment(detail?.release_date).format('Y')})
                            </h1>
                        </div>
                        <div>
                            <h2 className='text-white text-xl md:text-2xl mb-2'>Descripción general</h2>
                            <p className='px-4'>
                                {detail?.overview}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative space-y-4 px-8 py-8'>
                {/* <CardList data={movies} /> */}
                <h2 className='text-white text-xl md:text-2xl mb-4'>Trailer</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                    {filteredVideoClip().length < 1 && (
                        <h1>No hay Trailers Disponible</h1>
                    )}
                    {filteredVideo().map((movieData) => (
                        <CardView key={movieData.id} data={movieData} />
                    ))}
                </div>
                <h2 className='text-white text-xl md:text-2xl mb-4'>Clips</h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                    {filteredVideoClip().length < 1 && (
                        <h1>No hay Clips Disponible</h1>
                    )}
                    {filteredVideoClip().map((movieData) => (
                        <CardView key={movieData.id} data={movieData} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default CardParams
