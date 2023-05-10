/* eslint-disable @next/next/no-img-element */
'use client'
import { MovieInterface } from '@/app/types';
import MovieCard from './MovieCard';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import useInfoModalStore from '@/app/hooks/useInfoModalStore';
import PlayButton from '../PlayButton';

interface MovieListProps {
    dataVideo: MovieInterface[];
}

const Billboard: React.FC<MovieListProps> = ({ dataVideo }) => {

    const { openModal } = useInfoModalStore();

    // const handleOpenModal = useCallback(() => {
    //     openModal(dataVideo?.id, dataVideo?);
    // }, [openModal, dataVideo?.id]);

    return (
        <>
            {
                dataVideo.map((data) => (
                    <div key={data?.id} className="relative h-[56.25vw]">
                        <video poster={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data?.backdrop_path}`} className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
                            autoPlay muted loop src="{data?.videoUrl}"></video>
                        <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                            <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
                                {data?.original_title ?? data?.original_name}
                            </p>
                            <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                                {data?.overview}
                            </p>
                            <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                                <PlayButton movieId={data?.id} mediaType={data?.media_type} />
                                <button
                                    onClick={() => openModal(data.id, data.media_type)}
                                    className="bg-white text-white bg-opacity-30  rounded-md  py-1 md:py-2  px-2 md:px-4 w-auto  text-xs lg:text-lg  font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
                                    <InformationCircleIcon className="w-4 md:w-7 mr-1" />
                                    More Info
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Billboard
