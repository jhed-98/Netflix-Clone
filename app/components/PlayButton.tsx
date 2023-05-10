import React, { useCallback } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

interface PlayButtonProps {
  movieId: string;
  mediaType: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId, mediaType }) => {
  const router = useRouter();

  const redirectToWatch = useCallback(() => {
    if (mediaType === "movie") {
      router.push(`/films/${movieId}`);
    } else {
      router.push(`/tvs/${movieId}`);
    }
  }, [router, movieId]);

  return (
    <button
      onClick={redirectToWatch}
      className="
        bg-white 
        rounded-md 
        py-1 md:py-2 
        px-2 md:px-4
        w-auto 
        text-xs lg:text-lg 
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-neutral-300
        transition
        text-black
        "
    >
      <PlayIcon className="w-4 md:w-7 text-black mr-1" />
      Play
    </button>
  );
}

export default PlayButton;
