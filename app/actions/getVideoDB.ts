import axios from "axios";
import { ItemVideoInterface } from "../types";

const baseurl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
const apikey = process.env.NEXT_PUBLIC_TMDB_APIKEY;


const getVideoDB = async (
    watchId: string,
) => {
    const currentVideo: ItemVideoInterface[] = await axios.get(`${baseurl}/movie/${watchId}/videos?api_key=${apikey}`);

    if (!currentVideo) {
        return null;
    }

    return currentVideo;
};

export default getVideoDB;

// const baseurl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
// const apikey = process.env.NEXT_PUBLIC_TMDB_APIKEY;
// const type = "all";

// const [data, setData] = useState([]);

// const getData = async () => {
//     // const { data } = await axios.get(`${baseurl}/genre/movie/list?api_key=${apikey}`);
//     const { data } = await axios.get(`${baseurl}/trending/${type}/week?api_key=${apikey}`);
//     console.log(data.results);

//     setData(data.results);
// };


// useEffect(() => {
//     getData();
// }, []);
