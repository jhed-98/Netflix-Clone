'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useMovie } from '../hooks/useMovie';
import { MovieInterface } from '../types';
import { fechAllMovies } from '../helpers/fechAllMovies';
import InfoModal from '../components/InfoModal';
import useInfoModalStore from '../hooks/useInfoModalStore';
import { usePopularType } from '../hooks/usePopularType';
import MovieList from '../components/movie/MovieList';


const Films = () => {

    const [currentPage, setCurrentPage] = useState(1);
    // const { isLoading, movies } = useMovie(currentPage);
    const { isLoading, movies } = usePopularType(currentPage, 'movie');

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    }
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    const { isOpen, closeModal } = useInfoModalStore();

    return (
        <div className='pt-24'>
            <InfoModal visible={isOpen} onClose={closeModal} />
            {/* <p>You view {currentPage} pages</p> */}

            <div className='max-w-[100rem] mx-auto sm:px-6 lg:px-8 px-6 pb-20'>
                <MovieList dataVideo={movies} title="FILMS" />

                <div className='py-4 flex justify-center'>

                    <button onClick={prevPage} className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                        Previous
                    </button>
                    <button onClick={nextPage} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                        <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Films
