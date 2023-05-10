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

    const redirectToWatch = useCallback(() => router.push(`/videos/${data.id}`), [router, data.id]);

    return (
        <div className="group bg-zinc-800 col-span relative h-auto lg:h-[12vw] border border-gray-100">
            <div className=''>
                <img onClick={redirectToWatch} src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="Movie" draggable={false}
                    className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-auto lg:h-[12vw]" />
                <div className="block lg:hidden z-10 bg-zinc-800 p-2 lg:p-4  h-full w-full transition shadow-md rounded-b-md">
                    <h2 className='pb-2 text-lg font-semibold'>{data.original_title}</h2>
                </div>
            </div>
            <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
                <img onClick={redirectToWatch} src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="Movie" draggable={false}
                    className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-auto lg:h-[12vw]" />
                <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                    <h2 className='pb-2 text-lg font-semibold'>{data.original_title}</h2>
                    <div className="flex flex-row items-center gap-3">
                        <div onClick={redirectToWatch} className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
                            <PlayIcon className="text-black w-4 lg:w-6" />
                        </div>
                        <FavoriteButton movieId={data.id} />
                        <div onClick={() => openModal(data.id)} className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
                            <ChevronDownIcon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
                        </div>
                    </div>
                    <p className="text-green-400 font-semibold mt-4">
                        New <span className="text-white"> ({moment(data.release_date).format('Y')})</span>
                    </p>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">{data.adult ? '+18' : ''}</p>
                    </div>
                    {/* <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
                        <p className="text-white text-[10px] lg:text-sm">
                            {JSON.stringify(data.genre_ids)}
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
