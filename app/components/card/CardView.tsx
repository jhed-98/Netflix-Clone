/* eslint-disable @next/next/no-img-element */
import { ItemVideoInterface } from '@/app/types';

interface CardViewProps {
    data: ItemVideoInterface;
    autoplay?: boolean;
}

const CardView: React.FC<CardViewProps> = ({ data, autoplay }) => {

    return (
        <>
            <div>
                <div className='embed-responsive'>
                    < iframe key={data.id}
                        width="853"
                        height="480"
                        src={`https://www.youtube.com/embed/${data.key}?autoplay=${autoplay}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Trailer"
                    />
                </div>
            </div>
            {/* <video className="h-full w-full" autoPlay controls src={data?.videoUrl}></video>   */}
        </>
    )
}

export default CardView
