import CardParams from "@/app/components/card/CardParams";

interface IParams {
    filmId: string;
}

const VideoId = async ({ params }: { params: IParams }) => {

    return (
        <div className="w-screen bg-black">
            {/* <CardParams videoId={params.videoId} /> */}
            <CardParams videoId={params.filmId} mediaType='movie' />
        </div>
    );
}

export default VideoId;