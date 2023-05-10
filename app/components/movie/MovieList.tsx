/* eslint-disable @next/next/no-img-element */
'use client'
import { MovieInterface } from '@/app/types';
import MovieCard from './MovieCard';

interface MovieListProps {
    dataVideo: MovieInterface[];
    title: string;
}

const MovieList: React.FC<MovieListProps> = ({ title, dataVideo }) => {
    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <div>
                <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                    {dataVideo.map((movieData) => (
                        <MovieCard key={movieData.id} data={movieData} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default MovieList
