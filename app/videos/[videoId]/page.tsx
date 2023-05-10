'use client'
import { useEffect } from "react";
import CardParams from "./components/CardParams";
import { useRouter } from "next/navigation";

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