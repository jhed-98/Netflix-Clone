import axios from "axios";
import { FetchAllMovieResponse, GenerInterface, MovieInterface, SmallMovieInterface } from "../types";

const baseurl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
const apikey = process.env.NEXT_PUBLIC_TMDB_APIKEY;

export const fechPopularType = async (
    page: number,
    type: string,
): Promise<MovieInterface[]> => {
    const resp = await axios.get<FetchAllMovieResponse>(`${baseurl}/${type}/popular?api_key=${apikey}&page=${page}`);
    const smallMovieList = resp.data.results;
    console.log(resp.data.results, `CATALOG ${type} HELPER`);

    return transformSmallMovieIntoItem(smallMovieList, type);
}

const transformSmallMovieIntoItem = (smallMovieList: SmallMovieInterface[], media_type: string): MovieInterface[] => {
    const movieArr: MovieInterface[] = smallMovieList.map(movie => {
        const id = movie.id;
        const smallGeners = movie.genre_ids;
        return {
            id,
            adult: movie.adult,
            genre_ids: transformSmallGenerIntoItem(smallGeners),
            geners: [],
            homepage: movie.homepage,
            backdrop_path: movie.backdrop_path,
            belongs_to_collection: movie.belongs_to_collection,
            media_type: media_type,
            original_language: movie.original_language,
            original_name: movie.original_name ?? null,
            original_title: movie.original_title ?? null,
            overview: movie.overview,
            popularity: movie.popularity,
            poster_path: movie.poster_path,
            title: movie.title,
            release_date: movie.release_date,
            video: movie.video,
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,
        }
    })
    return movieArr;
}
const transformSmallGenerIntoItem = (smallGeners: GenerInterface[]): GenerInterface[] => {
    const geners: GenerInterface[] = smallGeners.map(gener => {
        const id = "" + gener;
        return {
            id,
            name: '',
        }
    })
    return geners;
}