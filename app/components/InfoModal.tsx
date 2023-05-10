'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import PlayButton from './PlayButton';
import FavoriteButton from './FavoriteButton';
import useInfoModalStore from '../hooks/useInfoModalStore';
import { useDetail } from '../hooks/useDetail';
import moment from 'moment';
import { fechDetailMovies } from '../helpers/fechDetailMovies';
import { ItemVideoInterface, MovieInterface } from '../types';
import { fechItemMovies } from '../helpers/fechItemMovies';

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(!!visible);

  const { movieId, movieType } = useInfoModalStore();

  const [detail, setDetails] = useState<MovieInterface>();
  const [movies, setMovies] = useState<ItemVideoInterface[]>([]);

  // const { data = {} } = useMovie(movieId);

  useEffect(() => {
    setIsVisible(!!visible);
    fechDetailMovies(movieId, movieType).then(
      resp => {
        setDetails(resp);
      }
    )
    fechItemMovies(movieId, movieType).then(
      resp => {
        setMovies(resp);
      }
    );
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  const filteredVideo = (): ItemVideoInterface[] => {
    // return movies.slice(0, 1)
    const filterd = movies.filter(movie => movie.type.includes("Trailer"));
    return filterd.slice(0, 1);
  }

  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">

      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div className={`${isVisible ? 'scale-100' : 'scale-0'} transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}>

          <div className="relative h-auto">
            {/* <video poster={detail?.thumbnailUrl} autoPlay muted loop src={detail?.videoUrl} className="w-full brightness-[60%] object-cover h-full" /> */}
            {/* <video poster={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${detail?.backdrop_path}`} autoPlay muted loop src={`https://www.themoviedb.org/video/play?key=KydqdKKyGEk`} className="w-full brightness-[60%] object-cover h-full" /> */}
            {/* <video poster={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${detail?.backdrop_path}`} autoPlay muted loop src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4`} className="w-full brightness-[60%] object-cover h-full" /> */}

            {filteredVideo().length < 1 && (
              <video poster={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${detail?.backdrop_path}`} autoPlay muted loop src="" className="w-full brightness-[60%] object-cover h-full" />
            )}
            {filteredVideo().map((movie) => (
              // movie.type === "Trailer" && (
              <div key={movie.id} className='embed-responsive'>
                <iframe
                  width="853"
                  height="480"
                  src={`https://www.youtube.com/embed/${movie.key}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${detail?.original_title}`}
                />
              </div>
              // )
            ))}
            <div onClick={handleClose} className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center">
              <XMarkIcon className="text-white w-6" />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-xl md:text-3xl h-full lg:text-4xl font-bold mb-8">
                {detail?.original_title ?? detail?.original_name}
              </p>
              <div className="flex flex-row gap-4 items-center">
                {/* <PlayButton movieId={data?.id} /> */}
                {/* <FavoriteButton movieId={data?.id} /> */}
              </div>
            </div>
          </div>

          <div className="px-12 py-8">
            <div className="flex flex-row items-center gap-2 mb-8">
              <p className="text-green-400 font-semibold text-lg uppercase">
                {movieType}
              </p>
              <p className="text-white text-lg">
                ({moment(detail?.release_date).format('Y')})
              </p>
              <p className="text-white text-lg">
                {/* {data?.genre} */}
              </p>
            </div>
            <p className="text-white text-lg">
              {detail?.overview}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default InfoModal;
