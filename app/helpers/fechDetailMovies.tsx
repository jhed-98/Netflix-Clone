import axios from "axios";
import { FetchAllMovieResponse, MovieInterface, SmallMovieInterface } from "../types";

const baseurl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
const apikey = process.env.NEXT_PUBLIC_TMDB_APIKEY;

export const fechDetailMovies = async (
    videoId: string,
    mediaType: string,
): Promise<MovieInterface> => {
    const resp = await axios.get<MovieInterface>(`${baseurl}/${mediaType}/${videoId}?api_key=${apikey}`);
    console.log(resp, `DETAIL ${mediaType} HELPER`);
    const itemMovieList = resp.data;
    // return transformSmallMovieIntoItem(itemMovieList); 
    const movieArr: MovieInterface = {
        id: itemMovieList.id,
        adult: itemMovieList.adult,
        genre_ids: [],
        geners: itemMovieList.geners,
        homepage: itemMovieList.homepage,
        backdrop_path: itemMovieList.backdrop_path,
        belongs_to_collection: itemMovieList.belongs_to_collection,
        media_type: itemMovieList.media_type,
        original_language: itemMovieList.original_language,
        original_name: itemMovieList.original_name ?? null,
        original_title: itemMovieList.original_title ?? null,
        overview: itemMovieList.overview,
        popularity: itemMovieList.popularity,
        poster_path: itemMovieList.poster_path,
        title: itemMovieList.title,
        release_date: itemMovieList.release_date,
        video: itemMovieList.video,
        vote_average: itemMovieList.vote_average,
        vote_count: itemMovieList.vote_count,
    };
    return movieArr;
}
