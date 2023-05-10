/* eslint-disable @next/next/no-img-element */
import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';

// import FavoriteButton from '@/components/FavoriteButton'; 
import { MovieInterface } from '@/app/types';
import useInfoModalStore from '@/app/hooks/useInfoModalStore';
import moment from 'moment';
import FavoriteButton from '@/app/components/FavoriteButton';

interface MovieCardProps {
    data: MovieInterface;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
    const router = useRouter();
    const { openModal } = useInfoModalStore();

    const redirectToWatch = useCallback(() => {
        if (data.media_type === "movie") {
            router.push(`/films/${data.id}`);
        } else {
            router.push(`/tvs/${data.id}`);
        }
    }, [router, data.id]);

    // const redirectToWatch = useCallback(() => router.push(`/videos/${data.id}`), [router, data.id]);
    // https://image.tmdb.org/t/p/w500
    // https://www.themoviedb.org/t/p/w220_and_h330_face
    // https://www.themoviedb.org/t/p/w300_and_h450_bestv2
    return (
        <div className="group bg-gray-900 relative h-auto border-4 rounded-md border-red-700"> {/* h-auto lg:h-[12vw] */}
            <div className='overflow-hidden  '>
                <img onClick={redirectToWatch} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path ?? data.backdrop_path}`} alt="Movie" draggable={false}
                    className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-70 group-hover:scale-105 delay-100 w-full h-auto" />{/* h-auto lg:h-[12vw] */}
                <div className="relative block z-10 bg-gray-900 p-2 lg:p-4 h-full w-full transition">
                    <div className='absolute -top-5 left-3'>
                        <div className='w-10 h-10 p-[2px] bg-gray-900 rounded-full border-2' style={{ borderColor: "#ffffff !important" }}>
                            <div className='relative inline-block w-full h-full text-center'>
                                <div className='h-full w-full flex items-center justify-center'>
                                    <span className='text-white pt-[1px] pl-[1px] text-base'>
                                        {Math.round(data.vote_average * 10)}
                                    </span>
                                    <span className='text-xs'> %</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute -top-5 right-3'>
                        <div className='w-12 h-12 p-[2px] bg-red-600 rounded-full'>
                            <div onClick={() => openModal(data.id, data.media_type)}
                                className="relative w-full h-full cursor-pointer ml-auto group/item border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
                                <PlayIcon className="text-white group-hover/item:text-neutral-300 w-6 lg:w-8" />
                            </div>
                        </div>
                    </div>

                    <h2 onClick={redirectToWatch} className='text-white pb-2 text-lg font-semibold mt-8 hover:text-red-700 cursor-pointer'>
                        {data.original_title ?? data.original_name}
                    </h2>
                    <p>
                        ({moment(data.release_date).format('LL')})
                    </p>
                    <p className="text-cyan-400 font-semibold mt-4 uppercase">
                        {data.media_type}
                    </p>
                </div>
            </div>
            {/* <div className="opacity-0 absolute top-0 transition duration-200 z-[60] invisible sm:visible delay-300 w-full scale-0 
            group-hover:scale-105 group-hover:-translate-y-[2vw] group-hover:translate-x-[0vw] group-hover:opacity-100">
                <img onClick={redirectToWatch} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path ?? data.backdrop_path}`} alt="Movie" draggable={false}
                    className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-auto" />
                <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                    <h2 className='pb-2 text-lg font-semibold'>
                        {data.original_title ?? data.original_name}
                    </h2>
                    <div className="flex flex-row items-center gap-3">
                        <div onClick={redirectToWatch} className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
                            <PlayIcon className="text-black w-4 lg:w-6" />
                        </div>
                        <FavoriteButton movieId={data.id} />
                        <div onClick={() => openModal(data.id, data.media_type)} className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
                            <ChevronDownIcon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
                        </div>
                    </div>
                    <p className="text-cyan-400 font-semibold mt-4 uppercase">
                        {data.media_type}
                        <span className="text-white"> ({moment(data.release_date).format('Y')})</span>
                    </p>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">{data.adult ? '+18' : ''}</p>
                    </div>
                    <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
                        <p className="text-white text-[10px] lg:text-sm">
                            {JSON.stringify(data.genre_ids)}
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default MovieCard;
