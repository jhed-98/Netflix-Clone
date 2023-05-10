
import CardParams from '@/app/components/card/CardParams';

interface IParams {
    tvId: string;
}

const TvId = async ({ params }: { params: IParams }) => {
    return (
        <div className="w-screen bg-black">
            {/* <CardParams videoId={params.videoId} /> */}
            <CardParams videoId={params.tvId} mediaType='tv' />
        </div>
    )
}

export default TvId
