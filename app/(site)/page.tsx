import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            <div>
                <img className="w-full aspect-[4/1] object-cover object-center" src="https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_960_720.jpg" alt="" />
            </div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-6 pb-20">
                <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 py-20'>
                    <div className='w-full flex justify-center flex-col'>
                        <h2 className="text-white text-2xl">Disfruta en tu TV</h2>
                        <p className="text-white text-lg">Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
                    </div>
                    <div className='relative'>
                        <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" className="default-ltr-cache-1d3w5wq" />
                        <div className='overflow-hidden w-full h-full max-w-[73%] max-h-[54%] absolute top-[46%] left-1/2 z-[-1] transform -translate-x-1/2 -translate-y-1/2'>
                            <video autoPlay muted loop src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                                className="w-full brightness-[60%] object-cover h-full" />
                            {/* <video data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" >
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                            </video> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
