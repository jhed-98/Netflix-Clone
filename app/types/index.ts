// export interface MovieInterface {
//     id: string;
//     title: string;
//     description: string;
//     thumbnailUrl: string;
//     videoUrl: string;
//     duration: string;
//     genre: string;
// }
export interface FetchAllMovieResponse {
    count: number;
    next: null;
    previous: null;
    results: SmallMovieInterface[];
}export interface FetchAllVideoResponse {
    id: number;
    results: ItemVideoInterface[];
}
export interface SmallMovieInterface {
    id: string;
    adult: boolean;
    genre_ids: GenerInterface[];
    homepage: string;
    backdrop_path: string;
    belongs_to_collection: String[];
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: string;
    poster_path: string;
    title: string;
    release_date: string;
    video: boolean;
    vote_average: string;
    vote_count: string;
}
export interface MovieInterface {
    id: string;
    adult: boolean;
    genre_ids: GenerInterface[];
    geners: GenerInterface[];
    homepage: string;
    backdrop_path: string;
    belongs_to_collection: String[];
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: string;
    poster_path: string;
    title: string;
    release_date: string;
    video: boolean;
    vote_average: string;
    vote_count: string;
}
export interface GenerInterface {
    id: string;
    name: string;
}
export interface ItemVideoInterface {
    id: string;
    name: string;
    key: string;
    site: string;
    size: string;
    type: string;
    official: boolean;
    published_at: string;
}