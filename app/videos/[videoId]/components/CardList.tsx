/* eslint-disable @next/next/no-img-element */
import { GenerInterface, ItemVideoInterface } from '@/app/types';
import CardView from './CardView';

interface CardListProps {
    data: ItemVideoInterface[];
}

const CardList: React.FC<CardListProps> = ({ data }) => {

    return (
        <>
            {data.map((movieData) => (
                <CardView key={movieData.id} data={movieData} />
            ))}
        </>
    )
}

export default CardList
