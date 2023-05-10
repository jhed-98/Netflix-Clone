import axios from "axios";
import { FetchAllMovieResponse, FetchAllVideoResponse, ItemVideoInterface, MovieInterface, SmallMovieInterface } from "../types";

const baseurl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
const apikey = process.env.NEXT_PUBLIC_TMDB_APIKEY;

export const fechItemMovies = async (
    videoId: string,
    mediaType: string,
): Promise<ItemVideoInterface[]> => {
    const resp = await axios.get<FetchAllVideoResponse>(`${baseurl}/${mediaType}/${videoId}/videos?api_key=${apikey}`);
    const itemMovieList = resp.data.results;
    console.log(resp.data.results, 'VIDEOS HELPER');

    return transformSmalVideoIntoItem(itemMovieList);
}

const transformSmalVideoIntoItem = (itemMovieList: ItemVideoInterface[]): ItemVideoInterface[] => {
    const videoArr: ItemVideoInterface[] = itemMovieList.map(video => {
        const id = video.id;
        return {
            id,
            name: video.name,
            key: video.key,
            site: video.site,
            size: video.size,
            type: video.type,
            official: video.official,
            published_at: video.published_at
        }
    })
    return videoArr;
}