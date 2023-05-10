/* eslint-disable @next/next/no-img-element */
import { GenerInterface, ItemVideoInterface, MovieInterface } from '@/app/types';
import CardView from './CardView';
import clsx from 'clsx';

interface CardDetailProps {
    data: MovieInterface;
}


const CardDetail: React.FC<CardDetailProps> = ({ data }) => {

    const url = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}`;
    // const url_portada = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${data.belongs_to_collection.poster_path}`;

    return (
        <>
            {/* <div className={clsx(`relative h-full w-full bg-cover bg-center bg-no-repeat bg-[url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}')] `)}> */}

            <div className="relative w-full">
                <img className="h-auto w-full object-cover object-center opacity-40 bg-gray-800" src={`${url}`} />
                <div className='relative md:absolute -mt-28 sm:-mt-40 md:mt-0 top-0 w-full h-full grid grid-cols-2 text-gray-200'>
                    <div className='flex justify-center items-center'>
                        {/* <img className="h-56 md:h-80 w-auto object-cover object-center p-4" src={`${url_portada}`} /> */}
                    </div>
                    <div>
                        <h1 className='text-white'>Info</h1>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CardDetail
