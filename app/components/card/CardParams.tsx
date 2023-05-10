/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from 'react';
import moment from 'moment';
import { useVideo } from '@/app/hooks/useVideo';
import { useDetail } from '@/app/hooks/useDetail';
import Loading from '@/app/components/Loading';
import { ItemVideoInterface } from '@/app/types';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import CardView from './CardView';
import { FaLink } from "react-icons/fa";

interface CardParamsProps {
    videoId: string;
    mediaType: string;
}

const TOP_OFFSET = 66;

const CardParams: React.FC<CardParamsProps> = ({ videoId, mediaType }) => {
    const router = useRouter();
    const { isLoadingDetail, detail } = useDetail(videoId, mediaType);
    const { isLoadingVideo, movies } = useVideo(videoId, mediaType);

    const [poster, setPoster] = useState([]);

    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // console.log(window.scrollY)
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const filteredVideoPrimary = (): ItemVideoInterface[] => {
        // return movies.slice(0, 1)
        const filterd = movies.filter(movie => movie.type.includes("Trailer"));
        return filterd.slice(0, 1);
    }
    const filteredVideo = (): ItemVideoInterface[] => {
        // return movies.slice(0, 1)
        const filterd = movies.filter(movie => movie.type.includes("Trailer"));
        return filterd.slice(1);
    }
    const filteredVideoClip = (): ItemVideoInterface[] => {
        // return movies.slice(0, 1)
        const filterd = movies.filter(movie => movie.type.includes("Clip"));
        return filterd;
    }

    return (
        <>
            {isLoadingDetail && <Loading />}
            <nav className={`fixed w-full p-4 z-50 mt-16 flex flex-row items-center gap-8  transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
                <ArrowLeftIcon onClick={() => router.push('/browse')} className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition" />
                <p className="text-white text-lg lg:text-2xl font-bold">
                    <span className="font-light">Viendo: </span>
                    <a href={detail?.homepage} target='_blank'>
                        {detail?.original_title ?? detail?.original_name}
                    </a>
                </p>
            </nav>

            <div className="relative w-full pt-36 px-8">
                <img className="h-auto lg:h-[45rem] w-full object-cover object-center opacity-20 bg-gray-900" src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${detail?.backdrop_path}`} />
                <div className='relative lg:absolute pt-0 md:pt-10 -mt-28 sm:-mt-72 lg:mt-0 top-0 w-full h-full grid grid-cols-1 lg:grid-cols-3 text-gray-200'>
                    <div className='flex justify-center items-center'>
                        <img className="h-96 sm:h-[75%] w-auto object-cover object-center p-4" src={detail?.poster_path ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${detail?.poster_path}` : `https://image.tmdb.org/t/p/w300_and_h450_bestv2`} />
                    </div>
                    <div className='w-full lg:max-w-2xl xl:max-w-3xl flex flex-col justify-center items-center lg:col-span-2 space-y-4'>
                        <div className='w-full flex justify-start'>
                            <h1 className='text-white font-semibold text-2xl lg:text-3xl'>
                                {detail?.original_title ?? detail?.original_name}   ({moment(detail?.release_date).format('Y')})
                            </h1>
                        </div>
                        <div className='flex flex-col justify-start'>
                            <h2 className='text-white text-xl lg:text-2xl mb-2'>Descripción general</h2>
                            <p className='px-4'>
                                {detail?.overview}
                            </p>
                        </div>

                        <div className=' w-full flex flex-col justify-start items-start'>
                            <a href={detail?.homepage}>
                                <div
                                    className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition text-black">
                                    <FaLink className="w-4 md:w-7 text-black mr-1" /> Sitio Web
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative space-y-4 px-8 py-8'>
                {/* <CardList data={movies} /> */}
                <h2 className='text-white text-xl md:text-2xl mb-4'>Trailer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                    {filteredVideoPrimary().length < 1 && (
                        <h1>No hay Trailers Disponible</h1>
                    )}
                    {filteredVideoPrimary().map((movieData) => (
                        <CardView key={movieData.id} data={movieData} autoplay />
                    ))}
                    {filteredVideo().map((movieData) => (
                        <CardView key={movieData.id} data={movieData} />
                    ))}
                </div>
                <h2 className='text-white text-xl md:text-2xl mb-4'>Clips</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
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
