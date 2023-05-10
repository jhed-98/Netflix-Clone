import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className='overflow-hidden w-[calc(100% - 0px)]'>
                <div className="w-full min-h-[32rem] md:min-h-[30rem] flex-col p-0 mt-0 ml-0 relative bg-cover flex-wrap bg-hero-pattern">
                    {/* <img className="w-full min-h-[32rem] object-cover object-center" src="./images/hero.jpg" alt="" /> */}
                </div>
            </div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-6 pb-20 relative z-10 -mt-[310px] md:-mt-[218px]">
                {/* <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 py-20'>
                    <div className='w-full flex justify-center flex-col'>
                        <h2 className="text-white text-4xl font-semibold">Disfruta en tu TV</h2>
                        <p className="text-white text-lg">Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
                    </div>
                    <div className='relative'>
                        <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" className="default-ltr-cache-1d3w5wq" />
                        <div className='overflow-hidden w-full h-full max-w-[50%] md:max-w-[65%] lg:max-w-[75%] max-h-[54%] absolute top-[46%] left-1/2 z-[-1] transform -translate-x-[70%] lg:-translate-x-1/2 -translate-y-3/4 md:-translate-y-1/2'>
                            <video autoPlay muted loop src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                                className="w-full brightness-[60%] object-cover h-full" />
                        </div>
                    </div>
                </div> */}
                <div className='grid grid-cols-2 gap-4 py-4'>
                    <div className='bg-gradient-netflix'>
                        <div className='w-full'>
                            <div className='overflow-hidden w-full px-2 lg:px-9 pb-2 lg:pb-9 pt-6'>
                                <div className='flex flex- mt-0'>
                                    <div className='w-full relative flex'>
                                        <img width="100%" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png" alt="Disfruta en tu TV"
                                            className="default-ltr-cache-92t2lk e18pqjcv0" />
                                    </div>
                                </div>
                                <div className='flex p-0 box-border'>
                                    <div className='w-full flex justify-center flex-col'>
                                        <h2 className="text-white text-lg md:text-2xl lg:text-3xl font-semibold mb-4">Disfruta en tu TV</h2>
                                        <p className="text-white text-xs md:text-sm">Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gradient-netflix'>
                        <div className='w-full'>
                            <div className='overflow-hidden w-full px-2 lg:px-9 pb-2 lg:pb-9 pt-6'>
                                <div className='flex flex- mt-0'>
                                    <div className='w-full relative flex'>
                                        <img width="100%" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png" alt="Disfruta donde quieras"
                                            className="default-ltr-cache-92t2lk e18pqjcv0" />
                                    </div>
                                </div>
                                <div className='flex p-0 box-border'>
                                    <div className='w-full flex justify-center flex-col'>
                                        <h2 className="text-white text-lg md:text-2xl lg:text-3xl font-semibold mb-4">Disfruta donde quieras</h2>
                                        <p className="text-white text-xs md:text-sm">Películas y series ilimitadas en tu teléfono, tablet, computadora y TV.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
