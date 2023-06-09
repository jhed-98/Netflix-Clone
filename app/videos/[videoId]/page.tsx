import CardParams from "./components/CardParams";

interface IParams {
    videoId: string;
}

const VideoId = async ({ params }: { params: IParams }) => {

    return (
        <div className="w-screen bg-black">
            {/* <CardParams videoId={params.videoId} /> */}
            <CardParams videoId={params.videoId} mediaType='movie' />
        </div>
    );
}

export default VideoId;